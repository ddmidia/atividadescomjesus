export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 bg-[#151515]">
      <div className="container mx-auto text-center text-sm text-gray-400">
        <p>&copy; {currentYear} Faithful Creations. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
