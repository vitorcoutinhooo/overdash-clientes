import { useState } from "react";
import { Cta } from "./cta";
import { wa } from "@/lib/site-data";

const PROCS = {
  deep: { label: "Lifting Deep Plane", discharge: 1, social: 14, result: 90 },
  sculp: { label: "Sculp3R", discharge: 1, social: 7, result: 90 },
  fat: { label: "Microfat / Nanofat", discharge: 1, social: 5, result: 60 },
} as const;

type Key = keyof typeof PROCS;

function fmt(d: Date) {
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}
function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

export function RecoveryPlanner() {
  const [date, setDate] = useState("");
  const [proc, setProc] = useState<Key>("deep");
  const [out, setOut] = useState<null | {
    ok: boolean;
    verdict: string;
    note: string;
    t: { k: string; v: string }[];
  }>(null);

  function calc() {
    if (!date) return;
    const event = new Date(`${date}T12:00:00`);
    const p = PROCS[proc];
    const today = new Date();
    const days = Math.round((event.getTime() - today.getTime()) / 86_400_000);
    const lastDate = addDays(event, -p.social);
    const ok = days >= p.social;

    setOut({
      ok,
      verdict: ok
        ? `Dá tempo. Operando até ${lastDate.toLocaleDateString("pt-BR")}, você estará apresentável para o seu compromisso de ${event.toLocaleDateString("pt-BR")}.`
        : `Não dá tempo com segurança. Faltam ${Math.max(days, 0)} dias e o ${p.label} pede ~${p.social} dias de recuperação social. Antecipar a alta não é opção — o pós tem tempo próprio.`,
      note: ok
        ? "Essa é a última data possível para operar dentro dessa janela. A agenda é limitada por semana, então a data real depende da disponibilidade da Dra."
        : "Na avaliação a Dra. pode indicar um caminho com menor tempo de recuperação para esse prazo — ou programar o procedimento para depois do evento.",
      t: [
        { k: "Dia 0", v: "Procedimento" },
        { k: "Alta", v: `${p.discharge} dia` },
        { k: "Social", v: `${p.social} dias · ${fmt(addDays(lastDate, p.social))}` },
        { k: "Resultado", v: `${p.result} dias` },
      ],
    });
  }

  return (
    <section id="agenda" className="border-b border-border surface-blush">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Planejador · funciona de verdade</p>
        <h2 className="mt-3 max-w-[20ch] text-[2rem] md:text-[3.1rem]">
          Tem um evento marcado? Diga a data.
        </h2>
        <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground">
          O maior motivo de adiamento não é o preço — é não saber quantos dias você vai ficar fora.
          Descubra agora se dá tempo.
        </p>

        <div className="mt-8 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
          <label
            htmlFor="dEvent"
            className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground"
          >
            Data do seu compromisso
          </label>
          <div className="mt-3 flex flex-wrap gap-3">
            <input
              id="dEvent"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="min-h-12 flex-1 rounded-xl border border-input bg-background px-4 text-[0.95rem] text-ink"
            />
            <select
              aria-label="Procedimento"
              value={proc}
              onChange={(e) => setProc(e.target.value as Key)}
              className="min-h-12 flex-1 rounded-xl border border-input bg-background px-4 text-[0.95rem] text-ink"
            >
              {Object.entries(PROCS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={calc}
              className="min-h-12 rounded-xl bg-ink px-7 text-sm font-medium tracking-[0.06em] uppercase text-cream transition-all hover:brightness-125"
            >
              Calcular
            </button>
          </div>

          {out && (
            <div className="mt-6" aria-live="polite">
              <div
                className={
                  out.ok
                    ? "rounded-xl border border-success/40 bg-success/10 p-4 text-[0.9rem] leading-relaxed text-ink"
                    : "rounded-xl border border-alert/40 bg-alert/10 p-4 text-[0.9rem] leading-relaxed text-ink"
                }
              >
                {out.verdict}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {out.t.map((t) => (
                  <div
                    key={t.k}
                    className="rounded-xl border border-border bg-background p-3 text-center"
                  >
                    <span className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted-foreground">
                      {t.k}
                    </span>
                    <b className="mt-1 block text-[0.8rem] font-medium">{t.v}</b>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{out.note}</p>
              <Cta
                className="mt-5"
                href={wa(
                  `Olá! Tenho um compromisso em ${date ? new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR") : ""} e usei o planejador do site (${PROCS[proc].label}). Gostaria de garantir uma vaga nessa janela.`,
                )}
                target="_blank"
                rel="noopener"
              >
                Garantir uma vaga nessa janela
              </Cta>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
