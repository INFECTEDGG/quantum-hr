const Footer = () => {
  return (
    <footer className="relative border-t border-border py-14 bg-surface-1/40">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-glow" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Aetheris<span className="text-primary-glow">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              AI-native HR consulting for the world's most ambitious enterprises.
              Headquartered in London · New York · Singapore.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground transition-colors" href="#">About</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Press</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground">Resources</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-foreground transition-colors" href="#">Research</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Case studies</a></li>
              <li><a className="hover:text-foreground transition-colors" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aetheris HR Group. All rights reserved.</p>
          <p>Built for people leaders who refuse the status quo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
