import { FadeIn } from "@/components/ui/FadeIn";
import { Lifebuoy, Heartbeat, ArrowsClockwise, ChartPolar } from "@phosphor-icons/react/dist/ssr";

export function AmsSection() {
  const amsFeatures = [
    {
      icon: <Lifebuoy size={40} weight="duotone" className="text-secondary" />,
      bg: "bg-[rgba(0,112,243,0.1)]",
      title: "Soporte y Mantenimiento (L1-L3)",
      desc: "Gestión de incidencias, análisis de causa raíz y corrección rápida de automatizaciones.",
    },
    {
      icon: <Heartbeat size={40} weight="duotone" className="text-success" />,
      bg: "bg-[rgba(16,185,129,0.1)]",
      title: "Monitoreo Proactivo 24/7",
      desc: "Orquestación continua para vigilar la salud operativa y alertar antes de impacto al negocio.",
    },
    {
      icon: <ArrowsClockwise size={40} weight="duotone" className="text-warning" />,
      bg: "bg-[rgba(245,158,11,0.1)]",
      title: "Mantenimiento Evolutivo",
      desc: "Adaptación constante de los robots ante cambios de interfaz, actualizaciones y nuevas reglas.",
    },
    {
      icon: <ChartPolar size={40} weight="duotone" className="text-accent" />,
      bg: "bg-[rgba(0,196,182,0.1)]",
      title: "Gobierno y Centro de Excelencia (CoE)",
      desc: "Análisis de rendimiento, seguimiento de ROI y habilitación de nuevas oportunidades de hiperautomatización.",
    },
  ];

  return (
    <section className="bg-bg-light py-24" id="ams">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestro Modelo: Intelligent AMS</h2>
          <p className="text-muted text-lg">
            Aseguramos la continuidad de negocio con un ciclo de vida corporativo: Application Management Services diseñado exclusivamente para fuerza laboral digital.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amsFeatures.map((feature, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{feature.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
