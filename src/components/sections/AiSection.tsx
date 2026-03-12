import { FadeIn } from "@/components/ui/FadeIn";
import { Robot, TrendUp, MagnifyingGlass, FileText } from "@phosphor-icons/react/dist/ssr";

export function AiSection() {
  const aiSolutions = [
    {
      icon: <Robot size={40} weight="duotone" className="text-accent mb-4" />,
      title: "Agentes de Resolución Autónoma",
      desc: "Agentes autónomos para resolver solicitudes e incidentes de soporte interno y externo omnicanal.",
    },
    {
      icon: <TrendUp size={40} weight="duotone" className="text-accent mb-4" />,
      title: "Analítica Predictiva Operativa",
      desc: "Modelos predictivos que asisten a ejecutivos con analítica en tiempo real.",
    },
    {
      icon: <MagnifyingGlass size={40} weight="duotone" className="text-accent mb-4" />,
      title: "Interacción en Lenguaje Natural",
      desc: "Interfaces de lenguaje natural para consultar bases de datos corporativas complejas y ERPs.",
    },
    {
      icon: <FileText size={40} weight="duotone" className="text-accent mb-4" />,
      title: "Procesamiento Inteligente de Documentos (IDP)",
      desc: "Procesamiento de documentos no estructurados usando OCR empresarial y machine learning aplicado.",
    },
  ];

  return (
    <section className="bg-bg-dark text-white py-24" id="ia">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Automatización Inteligente e IA Aplicada
          </h2>
          <p className="text-white/80 text-lg">
            Capacidades cognitivas avanzadas integradas directamente a sus procesos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiSolutions.map((sol, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,196,182,0.3)] hover:border-accent/40"
            >
              <div className="bg-accent/10 w-fit p-3 rounded-xl mb-6">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {sol.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {sol.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
