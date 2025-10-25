"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  generatePersonalizedFaithStories
} from "@/ai/flows/generate-personalized-faith-stories";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  childAge: z.coerce
    .number({ invalid_type_error: "Idade deve ser um número." })
    .min(3, "A idade deve ser entre 3 e 9 anos.")
    .max(9, "A idade deve ser entre 3 e 9 anos."),
  childInterests: z
    .string()
    .min(3, "Por favor, insira pelo menos um interesse."),
  desiredStoryLength: z.enum(["short", "medium", "long"]),
});

type FormData = z.infer<typeof formSchema>;

export default function StoryGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState("");
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childAge: 5,
      childInterests: "animais, natureza",
      desiredStoryLength: "short",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setStory("");
    try {
      const result = await generatePersonalizedFaithStories(values);
      if (result && result.story) {
        setStory(result.story);
      } else {
        throw new Error("A história não pôde ser gerada.");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description:
          "Ocorreu um erro ao gerar sua história. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Gerador de Histórias</CardTitle>
        <CardDescription>Preencha os campos para criar sua história.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="childAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idade da Criança</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Ex: 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredStoryLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tamanho da História</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tamanho" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="short">Curta</SelectItem>
                        <SelectItem value="medium">Média</SelectItem>
                        <SelectItem value="long">Longa</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
              control={form.control}
              name="childInterests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interesses (separados por vírgula)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: dinossauros, princesas, espaço" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full cta-glow">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando Mágica...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Gerar História
                </>
              )}
            </Button>
          </form>
        </Form>
        {story && (
          <div className="mt-6 space-y-4 pt-6 border-t">
              <h3 className="font-headline text-xl font-bold">Sua História Personalizada</h3>
              <Card className="bg-primary/20">
                <CardContent className="p-4">
                  <p className="whitespace-pre-wrap font-body text-primary-foreground">
                    {story}
                  </p>
                </CardContent>
              </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
