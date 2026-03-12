import { FadeIn } from "@/components/ui/FadeIn";
import { Gear, Network, ArrowsMerge, PlugsConnected, Database } from "@phosphor-icons/react/dist/ssr";

export function ServicesSection() {
  const services = [
    {
      icon: <Gear size={36} weight="duotone" className="text-secondary mb-4" />,
      title: "Automatización RPA",
      desc: "Robots de software que ejecutan tareas repetitivas en sistemas empresariales.",
    },
    {
      icon: <Network size={36} weight="duotone" className="text-secondary mb-4" />,
      title: "Agentes Cognitivos e IA Aplicada",
      desc: "Agentes capaces de interactuar con usuarios y ejecutar tareas operativas.",
    },
    {
      icon: <ArrowsMerge size={36} weight="duotone" className="text-secondary mb-4" />,
      title: "Automatización de Procesos",
      desc: "Optimización de flujos operativos mediante tecnologías de automatización.",
    },
    {
      icon: <PlugsConnected size={36} weight="duotone" className="text-secondary mb-4" />,
      title: "Integración de Sistemas",
      desc: "Conexión entre múltiples sistemas empresariales y plataformas legacy.",
    },
    {
      icon: <Database size={36} weight="duotone" className="text-secondary mb-4" />,
      title: "Automatización de Datos",
      desc: "Extracción, procesamiento y generación automática de reportes corporativos.",
    },
  ];

  return (
    <section className="bg-bg-light py-24" id="soluciones">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios de Automatización</h2>
          <p className="text-muted text-lg">
            Potenciamos sus operaciones con tecnología de última generación para
            alcanzar nuevos niveles de eficiencia y precisión empresarial.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-secondary/20"
            >
              <div className="p-3 bg-blue-50/50 w-fit rounded-xl mb-4 text-secondary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
