import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden" id="cta">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Comience su Automatización Hoy
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            Descubra el potencial de nuestras soluciones para transformar la eficiencia de
            su equipo y escalar sus operaciones. Nuestro equipo de expertos está listo para diseñar una
            estrategia integral a su medida.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contacto">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none shadow-xl">
                Solicitar Demo
              </Button>
            </a>
            <a href="#contacto">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 border-none shadow-xl shadow-secondary/20">
                Hablar con un Experto
              </Button>
            </a>
            <a href="#contacto">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                Contáctenos
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
