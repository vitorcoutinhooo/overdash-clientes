import { useState } from "react";
import { Cta } from "./cta";
import { wa } from "@/lib/site-data";

export type Match = {
  key: string;
  chip: string;
  title: string;
  why: string;
  down: string;
  last: string;
  alt: string;
};

const MATCHES: Match[] = [
  {
    key: "flacidez",
    chip: "Rosto caído, papada",
    title: "Lifting Facial Deep Plane",
    why: "A flacidez de terço médio e inferior é estrutural: os ligamentos perderam sustentação. O Deep Plane reposiciona músculo e ligamento profundo, a pele acompanha, não é tracionada.",
    down: "Social em ~14 dias",
    last: "de 10 a 15 anos",
    alt: "Se a sua flacidez for leve, a avaliação pode indicar um caminho menos invasivo. Você vai ouvir isso.",
  },
  {
    key: "sulcos",
    chip: "Bigode chinês, marcas fundas",
    title: "Deep Plane + Microfat",
    why: "Marcas fundas quase nunca são só pele: há queda de estrutura somada a perda de volume. Reposicionar resolve a queda; o Microfat devolve o volume com a sua própria gordura.",
    down: "Social em ~14 dias",
    last: "de 10 a 15 anos (lifting)",
    alt: "Em casos iniciais, apenas medicina regenerativa pode ser suficiente.",
  },
  {
    key: "pele",
    chip: "Pele sem viço, rugas finas",
    title: "Nanofat (medicina regenerativa)",
    why: "Gordura processada em partículas ultrafinas, rica em fatores de crescimento e células-tronco: trata textura, rugas finas, cicatrizes e uniformiza o tom da pele.",
    down: "Menor tempo de recuperação",
    last: "Definida na avaliação",
    alt: "Não corrige flacidez estrutural. Se houver queda de tecido, a indicação muda.",
  },
  {
    key: "corpo",
    chip: "Gordura localizada",
    title: "Sculp3R",
    why: "Combina técnicas para remodelar, rejuvenescer e reduzir gordura localizada de forma minimamente invasiva, com definição corporal avançada.",
    down: "Recuperação reduzida",
    last: "Definida na avaliação",
    alt: "Indicado para quem tem rotina agitada e quer resultado rápido e seguro.",
  },
  {
    key: "olhos",
    chip: "Olhar cansado",
    title: "Deep Plane (terço médio) + Nanofat",
    why: "Olhar cansado costuma vir do terço médio que desceu e da perda de qualidade da pele periorbital. O plano combina reposicionamento e regeneração.",
    down: "Social em ~14 dias",
    last: "de 10 a 15 anos (lifting)",
    alt: "A conduta exata depende do que a avaliação encontrar na sua anatomia.",
  },
  {
    key: "volume",
    chip: "Derretimento facial",
    title: "Microfat (gordura própria)",
    why: "Pequenas quantidades de gordura purificada devolvem volume onde ele foi perdido. Sem preenchedor sintético, sem material estranho, sem risco de rejeição.",
    down: "Menor tempo de recuperação",
    last: "Definida na avaliação",
    alt: "Se houver queda estrutural associada, o Deep Plane entra no plano.",
  },
];

export function PainMatch({ onMatch }: { onMatch?: (m: Match) => void }) {
  const [active, setActive] = useState<Match | null>(null);

  return (
    <section id="painmatch" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Passo 1 · sem compromisso</p>
        <h2 className="mt-3 max-w-[22ch] text-[2rem] md:text-[3.1rem]">
          O que mais te incomoda quando você se olha no espelho?
        </h2>
        <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground">
          Escolha um. Em 30 segundos você vê a técnica indicada para o seu caso e o tempo de
          recuperação, antes de falar com alguém.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {MATCHES.map((m) => {
            const on = active?.key === m.key;
            return (
              <button
                key={m.key}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setActive(m);
                  onMatch?.(m);
                }}
                className={
                  on
                    ? "min-h-11 rounded-full border border-rose bg-rose-soft px-5 text-sm font-medium text-accent-foreground"
                    : "min-h-11 rounded-full border border-border bg-background px-5 text-sm text-ink-soft transition-colors hover:border-rose/60 hover:text-ink"
                }
              >
                {m.chip}
              </button>
            );
          })}
        </div>

        {active && (
          <div
            role="status"
            aria-live="polite"
            className="mt-8 max-w-3xl rounded-2xl border border-rose/40 bg-background p-6 shadow-card md:p-8"
          >
            <p className="eyebrow">Indicação principal</p>
            <h3 className="mt-2 text-[1.7rem] md:text-[2.1rem]">{active.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              {active.why}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Recuperação", active.down],
                ["Duração", active.last],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-muted p-4">
                  <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                    {k}
                  </span>
                  <b className="mt-1 block text-sm font-medium">{v}</b>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{active.alt}</p>

            <Cta
              className="mt-5"
              href={wa(
                `Olá! No site marquei "${active.chip}" e a indicação foi ${active.title}. Gostaria de agendar uma avaliação.`,
              )}
              target="_blank"
              rel="noopener"
            >
              Falar com a Dra. sobre isso
            </Cta>
            <p className="mt-3 text-xs text-muted-foreground">
              A indicação final depende da avaliação presencial. Este é um direcionamento, não um
              diagnóstico.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
