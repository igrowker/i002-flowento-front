function Footer() {
  return (
    <footer className="font-lato bg-gray300 py-4 text-xs md:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <ul className="flex">
          <li>
            <a
              href="https://marinadeempresas.es/politica-de-cookies/"
              className="text-white underline hover:text-white"
            >
              Política de Cookies
            </a>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <a
              href="https://marinadeempresas.es/aviso-legal/"
              className="text-white underline hover:text-white"
            >
              Aviso Legal
            </a>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <a
              href="https://marinadeempresas.es/politica-de-privacidad/"
              className="text-white underline hover:text-white"
            >
              Política de Privacidad
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
