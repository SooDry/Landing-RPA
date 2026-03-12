import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Reducción de costos operativos",
      desc: "Disminuya dramáticamente los gastos recurrentes asociados a operaciones manuales.",
    },
    {
      title: "Incremento de productividad",
      desc: "Libere a su equipo para enfocarse en tareas de alto valor, aumentando la eficiencia global.",
    },
    {
      title: "Automatización 24/7",
      desc: "Procesamiento continuo ininterrumpido las 24 horas del día, los 365 días del año.",
    },
    {
      title: "Eliminación de errores humanos",
      desc: "Precisión del 100% y exactitud garantizada en la transcripción y procesamiento de datos.",
    },
    {
      title: "Cumplimiento de SLA",
      desc: "Cumplimiento garantizado en tiempos de respuesta y visibilidad total operativa.",
    },
  ];

  return (
    <section className="bg-white py-24" id="beneficios">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 leading-tight">
                Impacto Empresarial
              </h2>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle
                      size={28}
                      weight="fill"
                      className="text-secondary flex-shrink-0 mt-1"
                    />
                    <div>
                      <strong className="block text-lg text-primary mb-1">{benefit.title}</strong>
                      <p className="text-muted leading-relaxed">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Visual Dashboard Mockup */}
          <FadeIn delay={0.3} className="relative hidden md:block">
            <div className="glass-card !bg-white/90 shadow-xl border border-gray-100 p-0 overflow-hidden relative">
              <div className="bg-slate-50 border-b border-gray-100 px-6 py-4 font-semibold text-primary">
                Performance Metrics
              </div>
              <div className="p-8 relative h-[350px] flex items-end justify-center gap-12 bg-white">
                
                {/* Bar 1: Manual */}
                <div className="relative h-full w-24 flex items-end justify-center">
                  <div className="w-full bg-slate-200 rounded-t-xl h-full shadow-inner flex items-end justify-center">
                    <span className="text-slate-500 font-bold mb-4 -rotate-90 origin-bottom whitespace-nowrap opacity-60">
                      Manual (12h)
                    </span>
                  </div>
                </div>

                {/* Bar 2: RPA/AI */}
                <div className="relative h-[15%] w-24 flex flex-col justify-end">
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <span className="bg-success text-white font-bold py-1 px-3 rounded-full text-xs shadow-md whitespace-nowrap animate-bounce">
                        ROI +280%
                      </span>
                   </div>
                  <div className="w-full bg-gradient-to-t from-secondary to-accent rounded-t-xl h-full shadow-[0_0_20px_rgba(0,196,182,0.4)] flex items-end justify-center">
                     <span className="text-white font-bold mb-2 text-xs absolute -bottom-6 opacity-80 whitespace-nowrap">
                       RPA/AI (1.5h)
                     </span>
                  </div>
                </div>

                <div className="absolute top-1/4 right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                  <span className="text-xs uppercase font-bold text-muted mb-1">ROI Proyectado</span>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">+280%</span>
                </div>

                {/* Grid Lines */}
                <div className="absolute bottom-16 left-0 w-full h-px bg-gray-100" />
                <div className="absolute bottom-[50%] left-0 w-full h-px bg-gray-100" />
                <div className="absolute top-16 left-0 w-full h-px bg-gray-100" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
