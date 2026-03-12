"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { Calculator } from "@phosphor-icons/react";

export function RoiCalculator() {
  const [hours, setHours] = useState(40);
  const [costPerHour, setCostPerHour] = useState(25);
  const [errorRate, setErrorRate] = useState(5);

  // Simple formula approximating the saving values from the original functionality
  const calculateSavings = () => {
    const weeklyCost = hours * costPerHour;
    const weeklyErrorCost = weeklyCost * (errorRate / 100) * 1.5; // Estimated error correction multiplier
    const totalWeeklyCost = weeklyCost + weeklyErrorCost;
    const yearlySavings = totalWeeklyCost * 52 * 0.85; // Assuming 85% of processes are automatable
    return Math.round(yearlySavings).toLocaleString('en-US');
  };

  return (
    <section className="bg-bg-light py-24" id="calculadora-roi">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-6 text-secondary">
             <Calculator size={56} weight="duotone" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Calculadora de ROI de Automatización
          </h2>
          <p className="text-muted text-lg">
            Ajuste los valores según su operación actual para estimar los ahorros al integrar nuestras soluciones RPA e IA.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Inputs */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="hours" className="font-semibold text-primary text-sm md:text-base">
                    Carga operativa semanal (Horas)
                  </label>
                  <span className="font-bold text-secondary text-lg">{hours}h</span>
                </div>
                <input
                  type="range"
                  id="hours"
                  min="10"
                  max="500"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="cost" className="font-semibold text-primary text-sm md:text-base">
                    Costo hora hombre (USD)
                  </label>
                  <span className="font-bold text-secondary text-lg">${costPerHour}</span>
                </div>
                <input
                  type="range"
                  id="cost"
                  min="15"
                  max="150"
                  value={costPerHour}
                  onChange={(e) => setCostPerHour(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="error" className="font-semibold text-primary text-sm md:text-base">
                    Tasa de error manual (%)
                  </label>
                  <span className="font-bold text-secondary text-lg">{errorRate}%</span>
                </div>
                <input
                  type="range"
                  id="error"
                  min="1"
                  max="10"
                  value={errorRate}
                  onChange={(e) => setErrorRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>
            </div>

            {/* Results Box */}
            <div className="bg-primary p-1 rounded-2xl bg-gradient-to-br from-primary via-primary to-softtek shadow-2xl relative overflow-hidden">
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/30 blur-3xl rounded-full" />
               <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/30 blur-3xl rounded-full" />
              <div className="bg-primary/90 backdrop-blur-sm p-8 md:p-10 rounded-xl flex flex-col items-center justify-center text-center h-full border border-white/5 relative z-10">
                <h3 className="text-white/80 font-semibold mb-2 uppercase tracking-widest text-sm">
                  Ahorro anual estimado
                </h3>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 flex items-start justify-center gap-1">
                  <span className="text-2xl mt-1 text-accent opacity-80">$</span>
                  {calculateSavings()}
                </div>
                <div className="mt-8 text-sm text-white/50 bg-white/5 py-2 px-4 rounded-full">
                  Excluyendo costos de infraestructura RPA
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
