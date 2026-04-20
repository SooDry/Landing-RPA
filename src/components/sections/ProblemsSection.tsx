import { FadeIn } from "@/components/ui/FadeIn";
import { HandCoins, WarningCircle, HourglassHigh, Plugs, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";

export function ProblemsSection({ dict }: { dict?: any }) {
  const d = dict || {
    title: "Los desafíos operativos que frenan su crecimiento",
    desc: "Identificamos y resolvemos los principales obstáculos en su flujo de trabajo operativo.",
    p1Title: "Procesos manuales repetitivos",
    p1Desc: "Colaboradores atados a rutinas mecánicas en lugar de análisis crítico y estrategia de negocio.",
    p2Title: "Errores humanos",
    p2Desc: "Costosas interrupciones en el servicio originadas por equivocaciones en la transcripción de datos.",
    p3Title: "Procesos lentos",
    p3Desc: "Cuellos de botella prolongados que afectan gravemente el servicio al cliente y la facturación.",
    p4Title: "Falta de integración",
    p4Desc: "Múltiples plataformas corporativas que funcionan como silos completamente desconectados.",
    p5Title: "Pérdida de tiempo",
    p5Desc: "Altos volúmenes de horas operativas desperdiciadas y falta de escalabilidad de los equipos."
  };

  const problems = [
    {
      icon: <HandCoins size={32} weight="duotone" />,
      title: d.p1Title,
      desc: d.p1Desc,
    },
    {
      icon: <WarningCircle size={32} weight="duotone" />,
      title: d.p2Title,
      desc: d.p2Desc,
    },
    {
      icon: <HourglassHigh size={32} weight="duotone" />,
      title: d.p3Title,
      desc: d.p3Desc,
    },
    {
      icon: <Plugs size={32} weight="duotone" />,
      title: d.p4Title,
      desc: d.p4Desc,
    },
    {
      icon: <ClockCounterClockwise size={32} weight="duotone" />,
      title: d.p5Title,
      desc: d.p5Desc,
    },
  ];

  return (
    <section className="bg-bg-light py-24 border-t border-gray-200/50" id="problema">
      <div className="container">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {d.title}
          </h2>
          <p className="text-muted text-lg">
            {d.desc}
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
