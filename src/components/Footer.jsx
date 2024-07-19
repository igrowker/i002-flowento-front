function Footer() {
  return (
    <footer className="py-4 text-xs font-lato bg-gray300 md:text-base">
      <div className="flex justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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

