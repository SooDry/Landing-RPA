import { FadeIn } from "@/components/ui/FadeIn";
import { Briefcase, Ticket, Kanban, FileCsv, Browser, Database } from "@phosphor-icons/react/dist/ssr";

export function PlatformsSection() {
  const platforms = [
    { icon: <Briefcase size={56} weight="duotone" className="text-secondary mb-5" />, name: "SAP" },
    { icon: <Ticket size={56} weight="duotone" className="text-secondary mb-5" />, name: "ServiceNow" },
    { icon: <Kanban size={56} weight="duotone" className="text-secondary mb-5" />, name: "Jira" },
    { icon: <FileCsv size={56} weight="duotone" className="text-secondary mb-5" />, name: "Excel" },
    { icon: <Browser size={56} weight="duotone" className="text-secondary mb-5" />, name: "Web Applications" },
    { icon: <Database size={56} weight="duotone" className="text-secondary mb-5" />, name: "Databases" },
  ];

  return (
    <section className="bg-white py-24" id="plataformas">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Plataformas que Automatizamos</h2>
          <p className="text-muted text-lg">
            Interactuamos fluidamente con los sistemas empresariales más críticos de su organización.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="glass-card flex flex-col items-center justify-center p-8 bg-white border border-gray-100 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg hover:border-secondary/20"
            >
              {platform.icon}
              <span className="font-bold text-lg text-primary text-center">
                {platform.name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
