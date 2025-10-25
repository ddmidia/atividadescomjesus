export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 bg-muted/50">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Faithful Creations. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
