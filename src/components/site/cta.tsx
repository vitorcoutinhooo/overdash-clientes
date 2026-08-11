import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/pixel";
import { ga4Lead } from "@/lib/ga4";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "ghost" | "dark";
  block?: boolean;
};

export function Cta({ variant = "solid", block = true, className, onClick, href, ...rest }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href?.includes("whatsapp.com")) {
      trackLead("cta_whatsapp_lp");
      ga4Lead("cta_whatsapp_lp", window.location.pathname);
    }
    onClick?.(e);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      {...rest}
      className={cn(
        "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-[0.9rem] font-medium tracking-[0.06em] uppercase transition-all duration-300",
        block ? "w-full" : "w-auto",
        variant === "solid" &&
          "bg-rose text-primary-foreground shadow-soft hover:brightness-105 hover:-translate-y-0.5",
        variant === "ghost" &&
          "border border-rose/60 bg-card text-rose hover:bg-rose-soft hover:-translate-y-0.5",
        variant === "dark" &&
          "bg-ink text-cream hover:brightness-125 hover:-translate-y-0.5",
        className,
      )}
    />
  );
}
