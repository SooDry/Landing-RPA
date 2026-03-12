import { FadeIn } from "@/components/ui/FadeIn";
import { HandCoins, WarningCircle, HourglassHigh, Plugs, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";

export function ProblemsSection() {
  const problems = [
    {
      icon: <HandCoins size={32} weight="duotone" />,
      title: "Procesos manuales repetitivos",
      desc: "Colaboradores atados a rutinas mecánicas en lugar de análisis crítico y estrategia de negocio.",
    },
    {
      icon: <WarningCircle size={32} weight="duotone" />,
      title: "Errores humanos",
      desc: "Costosas interrupciones en el servicio originadas por equivocaciones en la transcripción de datos.",
    },
    {
      icon: <HourglassHigh size={32} weight="duotone" />,
      title: "Procesos lentos",
      desc: "Cuellos de botella prolongados que afectan gravemente el servicio al cliente y la facturación.",
    },
    {
      icon: <Plugs size={32} weight="duotone" />,
      title: "Falta de integración",
      desc: "Múltiples plataformas corporativas que funcionan como silos completamente desconectados.",
    },
    {
      icon: <ClockCounterClockwise size={32} weight="duotone" />,
      title: "Pérdida de tiempo",
      desc: "Altos volúmenes de horas operativas desperdiciadas y falta de escalabilidad de los equipos.",
    },
  ];

  return (
    <section className="bg-bg-light py-24 border-t border-gray-200/50" id="problema">
      <div className="container">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Los desafíos operativos que frenan su crecimiento
          </h2>
          <p className="text-muted text-lg">
            Identificamos y resolvemos los principales obstáculos en su flujo de trabajo operativo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-2 hover:border-red-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-error flex items-center justify-center mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{prob.title}</h3>
              <p className="text-muted leading-relaxed">{prob.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
