export default function Footer() {
  const currentYear = 2024;
  return (
    <footer className="py-6 bg-footer">
      <div className="container mx-auto text-center text-sm text-gray-400">
        <p>&copy; {currentYear} Faithful Creations. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
