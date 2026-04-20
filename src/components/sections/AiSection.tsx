import { FadeIn } from "@/components/ui/FadeIn";
import { Robot, TrendUp, MagnifyingGlass, FileText } from "@phosphor-icons/react/dist/ssr";

export function AiSection({ dict }: { dict?: any }) {
  const d = dict || {
    title: "Automatización Inteligente e IA Aplicada",
    desc: "Capacidades cognitivas avanzadas integradas directamente a sus procesos.",
    a1Title: "Agentes de Resolución Autónoma", a1Desc: "Agentes autónomos para resolver solicitudes e incidentes de soporte interno y externo omnicanal.",
    a2Title: "Analítica Predictiva Operativa", a2Desc: "Modelos predictivos que asisten a ejecutivos con analítica en tiempo real.",
    a3Title: "Interacción en Lenguaje Natural", a3Desc: "Interfaces de lenguaje natural para consultar bases de datos corporativas complejas y ERPs.",
    a4Title: "Procesamiento Inteligente de Documentos (IDP)", a4Desc: "Procesamiento de documentos no estructurados usando OCR empresarial y machine learning aplicado."
  };

  const aiSolutions = [
    {
      icon: <Robot size={40} weight="duotone" className="text-accent mb-4" />,
      title: d.a1Title,
      desc: d.a1Desc,
    },
    {
      icon: <TrendUp size={40} weight="duotone" className="text-accent mb-4" />,
      title: d.a2Title,
      desc: d.a2Desc,
    },
    {
      icon: <MagnifyingGlass size={40} weight="duotone" className="text-accent mb-4" />,
      title: d.a3Title,
      desc: d.a3Desc,
    },
    {
      icon: <FileText size={40} weight="duotone" className="text-accent mb-4" />,
      title: d.a4Title,
      desc: d.a4Desc,
    },
  ];

  return (
    <section className="bg-bg-dark text-white py-24" id="ia">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {d.title}
          </h2>
          <p className="text-white/80 text-lg">
            {d.desc}
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
