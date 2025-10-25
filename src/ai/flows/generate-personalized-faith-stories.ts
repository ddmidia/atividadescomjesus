'use server';

/**
 * @fileOverview Generates personalized faith-based stories for children.
 *
 * - generatePersonalizedFaithStories - A function that generates a personalized faith story.
 * - GeneratePersonalizedFaithStoriesInput - The input type for the generatePersonalizedFaithStories function.
 * - GeneratePersonalizedFaithStoriesOutput - The return type for the generatePersonalizedFaithStories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedFaithStoriesInputSchema = z.object({
  childAge: z
    .number()
    .describe('The age of the child, in years, for whom the story is being generated.'),
  childInterests: z
    .string()
    .describe(
      'A comma-separated list of the child\'s interests, e.g., animals, sports, space.'
    ),
  desiredStoryLength: z
    .string()
    .describe('The desired length of the story: short, medium, or long.'),
});
export type GeneratePersonalizedFaithStoriesInput = z.infer<
  typeof GeneratePersonalizedFaithStoriesInputSchema
>;

const GeneratePersonalizedFaithStoriesOutputSchema = z.object({
  story: z.string().describe('The generated faith-based story.'),
});
export type GeneratePersonalizedFaithStoriesOutput = z.infer<
  typeof GeneratePersonalizedFaithStoriesOutputSchema
>;

export async function generatePersonalizedFaithStories(
  input: GeneratePersonalizedFaithStoriesInput
): Promise<GeneratePersonalizedFaithStoriesOutput> {
  return generatePersonalizedFaithStoriesFlow(input);
}

const generatePersonalizedFaithStoriesPrompt = ai.definePrompt({
  name: 'generatePersonalizedFaithStoriesPrompt',
  input: {schema: GeneratePersonalizedFaithStoriesInputSchema},
  output: {schema: GeneratePersonalizedFaithStoriesOutputSchema},
  prompt: `You are a children's story writer who specializes in faith-based stories.

You will generate a short story that incorporates biblical themes and is tailored to the child's age and interests.

Child's Age: {{{childAge}}}
Child's Interests: {{{childInterests}}}
Desired Story Length: {{{desiredStoryLength}}}

Write a story that is appropriate for the child's age and interests.  The story should have a clear moral and teach a lesson about faith.
`,
});

const generatePersonalizedFaithStoriesFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedFaithStoriesFlow',
    inputSchema: GeneratePersonalizedFaithStoriesInputSchema,
    outputSchema: GeneratePersonalizedFaithStoriesOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedFaithStoriesPrompt(input);
    return output!;
  }
);
