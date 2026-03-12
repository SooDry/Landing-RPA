import { FadeIn } from "@/components/ui/FadeIn";
import { Check } from "@phosphor-icons/react/dist/ssr";

export function WhyUsSection() {
  const reasons = [
    {
      title: "Experiencia empresarial",
      desc: "Consultores especializados en procesos core corporativos.",
    },
    {
      title: "Multi-plataforma",
      desc: "Expertise en UiPath, Automation Anywhere, Blue Prism y Power Automate.",
    },
    {
      title: "Soluciones escalables",
      desc: "Arquitecturas preparadas para volumen corporativo y alta disponibilidad.",
    },
    {
      title: "Integración sistémica",
      desc: "Conectamos sistemas cerrados legacy con tecnologías modernas sin crear APIs.",
    },
  ];

  return (
    <section className="bg-bg-dark py-24 text-white" id="por-que-elegirnos">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                El socio tecnológico de las empresas líderes
              </h2>
              <ul className="space-y-6">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      <Check size={14} weight="bold" />
                    </div>
                    <div>
                      <strong className="block text-white text-lg mb-1">{reason.title}</strong>
                      <span className="text-white/70 block leading-relaxed">
                        {reason.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
            
            <FadeIn delay={0.2} className="relative z-10 glass-card bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
                500+
              </span>
              <span className="text-white/80 font-medium uppercase tracking-wider text-sm">
                Procesos Automatizados
              </span>
            </FadeIn>

            <FadeIn delay={0.3} className="relative z-10 glass-card bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors sm:mt-12">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
                1M+
              </span>
              <span className="text-white/80 font-medium uppercase tracking-wider text-sm">
                Horas Ahorradas Anualmente
              </span>
            </FadeIn>

            <FadeIn delay={0.4} className="relative z-10 glass-card bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors sm:-mt-12 sm:col-span-2 sm:w-1/2 sm:mx-auto">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
                99.9%
              </span>
              <span className="text-white/80 font-medium uppercase tracking-wider text-sm">
                Tasa de Precisión en Bots
              </span>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
