import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-extrabold text-2xl mb-6 inline-block">
              <Image
                src="/Img/Logo_Softtek.png"
                alt="Softtek Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 max-w-sm">
              Socio estratégico de transformación digital mediante Automatización Inteligente e IA Aplicada corporativa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Servicios</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>
                <a href="#soluciones" className="hover:text-secondary transition-colors">
                  Automatización RPA
                </a>
              </li>
              <li>
                <a href="#ia" className="hover:text-secondary transition-colors">
                  Agentes de Inteligencia Artificial
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-secondary transition-colors">
                  Integración de Sistemas
                </a>
              </li>
              <li>
                <a href="#plataformas" className="hover:text-secondary transition-colors">
                  Automatización de Datos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Empresa</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>
                <a href="#metodologia" className="hover:text-secondary transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#casos-uso" className="hover:text-secondary transition-colors">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-secondary transition-colors">
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Softtek RPA Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
