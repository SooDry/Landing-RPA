import { FadeIn } from "@/components/ui/FadeIn";
import { Crosshair, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function FridaFactor() {
  return (
    <section className="bg-white py-24 overflow-hidden" id="factor-frida">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <FadeIn>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">
                Ventaja Competitiva
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                El <span className="text-gradient">Factor Frida</span>
              </h2>
              <p className="text-lg text-muted mb-10 leading-relaxed font-medium">
                Frida es nuestro framework diferenciador. Inyectamos lógica estructural que permite a los bots 
                adaptarse orgánicamente a los cambios de interfaz sin romperse, optimizando drásticamente el TCO.
              </p>

              <div className="space-y-6">
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-slate-100 shadow-sm bg-slate-50 transition-all hover:bg-white hover:shadow-md hover:border-blue-200">
                  <div className="bg-blue-100/50 text-secondary p-4 rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Crosshair size={28} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Zero-Selector Failure</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Gestión de aplicaciones complejas (legacy/terminales) mediante inyección de código y visión
                      artificial avanzada donde técnicas tradicionales fallan.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-slate-100 shadow-sm bg-slate-50 transition-all hover:bg-white hover:shadow-md hover:border-accent/40">
                  <div className="bg-accent/10 text-accent p-4 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                    <ShieldCheck size={28} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Enterprise Exception Handling</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Gestión de errores de nivel bancario con auto-recuperación, reduciendo el mantenimiento
                      manual de los ecosistemas en un 40%.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Visual code block */}
          <FadeIn delay={0.3} className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-accent/20 rounded-3xl transform rotate-3 scale-105 -z-10 blur-sm" />
            <div className="glass-card !bg-white/95 border-slate-200 shadow-xl overflow-hidden !p-0">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
                <div className="font-mono text-sm font-semibold text-slate-500">
                  Frida_Architecture.json
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
              </div>
              <pre className="font-mono text-sm leading-loose text-slate-700 p-8 overflow-x-auto">
<code dangerouslySetInnerHTML={{__html: `
<span class="text-slate-400">{</span>
  <span class="text-secondary">"system"</span>: <span class="text-accent">"Legacy Terminal"</span>,
  <span class="text-secondary">"integration"</span>: <span class="text-accent">"Frida Framework"</span>,
  <span class="text-secondary">"resilience"</span>: <span class="text-slate-400">{</span>
    <span class="text-secondary">"selector_dependency"</span>: <span class="text-rose-500 font-bold">false</span>,
    <span class="text-secondary">"computer_vision"</span>: <span class="text-accent">"Active"</span>,
    <span class="text-secondary">"fallback_routine"</span>: <span class="text-accent">"Auto-Heal"</span>
  <span class="text-slate-400">}</span>,
  <span class="text-secondary">"metrics"</span>: <span class="text-slate-400">{</span>
    <span class="text-secondary">"TCO_reduction"</span>: <span class="text-success font-bold">"40%"</span>,
    <span class="text-secondary">"uptime"</span>: <span class="text-success font-bold">"99.99%"</span>
  <span class="text-slate-400">}</span>
<span class="text-slate-400">}</span>
`}} />
              </pre>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
