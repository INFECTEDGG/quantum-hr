import { useI18n } from "@/lib/i18n";

const logos = [
  "Adidas", "Aldi", "Allianz", "Apple", "BASF", "Bayer", "BlackRock", "BMW", "Bosch", "BYD", "Coca-Cola", "Commerzbank", "Continental", "DAIMLER", "DATEV", "Deutsche Bank", "Deutsche Telekom", "E.ON", "Fresenius", "Hummel", "IBM", "Lidl", "Lufthansa", "Microsoft", "Mercedes-Benz", "NVIDIA", "Phillips", "Porsche", "RWE", "SAP", "Siemens", "Trumph", "Thyssenkrupp", "Vector Informatik", "Volkswagen", "Zalando"
];

const tagline = {
  de: "Vertraut von People Leaders bei",
  en: "Trusted by people leaders at",
  fr: "Approuvé par des responsables RH chez",
};

const LogoCloud = () => {
  const { language } = useI18n();

  return (
    <section className="relative py-16 border-y border-border bg-surface-1/40">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {tagline[language]}
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-ticker w-max">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-xl md:text-2xl font-semibold tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
