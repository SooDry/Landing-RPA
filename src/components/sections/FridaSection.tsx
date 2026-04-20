import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { ShieldWarning, Lightning, Database, MagnifyingGlass, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function FridaSection({ dict }: { dict?: any }) {
  const d = dict || {
    title: "El Estándar Frida:",
    titleHighlight: "Automatización Resiliente a Nivel Enterprise",
    subtitle: "No construimos scripts. Implementamos arquitecturas robustas sobre UiPath preparadas para escalar.",
    f1Title: "Manejo de Excepciones Avanzado",
    f1Desc1: "Recuperación automática de errores, State Machines complejos y logs transaccionales limpios. Estructuras preparadas para fallos del sistema o cambios de UI, garantizando ",
    f1DescBold: "cero bots colgados en producción.",
    f1Li1: "Retry mechanisms nativos",
    f1Li2: "Fallback pathways automatizados",
    f2Title: "High-Performance Data (LINQ)",
    f2Desc: "Procesamiento en memoria usando LINQ nativo en UiPath para manipular DataTables masivos en milisegundos, superando por mucho a las actividades estándar.",
    f3Title: "Trazabilidad Total",
    f3Desc: "Auditoría en tiempo real y dashboards listos para compliance. Cada transacción registra su ciclo de vida exacto para seguimiento instantáneo y resolución de disputas."
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="frida-framework">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[100px] bg-secondary/5 opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full blur-[80px] bg-primary/5 opacity-50 -z-10" />

      <div className="container relative z-10">
        <StaggerContainer>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                {d.title}<br />
                <span className="text-secondary">{d.titleHighlight}</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {d.subtitle}
              </p>
            </StaggerItem>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Feature 1: Excepciones (Large Cell) */}
            <StaggerItem className="md:col-span-2 md:row-span-2">
              <div className="h-full bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-12 hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-50 to-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="p-4 bg-white w-fit rounded-2xl shadow-sm border border-gray-100 mb-8 text-secondary">
                    <ShieldWarning size={40} weight="duotone" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{d.f1Title}</h3>
                  <p className="text-lg text-muted mb-6 leading-relaxed">
                    {d.f1Desc1} <strong>{d.f1DescBold}</strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-primary font-medium">
                      <CheckCircle className="text-success" size={20} weight="fill" />
                      {d.f1Li1}
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                      <CheckCircle className="text-success" size={20} weight="fill" />
                      {d.f1Li2}
                    </li>
                  </ul>
                </div>
              </div>
            </StaggerItem>

            {/* Feature 2: High Performance Data (LINQ) */}
            <StaggerItem className="md:col-span-1 md:row-span-1">
              <div className="h-full bg-primary text-white border border-primary-light rounded-[2rem] p-8 hover:shadow-xl hover:shadow-primary/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] group-hover:bg-secondary/30 transition-colors" />
                <div className="relative z-10">
                  <div className="p-3 bg-white/10 w-fit rounded-xl mb-6 text-secondary border border-white/5">
                    <Database size={32} weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{d.f2Title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {d.f2Desc}
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Feature 3: Trazabilidad Total */}
            <StaggerItem className="md:col-span-1 md:row-span-1">
              <div className="h-full bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-lg hover:border-gray-300 transition-all relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-[30px] group-hover:bg-accent/20 transition-colors" />
                <div className="relative z-10">
                  <div className="p-3 bg-gray-50 w-fit rounded-xl mb-6 text-accent border border-gray-100">
                    <MagnifyingGlass size={32} weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{d.f3Title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {d.f3Desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
            
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
