import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-hr.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero noise pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary-glow) / 0.5), transparent 70%)" }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground">
                AI-NATIVE PEOPLE STRATEGY · SINCE 2019
              </span>
            </div>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              The future of HR is{" "}
              <span className="text-gradient">intelligent,</span>{" "}
              <span className="italic font-light text-muted-foreground">human-led.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Aetheris pairs senior HR consultants with proprietary AI to redesign
              hiring, performance, and workforce planning for Fortune 500 enterprises.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Book a strategy call
                <ArrowRight />
              </Button>
              <Button variant="glass" size="lg">
                See the platform
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "240+", v: "Enterprise clients" },
                { k: "38%", v: "Avg. time-to-hire cut" },
                { k: "$2.1B", v: "Workforce optimized" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl md:text-3xl font-semibold text-gradient">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10 animate-float-slow">
              <img
                src={heroImage}
                alt="AI neural network visualizing workforce intelligence"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card-gradient border border-white/10 backdrop-blur-xl p-4 shadow-card max-w-[230px] hidden md:block">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-glow animate-pulse-glow" />
                <span className="text-xs text-muted-foreground">Live insight</span>
              </div>
              <p className="mt-2 text-sm font-medium leading-snug">
                Attrition risk down <span className="text-primary-glow">21%</span> across
                engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
