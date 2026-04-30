import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-card-gradient shadow-elegant p-10 md:p-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at top left, hsl(var(--primary) / 0.35), transparent 55%), radial-gradient(ellipse at bottom right, hsl(var(--primary-glow) / 0.3), transparent 55%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Get started</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Build the people org of the{" "}
              <span className="text-gradient">next decade.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              45-minute strategy call with a senior partner. We'll share a tailored
              workforce intelligence brief — no obligations.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Book strategy call
                <ArrowRight />
              </Button>
              <Button variant="glass" size="lg">
                Download capabilities deck
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
