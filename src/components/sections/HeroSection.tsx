import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Calculator, DownloadSimple, ChartLineUp, Cpu, ShareNetwork } from "@phosphor-icons/react/dist/ssr";

export function HeroSection() {
  return (
    <section className="relative pt-[144px] pb-24 min-h-screen flex items-center overflow-hidden" id="inicio">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[50vw] h-[50vw] rounded-full blur-[80px] bg-secondary/10 opacity-70 mix-blend-multiply" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full blur-[80px] bg-accent/10 opacity-70 mix-blend-multiply" />
        <div
          className="absolute top-0 left-0 w-full h-full -z-20 opacity-50"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="max-w-2xl">
          <FadeIn>
            <Badge className="mb-6 bg-secondary/10 text-secondary border border-secondary/20 font-bold uppercase tracking-wide">
              Transformación Digital Estratégica
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-primary leading-tight">
              Automatización Inteligente e <span className="text-gradient">IA Aplicada</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed font-medium">
              Diseñamos una fuerza laboral digital mediante automatización inteligente e IA aplicada que se integran con
              los principales sistemas empresariales. Aprovechamos tecnologías líderes del mercado para
              optimizar procesos en plataformas como SAP y herramientas ITSM, impulsando operaciones más
              eficientes, escalables y preparadas para el futuro.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap gap-4">
            <a href="#contacto">
              <Button size="lg" className="shadow-lg shadow-secondary/20">
                Agendar Auditoría de Procesos <ArrowRight weight="bold" />
              </Button>
            </a>
            <a href="#calculadora-roi">
              <Button size="lg" variant="secondary" className="border-gray-200">
                Calcular ROI de Automatización <Calculator weight="bold" />
              </Button>
            </a>
            <a href="#contacto" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="text-muted w-full sm:w-auto">
                Descargar Brochure <DownloadSimple weight="bold" />
              </Button>
            </a>
          </FadeIn>
        </div>

        {/* Visual / Mockup */}
        <FadeIn delay={0.4} className="relative hidden md:block">
          <div className="glass-card !p-0 overflow-hidden transform perspective-1000 rotate-y-[0deg] rotate-x-[0deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-500 hover:shadow-2xl hover:shadow-secondary/20 relative z-10 border-white/40">
            {/* Mockup Header */}
            <div className="bg-[#F8FAFC] p-4 flex items-center border-b border-gray-100">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="ml-4 text-xs font-semibold text-muted uppercase tracking-wider">
                RPA Orchestrator / Frida Framework
              </div>
            </div>

            {/* Mockup Body */}
            <div className="p-8 bg-white">
              <div className="flex items-center justify-between mb-8 pb-4">
                <div className="flex flex-col items-center gap-3 text-muted text-sm font-medium z-10">
                  <div className="p-4 bg-gray-50 rounded-full shadow-inner border border-gray-100">
                    <ChartLineUp size={32} className="text-primary" />
                  </div>
                  System Data
                </div>
                
                <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-100 via-secondary/30 to-gray-100 relative mx-4">
                   <div className="absolute top-[-4px] left-0 w-1/3 h-[10px] bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full opacity-50 animate-[flowLine_2s_infinite_linear]" />
                </div>

                <div className="flex flex-col items-center gap-3 text-softtek font-bold z-10 relative">
                  <div className="p-4 bg-secondary rounded-full shadow-lg shadow-secondary/40 text-white relative">
                    <Cpu size={36} weight="duotone" />
                    <div className="absolute top-1 right-1 w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(0,196,182,0.8)]" />
                  </div>
                  Frida Core
                </div>

                <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-100 via-accent/30 to-gray-100 relative mx-4">
                   <div className="absolute top-[-3px] left-0 w-1/3 h-[8px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-50 animate-[flowLine_2s_infinite_linear] delay-700" />
                </div>

                <div className="flex flex-col items-center gap-3 text-muted text-sm font-medium z-10">
                  <div className="p-4 bg-gray-50 rounded-full shadow-inner border border-gray-100">
                    <ShareNetwork size={32} className="text-primary" />
                  </div>
                  Edge Nodes
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-gray-50 p-4 rounded-xl text-center border border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-success tracking-tight mb-1">+340%</div>
                  <div className="text-xs uppercase font-bold text-muted tracking-wider">Eficiencia Operativa</div>
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-xl text-center border border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-warning tracking-tight mb-1">0%</div>
                  <div className="text-xs uppercase font-bold text-muted tracking-wider">Tasa de Errores</div>
                </div>
              </div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes flowLine {
              0% { left: 0%; opacity: 0; }
              50% { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }
          `}} />
        </FadeIn>
      </div>
    </section>
  );
}
