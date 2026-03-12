import { FadeIn } from "@/components/ui/FadeIn";

export function MethodologySection() {
  const steps = [
    {
      title: "Análisis del proceso",
      desc: "Mapeo profundo de la operativa, levantamiento de requerimientos y volumetría.",
    },
    {
      title: "Identificación de automatización",
      desc: "Selección de los flujos de máxima viabilidad técnica y mayor retorno de inversión.",
    },
    {
      title: "Diseño de solución",
      desc: 'Arquitectura ("To-Be"), definición de infraestructura y flujos de excepciones aplicables.',
    },
    {
      title: "Desarrollo",
      desc: "Construcción de bots y agentes IA siguiendo rigurosos estándares corporativos.",
    },
    {
      title: "Pruebas",
      desc: "Ejecución integral de UAT, validando la estabilidad en entornos pre-productivos.",
    },
    {
      title: "Implementación",
      desc: "Puesta en producción controlada (hypercare), estabilización y capacitación a usuarios clave.",
    },
    {
      title: "Mejora continua",
      desc: "Soporte proactivo, monitorización continua y optimización evolutiva de los procesos entregados.",
    },
  ];

  return (
    <section className="bg-white py-24" id="metodologia">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Metodología</h2>
          <p className="text-muted text-lg">
            Proceso estructurado de implementación de clase mundial liderado por expertos de Softtek.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto relative relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-secondary before:via-accent before:to-primary">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <FadeIn
                delay={index * 0.15}
                direction={index % 2 === 0 ? "right" : "left"}
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pb-8 ${index === steps.length - 1 ? "pb-0" : ""}`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-lg hover:border-secondary/20 relative before:absolute before:top-1/2 before:-left-3 md:group-odd:before:-left-3 md:group-even:before:-right-3 md:group-odd:before:translate-x-0 md:group-even:before:-translate-x-0 before:w-3 before:h-3 before:bg-white before:border-t before:border-r before:border-gray-100 before:-mt-1.5 before:rotate-[-135deg] md:group-odd:before:rotate-[-135deg] md:group-even:before:rotate-[45deg] z-10">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="md:hidden text-secondary font-black">0{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">{step.desc}</p>
                </div>
              </FadeIn>
              
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center text-white justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary shadow z-20 font-bold transition-transform duration-300 group-hover:scale-125">
                 {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
