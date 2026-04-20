import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { FadeIn } from "@/components/ui/FadeIn";
import { CalendarCheck, MagnifyingGlass, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function HeroSection({ dict }: { dict?: any }) {
  // Fallback to avoid crashes if dict is missing temporarily
  const d = dict || {
    badge: "Innovación y Partnership Tecnológico",
    titlePrefix: "Reducción de Costos Operacionales con ",
    titleHighlight: "Inteligencia Artificial",
    subtitle: "Escalabilidad sin precedentes y cero errores manuales. Automatización cross-platform inteligente operando fluidamente entre ",
    subtitleHighlight: "SAP, plataformas Web, Excel y Bases de Datos.",
    ctaAudit: "Agendar Auditoría de Procesos",
    ctaExplore: "Explorar Arquitectura",
    trustTitle: "Confianza Enterprise Garantizada",
    trust1: "Integración Nativa SAP",
    trust2: "Ecosistema Microsoft",
    trust3: "Seguridad y Cumplimiento"
  };

  return (
    <section className="relative pt-[144px] pb-24 min-h-screen flex items-center overflow-hidden" id="inicio">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-bg-light">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-secondary/10 opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] bg-accent/10 opacity-50 mix-blend-multiply" />
        {/* CSS Pattern Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Subtle top gradient mask to blend with header */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg-light to-transparent z-10" />
      </div>

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            {/* Top Badge */}
            <StaggerItem>
              <Badge className="mb-6 bg-white shadow-sm text-primary border border-gray-200 font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                <ShieldCheck size={18} className="text-secondary" weight="fill" />
                {d.badge}
              </Badge>
            </StaggerItem>
            
            {/* H1 Business Oriented */}
            <StaggerItem>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-primary leading-[1.1]">
                {d.titlePrefix} <span className="text-gradient">{d.titleHighlight}</span>
              </h1>
            </StaggerItem>

            {/* Subtitle */}
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
                {d.subtitle} <strong className="text-primary font-bold">{d.subtitleHighlight}</strong>
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <a href="#contacto" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-xl shadow-secondary/20 hover:shadow-secondary/30 hover:-translate-y-1 transition-all duration-300">
                    {d.ctaAudit} <CalendarCheck weight="bold" size={24} className="ml-2" />
                  </Button>
                </a>
                <a href="#arquitectura" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 bg-white/50 backdrop-blur-sm border-2 border-gray-200 hover:border-secondary hover:bg-white transition-all duration-300">
                    {d.ctaExplore} <MagnifyingGlass weight="bold" size={24} className="ml-2" />
                  </Button>
                </a>
              </div>
            </StaggerItem>

            {/* Trust Band */}
            <StaggerItem>
              <div className="pt-8 border-t border-gray-200/60 max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                  {d.trustTitle}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-primary opacity-80 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-success" weight="fill" size={20} />
                    {d.trust1}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-success" weight="fill" size={20} />
                    {d.trust2}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-success" weight="fill" size={20} />
                    {d.trust3}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
