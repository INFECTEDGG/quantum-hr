import { useState, type FocusEvent } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, languages, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);
  const activeLanguage = languages.find((option) => option.code === language);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div
      className={cn("relative inline-flex h-9 items-center text-xs text-muted-foreground", className)}
      role="group"
      aria-label={t("language.label")}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`${t("language.label")}: ${activeLanguage?.label ?? language.toUpperCase()}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Languages className="h-4 w-4" aria-hidden />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="flex items-center gap-1 rounded-full border border-border bg-background/95 p-1 shadow-card backdrop-blur-xl">
            {languages.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={cn(
                  "h-7 rounded-full px-2.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  language === option.code
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary hover:text-foreground",
                )}
                aria-pressed={language === option.code}
                title={option.label}
              >
                {option.shortLabel}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
