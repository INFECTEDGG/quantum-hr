import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="relative py-28 md:py-36 bg-surface-1/40 border-y border-border overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.18), transparent 60%)" }}
      />
      <div className="container relative">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="font-display text-5xl text-primary-glow leading-none">“</div>
          <blockquote className="mt-4 font-display text-2xl md:text-4xl font-medium leading-[1.25] tracking-tight">
            Aetheris didn't sell us a deck — they re-architected how 23,000 people work.
            The AI is genuinely good. The consultants are{" "}
            <span className="text-gradient">even better.</span>
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-glow" />
            <div className="text-left">
              <div className="font-medium">Margaux Lefèvre</div>
              <div className="text-sm text-muted-foreground">Chief People Officer, Helios Group</div>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Testimonial;
