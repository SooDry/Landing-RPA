import { FadeIn } from "@/components/ui/FadeIn";
import { Robot, Lightning, Infinity, Cloud, Cpu, Code } from "@phosphor-icons/react/dist/ssr";

export function TechnologiesSection({ dict }: { dict?: any }) {
  const d = dict || {
    title: "Tecnologías que Utilizamos",
    desc: "Nos asociamos con los líderes de la industria para entregar soluciones robustas y escalables.",
    badge1: "Proprietary Framework",
    badge2: "Softtek Accelerator"
  };

  const technologies = [
    { icon: <Robot size={48} weight="duotone" className="text-secondary" />, name: "UiPath" },
    { icon: <Lightning size={48} weight="duotone" className="text-secondary" />, name: "Power Automate" },
    { icon: <Infinity size={48} weight="duotone" className="text-secondary" />, name: "Automation Anywhere" },
    { icon: <Cloud size={48} weight="duotone" className="text-secondary" />, name: "Azure AI" },
    {
      icon: <Cpu size={48} weight="duotone" className="text-accent" />,
      name: "Frida Automation Platform",
      badge: d.badge1,
    },
    {
      icon: <Code size={48} weight="duotone" className="text-secondary" />,
      name: "Frida Code Copilot",
      badge: d.badge2,
    },
  ];

  return (
    <section className="bg-bg-dark py-24 text-white" id="tecnologias">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{d.title}</h2>
          <p className="text-white/80 text-lg">
            {d.desc}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-secondary/50 hover:shadow-[0_15px_35px_-10px_rgba(0,196,182,0.25)]"
            >
              {tech.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bg-dark border border-accent/50 text-white text-[0.65rem] font-bold py-1 px-3 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md z-10 hidden sm:block">
                  {tech.badge}
                </span>
              )}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {tech.icon}
              </div>
              <span className="font-semibold text-lg text-white text-center tracking-wide">
                {tech.name}
              </span>
              
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,196,182,0.15)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
