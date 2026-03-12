import { FadeIn } from "@/components/ui/FadeIn";

export function UsecasesSection() {
  const usecases = [
    {
      dept: "SAP",
      title: "Ciclo de Pedidos SAP: Reducción de 4 horas a 12 minutos con 0% de error",
      desc: "Automatización end-to-end de creación y validación de pedidos en SAP ECC y S/4HANA.",
    },
    {
      dept: "ServiceNow",
      title: "Auditoría ITSM: Consolidación de 3,000 reportes semanales sin intervención",
      desc: "Extracción autónoma y cruce de datos para accesos vehiculares y control de personal.",
    },
    {
      dept: "ITSM",
      title: "Soporte ITSM: Agente autónomo que resuelve el 60% de incidencias Nivel 1",
      desc: "Agente conversacional capaz de analizar, enrutar y resolver solicitudes de acceso automáticamente.",
    },
    {
      dept: "Frida",
      title: "Operaciones Solman: TCO reducido en 35% en gestión de tickets",
      desc: "Orquestación de infraestructura mediante Frida, consolidando creación, asignación y cierre de tickets.",
    },
  ];

  return (
    <section className="bg-bg-light py-24" id="casos-uso">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Casos de Uso de Automatización
          </h2>
          <p className="text-muted text-lg">
            Descubra cómo resolvemos desafíos complejos del mundo real.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {usecases.map((usecase, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div>
                <div className="mb-4 inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {usecase.dept}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {usecase.title}
                </h3>
              </div>
              <p className="text-muted leading-relaxed">
                {usecase.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
