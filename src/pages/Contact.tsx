import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

// 1. Zod Schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Bitte gib deinen Namen ein (min. 2 Zeichen)." }),
  email: z.string().email({ message: "Bitte gib eine gültige E-Mail-Adresse ein." }),
  company: z.string().optional(),
  message: z.string(),
});

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Mock-Delay für UX (2 Sekunden)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // FaaS / Formspree Integration (Hier die echte URL eintragen) 
      const response = await fetch("https://formspree.io/f/mdabnjjg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Netzwerk Fehler");

      // Marketing / Tracking Simulation
      console.log("Analytics: Event 'generate_lead' gefeuert", values);
      
      toast.success("Anfrage erfolgreich versendet!", {
        description: "Wir werden uns so schnell wie möglich bei dir melden.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("Fehler beim Senden", {
        description: "Bitte versuche es später noch einmal.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // SEO & GEO: Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Rawr Consulting Agency",
    "description": "Ihre Experten für Online Marketing und Web Development.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@rawr-consulting.com"
    }
  };

  return (
    <div className="container mx-auto pt-32 pb-16 px-4 max-w-2xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Kontaktieren Sie uns</h1>
        <p className="text-lg text-muted-foreground">
          Bereit für das nächste Level? Lassen Sie uns über Ihr Projekt sprechen. 
          Füllen Sie das Formular aus und wir melden uns zeitnah.
        </p>
      </div>

      <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Max Mustermann" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* E-Mail */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail *</FormLabel>
                    <FormControl>
                      <Input placeholder="max@unternehmen.de" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Company (Optional) */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firma <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                  <FormControl>
                    <Input placeholder="GmbH & Co. KG" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nachricht */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deine Nachricht *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Beschreibe kurz dein Projekt oder dein Anliegen..." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}