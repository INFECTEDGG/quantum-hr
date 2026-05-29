import { useState, useEffect, useMemo } from "react";
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
import { useI18n } from "@/lib/i18n";
import { createWebPageJsonLd, organizationJsonLd, SITE_NAME, usePageSeo } from "@/lib/seo";

const content = {
  de: {
    title: "Kontaktieren Sie uns",
    intro:
      "Bereit für das nächste Level? Lassen Sie uns über Ihr Projekt sprechen. Füllen Sie das Formular aus und wir melden uns zeitnah.",
    nameRequired: "Bitte gib deinen Namen ein (min. 2 Zeichen).",
    emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
    messageRequired: "Bitte gib eine Nachricht ein.",
    namePlaceholder: "Max Mustermann",
    emailPlaceholder: "max@unternehmen.de",
    companyPlaceholder: "GmbH & Co. KG",
    messageLabel: "Deine Nachricht *",
    messagePlaceholder: "Beschreibe kurz dein Projekt oder dein Anliegen...",
    submit: "Anfrage absenden",
    submitting: "Wird gesendet...",
    success: "Anfrage erfolgreich versendet!",
    successDescription: "Wir werden uns so schnell wie möglich bei dir melden.",
    error: "Fehler beim Senden",
    errorDescription: "Bitte versuche es später noch einmal.",
    jsonDescription: "KI-Enablement, HR-Automatisierung und verantwortungsvolle AI-Governance für moderne People Teams.",
  },
  en: {
    title: "Contact us",
    intro:
      "Ready for the next level? Let us talk about your project. Fill out the form and we will get back to you shortly.",
    nameRequired: "Please enter your name (min. 2 characters).",
    emailInvalid: "Please enter a valid email address.",
    messageRequired: "Please enter a message.",
    namePlaceholder: "Max Mustermann",
    emailPlaceholder: "max@company.com",
    companyPlaceholder: "Company Ltd.",
    messageLabel: "Your message *",
    messagePlaceholder: "Briefly describe your project or request...",
    submit: "Send request",
    submitting: "Sending...",
    success: "Request sent successfully!",
    successDescription: "We will get back to you as soon as possible.",
    error: "Error while sending",
    errorDescription: "Please try again later.",
    jsonDescription: "Experts in AI enablement and HR transformation.",
  },
  fr: {
    title: "Contactez-nous",
    intro:
      "Prêt pour la prochaine étape ? Parlons de votre projet. Remplissez le formulaire et nous vous répondrons rapidement.",
    nameRequired: "Veuillez saisir votre nom (min. 2 caractères).",
    emailInvalid: "Veuillez saisir une adresse e-mail valide.",
    messageRequired: "Veuillez saisir un message.",
    namePlaceholder: "Max Mustermann",
    emailPlaceholder: "max@entreprise.fr",
    companyPlaceholder: "Entreprise SARL",
    messageLabel: "Votre message *",
    messagePlaceholder: "Décrivez brièvement votre projet ou votre demande...",
    submit: "Envoyer la demande",
    submitting: "Envoi...",
    success: "Demande envoyée avec succès !",
    successDescription: "Nous vous répondrons dès que possible.",
    error: "Erreur lors de l'envoi",
    errorDescription: "Veuillez réessayer plus tard.",
    jsonDescription: "Experts en enablement IA et transformation RH.",
  },
};

export default function Contact() {
  const { language, t } = useI18n();
  const copy = content[language];
  const pageTitle = `${copy.title} - ${SITE_NAME}`;

  usePageSeo({
    title: pageTitle,
    description: copy.jsonDescription,
    path: "/kontakt",
    language,
    jsonLd: [
      organizationJsonLd,
      createWebPageJsonLd({
        title: pageTitle,
        description: copy.jsonDescription,
        path: "/kontakt",
        language,
        pageType: "ContactPage",
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: copy.nameRequired }),
        email: z.string().email({ message: copy.emailInvalid }),
        company: z.string().optional(),
        message: z.string().min(1, { message: copy.messageRequired }),
      }),
    [copy.emailInvalid, copy.messageRequired, copy.nameRequired],
  );

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
      // FaaS / Formspree Integration
      const response = await fetch("https://formspree.io/f/mzdwozkq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Netzwerk Fehler");

      // Marketing / Tracking Simulation
      console.log("Analytics: Event 'generate_lead' gefeuert", values);
      
      toast.success(copy.success, {
        description: copy.successDescription,
      });
      
      form.reset();
    } catch (error) {
      toast.error(copy.error, {
        description: copy.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto pt-32 pb-16 px-4 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{copy.title}</h1>
        <p className="text-lg text-muted-foreground">
          {copy.intro}
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
                    <FormLabel>{t("common.name")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={copy.namePlaceholder} {...field} />
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
                    <FormLabel>{t("common.email")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={copy.emailPlaceholder} type="email" {...field} />
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
                  <FormLabel>{t("common.company")} <span className="text-muted-foreground font-normal">({t("common.optional")})</span></FormLabel>
                  <FormControl>
                    <Input placeholder={copy.companyPlaceholder} {...field} />
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
                  <FormLabel>{copy.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={copy.messagePlaceholder}
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
              {isSubmitting ? copy.submitting : copy.submit}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
