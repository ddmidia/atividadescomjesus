export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-footer">
      <div className="container mx-auto text-center text-xs text-gray-400 space-y-2">
        <p>&copy; {currentYear} Colorindo Fé e Alegria | Todos os direitos reservados.</p>
        <p>Material digital de educação cristã para uso pessoal e educativo.</p>
      </div>
    </footer>
  );
}
