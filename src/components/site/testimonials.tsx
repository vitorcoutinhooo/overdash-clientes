import { useState } from "react";

type Dep = {
  quote: string;
  who: string;
  meta: string;
  age: "35" | "45" | "55";
  fear: "medo-art" | "medo-dor";
};

const DEPS: Dep[] = [
  {
    quote: "Foi uma grande mudança em minha vida, vale a pena.",
    who: "@caliltania_",
    meta: "Lifting facial · comentário no Instagram",
    age: "45",
    fear: "medo-art",
  },
  {
    quote: "Estou me amando. Uma nova mulher.",
    who: "@sandra.mmartos",
    meta: "Lifting facial · 30 dias de pós",
    age: "45",
    fear: "medo-art",
  },
  {
    quote:
      "Mamãe com o contorno definido, olhar descansado e embelezamento realçado. Obrigada pelas mãos habilidosas que renovaram a autoestima.",
    who: "@thaysedellagnolo",
    meta: "Filha de paciente · 60 dias de pós",
    age: "55",
    fear: "medo-art",
  },
  {
    quote:
      "Estou muito satisfeita com o atendimento desde a recepção, o resultado do meu procedimento ficou impecável. Todo o suporte pós-operatório que elas proporcionaram é tão importante.",
    who: "Cris Polacci",
    meta: "Avaliação no Google · paciente desde 2024",
    age: "45",
    fear: "medo-dor",
  },
  {
    quote:
      "Fui recebida com carinho, atenção e cuidado em cada detalhe. O ambiente transmite paz, e cada profissional faz a gente se sentir segura e acolhida.",
    who: "Fábia Cristina",
    meta: "Avaliação no Google · atendimento",
    age: "35",
    fear: "medo-dor",
  },
];

const FILTERS = [
  { k: "all", label: "Todos" },
  { k: "35", label: "35–45 anos" },
  { k: "45", label: "45–55 anos" },
  { k: "55", label: "55+" },
  { k: "medo-art", label: "Tinha medo de ficar artificial" },
  { k: "medo-dor", label: "Tinha medo da dor" },
] as const;

export function Testimonials() {
  const [f, setF] = useState<string>("all");
  const list = DEPS.filter((d) => f === "all" || d.age === f || d.fear === f);

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Depoimentos</p>
        <h2 className="mt-3 text-[2rem] md:text-[3.1rem]">Leia quem tinha o seu medo.</h2>
        <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground">
          Filtre por faixa etária ou pelo receio que te trouxe até aqui.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {FILTERS.map((x) => (
            <button
              key={x.k}
              type="button"
              aria-pressed={f === x.k}
              onClick={() => setF(x.k)}
              className={
                f === x.k
                  ? "min-h-11 rounded-full border border-rose bg-rose-soft px-5 text-sm font-medium text-accent-foreground"
                  : "min-h-11 rounded-full border border-border bg-background px-5 text-sm text-ink-soft transition-colors hover:border-rose/60 hover:text-ink"
              }
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {list.map((d) => (
            <article
              key={d.who + d.quote.slice(0, 12)}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <span className="tracking-[2px] text-gold">★★★★★</span>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink">"{d.quote}"</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="size-9 shrink-0 rounded-full bg-rose-soft" />
                <span>
                  <b className="block text-ink">{d.who}</b>
                  {d.meta}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          {list.length} de {DEPS.length} depoimentos exibidos.
        </p>
        <p className="mt-2 max-w-[70ch] text-xs leading-relaxed text-muted-foreground">
          Depoimentos reais, extraídos das avaliações públicas no Google e dos comentários do
          Instagram @drarubianaramos, publicados com autorização.
        </p>
      </div>
    </section>
  );
}
