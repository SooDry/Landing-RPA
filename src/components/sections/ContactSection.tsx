"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Lightning, EnvelopeSimple } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  company: z.string().min(2, { message: "La empresa es obligatoria" }),
  phone: z.string().min(5, { message: "Ingrese un teléfono válido" }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted: ", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="bg-bg-light py-24" id="contacto">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                Hablemos de Transformación
              </h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                Complete el formulario y uno de nuestros especialistas en automatización corporativa se pondrá en contacto a la brevedad.
              </p>

              <div className="flex flex-col gap-6">
                <Button size="lg" className="w-full text-lg shadow-xl shadow-secondary/20 flex items-center justify-center gap-2">
                  <Lightning weight="fill" /> Contacto Rápido Inmediato
                </Button>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
                  <div className="p-3 bg-blue-50 text-secondary rounded-xl">
                    <EnvelopeSimple size={28} weight="fill" />
                  </div>
                  <div>
                    <strong className="block text-primary text-lg mb-1">Correo Corporativo</strong>
                    <a href="mailto:transformacion@softtek.com" className="text-muted hover:text-secondary transition-colors">
                      transformacion@softtek.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Nombre</label>
                  <Input
                    id="name"
                    placeholder="Su nombre y apellido"
                    error={errors.name ? "true" : undefined}
                    {...register("name")}
                  />
                  {errors.name && <span className="text-error text-xs block mt-1">{errors.name.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">Empresa</label>
                    <Input
                      id="company"
                      placeholder="Nombre de la compañía"
                      error={errors.company ? "true" : undefined}
                      {...register("company")}
                    />
                    {errors.company && <span className="text-error text-xs block mt-1">{errors.company.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Teléfono</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Número de contacto"
                      error={errors.phone ? "true" : undefined}
                      {...register("phone")}
                    />
                    {errors.phone && <span className="text-error text-xs block mt-1">{errors.phone.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Correo</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Correo electrónico corporativo"
                    error={errors.email ? "true" : undefined}
                    {...register("email")}
                  />
                  {errors.email && <span className="text-error text-xs block mt-1">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Mensaje</label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="¿En qué área busca integrar automatización inteligente o IA aplicada?"
                    error={errors.message ? "true" : undefined}
                    {...register("message")}
                  />
                  {errors.message && <span className="text-error text-xs block mt-1">{errors.message.message}</span>}
                </div>

                <Button type="submit" size="lg" className="w-full mt-2" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Solicitar Información"}
                </Button>

                {isSuccess && (
                  <div className="p-4 bg-green-50 text-success text-sm rounded-xl border border-green-200 text-center font-medium mt-2">
                    ¡Gracias por contactarnos! Un especialista se comunicará pronto.
                  </div>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
