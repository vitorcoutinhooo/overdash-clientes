import { useState } from "react";
import { CLINIC, IMG, wa } from "@/lib/site-data";
import { Cta } from "@/components/site/cta";
import { PainMatch, type Match } from "@/components/site/pain-match";
import { ResultsCarousel } from "@/components/site/results-carousel";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";

const TICKER = [
  `${CLINIC.crm} · ${CLINIC.doctor}`,
  "Avaliação presencial com a médica, não com consultora",
  "Centro cirúrgico equipado",
  "Acompanhamento por 12 meses",
  "Mulheres e homens",
  `${CLINIC.city}`,
];

const PROCEDURES = [
  {
    img: IMG.lifting,
    badge: "Mais procurado",
    badgeTone: "rose" as const,
    title: "Lifting Facial Deep Plane",
    lead: 'Reposiciona músculo e ligamento, não só a pele. É por isso que não fica com aspecto de "esticado".',
    specs: [
      ["Indicado", "Flacidez de terço médio e inferior, papada, contorno perdido"],
      ["Duração", "de 10 a 15 anos"],
      ["Recuperação", "Social em ~14 dias · plena em 30"],
    ],
  },
  {
    img: IMG.sculp3r,
    badge: "Menor downtime",
    badgeTone: "muted" as const,
    title: "Sculp3R",
    lead: "Redução de gordura localizada e definição corporal de forma minimamente invasiva.",
    specs: [
      ["Indicado", "Gordura localizada + definição, rotina agitada"],
      ["Duração", "Definida na avaliação"],
      ["Recuperação", "Reduzida, retorno rápido à rotina"],
    ],
  },
  {
    img: IMG.fat,
    badge: "Sem material estranho",
    badgeTone: "muted" as const,
    title: "Microfat & Nanofat",
    lead: "Usa a sua própria gordura. Sem preenchedor sintético, sem risco de rejeição.",
    specs: [
      ["Indicado", "Derretimento facial, rugas finas, qualidade e textura da pele"],
      ["Duração", "Definida na avaliação"],
      ["Recuperação", "Menor tempo de recuperação"],
    ],
  },
];

const JOURNEY = [
  ["01", "Avaliação presencial", "Com a Dra. Rubiana. Análise de anatomia e expectativa."],
  ["02", "Plano por escrito", "Técnica, condições, riscos e data. Você sai com o documento."],
  ["03", "Pré-operatório", "Exames e liberação. Orientação enviada por escrito."],
  ["04", "Dia do procedimento", "Centro cirúrgico equipado com equipe especializada."],
  ["05", "Acompanhamento", "Retornos em 7, 30, 90 dias e 12 meses, inclusos."],
];

function Chip({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/70 p-3.5">
      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
      <span className="text-xs leading-snug text-muted-foreground">
        <b className="block text-[0.8rem] font-medium text-ink">{title}</b>
        {text}
      </span>
    </div>
  );
}

export function RubianaRamosPage() {
  const [match, setMatch] = useState<Match | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* 01 · TICKER DE CONFIANÇA */}
      <div className="overflow-hidden bg-ink py-2.5 text-cream">
        <div className="ticker-track font-mono text-[0.6rem] tracking-[0.12em] uppercase">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="px-6">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 md:px-10">
          <a href="#top" className="flex items-center">
            <img
              src={IMG.logo}
              alt="Instituto Ramoniê"
              className="h-9 w-auto md:h-11"
              width={1024}
              height={447}
            />
          </a>
          <div className="hidden gap-7 text-[0.82rem] text-muted-foreground lg:flex">
            <a href="#painmatch" className="hover:text-rose">
              Deep Plane
            </a>
            <a href="#resultados" className="hover:text-rose">
              Resultados
            </a>
            <a href="#a-dra" className="hover:text-rose">
              A Dra.
            </a>
            <a href="#avaliacao" className="hover:text-rose">
              A avaliação
            </a>
            <a href="#duvidas" className="hover:text-rose">
              Dúvidas
            </a>
          </div>
          <Cta
            block={false}
            className="min-h-11 px-5 py-2.5 text-[0.7rem]"
            href={wa("Olá! Gostaria de agendar uma avaliação.")}
            target="_blank"
            rel="noopener"
          >
            Agendar avaliação
          </Cta>
        </nav>
      </header>

      {/* 02 · HERO */}
      <section id="top" className="relative overflow-hidden border-b border-border surface-blush">
        <div className="pointer-events-none absolute inset-0 petal-glow" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow max-w-[46ch] leading-relaxed">
              O maior medo de quem pensa em fazer um lifting não é a cirurgia.
            </p>
            <h1 className="mt-4 max-w-[20ch] text-[2.5rem] leading-[1.03] md:text-[4.2rem]">
              É olhar no espelho depois e não se reconhecer.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-relaxed text-muted-foreground">
              <b className="text-ink">Lifting Deep Plane:</b> reposiciona as estruturas profundas
              que perderam sustentação. Não estica a pele. Devolve ao lugar o que o tempo tirou. O
              resultado é aquele que ninguém identifica exatamente, mas todo mundo percebe.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="tracking-[2px] text-gold">★★★★★</span>
              <span className="text-xs text-muted-foreground">
                <b className="text-ink">{CLINIC.rating}</b> · {CLINIC.reviews} avaliações no Google
              </span>
              <span className="rounded-full bg-rose-soft px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-accent-foreground">
                {CLINIC.crm}
              </span>
              <span className="rounded-full bg-muted px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                {CLINIC.city}
              </span>
              <span className="rounded-full bg-muted px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                Mulheres e homens
              </span>
            </div>

            <div className="mt-7 max-w-md space-y-3">
              <Cta href="#painmatch">Ver se o Deep Plane é indicado para mim</Cta>
              <Cta
                variant="ghost"
                href={wa("Olá! Gostaria de agendar uma avaliação.")}
                target="_blank"
                rel="noopener"
              >
                Agendar minha avaliação
              </Cta>
              <p className="text-xs text-muted-foreground">
                Avaliação presencial em Maringá/PR, com a {CLINIC.doctor} · vagas limitadas por
                semana
              </p>
            </div>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              <Chip title="Médica, não consultora" text="Avaliação feita pela Dra. Rubiana" />
              <Chip title="Centro cirúrgico equipado" text="Estrutura com suporte especializado" />
              <Chip title="Plano por escrito" text="Você sai com técnica e condições definidas" />
              <Chip title="Acompanhamento 12 meses" text="Retornos inclusos" />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
              <img
                src={IMG.lifting}
                alt="Procedimento de rejuvenescimento facial realizado pela Dra. Rubiana Ramos no Instituto Ramoniê"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card/95 p-4 backdrop-blur md:left-8 md:right-8">
              <p className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-rose">
                Naturalidade
              </p>
              <p className="mt-1.5 font-display text-[1.15rem] leading-snug">
                "Não é ausência de resultado. É um resultado que respeita quem você é."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · PAINMATCH */}
      <PainMatch onMatch={setMatch} />

      {/* 04 · PROCEDIMENTOS */}
      <section className="border-b border-border surface-blush">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
          <p className="eyebrow">Tratamentos</p>
          <h2 className="mt-3 text-[2rem] md:text-[3.1rem]">Três técnicas. Uma decisão.</h2>
          <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            Cada card responde as perguntas que você faria na consulta, antes de marcar a consulta.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PROCEDURES.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span
                    className={
                      p.badgeTone === "rose"
                        ? "w-fit rounded-full bg-rose-soft px-3 py-1 font-mono text-[0.55rem] tracking-[0.1em] uppercase text-accent-foreground"
                        : "w-fit rounded-full bg-muted px-3 py-1 font-mono text-[0.55rem] tracking-[0.1em] uppercase text-muted-foreground"
                    }
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-[1.5rem]">{p.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-muted-foreground">{p.lead}</p>
                  <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-[0.78rem]">
                    {p.specs.map(([k, v]) => (
                      <div key={k} className="col-span-2 grid grid-cols-[5.5rem_1fr] gap-3">
                        <dt className="pt-0.5 font-mono text-[0.55rem] tracking-[0.08em] uppercase text-muted-foreground">
                          {k}
                        </dt>
                        <dd className="text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Cta variant="ghost" className="mt-auto min-h-11 text-[0.68rem]" href="#avaliacao">
                    Agendar avaliação
                  </Cta>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · COMPARATIVO */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
          <p className="eyebrow">Comparativo</p>
          <h2 className="mt-3 max-w-[30ch] text-[2rem] md:text-[3.1rem]">
            Por que Deep Plane e não o lifting que te ofereceram por menos?
          </h2>
          <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            A diferença não está no preço. Está na camada em que o cirurgião trabalha.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[640px] border-collapse text-[0.82rem]">
              <thead>
                <tr className="bg-muted">
                  {[
                    "Critério",
                    "Deep Plane · aqui",
                    "Lifting convencional (SMAS)",
                    "Fios / bioestimulador",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border-b border-border p-4 text-left font-mono text-[0.55rem] tracking-[0.08em] uppercase font-normal text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Camada tratada",
                    "Músculo + ligamento profundo",
                    "Pele e SMAS superficial",
                    "Apenas sustentação temporária",
                    0,
                  ],
                  [
                    'Aspecto "esticado"',
                    "Não. O tecido é reposicionado, não tracionado",
                    "Risco maior de tração visível",
                    "Não corrige flacidez estrutural",
                    0,
                  ],
                  ["Duração do resultado", "de 10 a 15 anos", "Menor permanência", "Meses", 0],
                  ["Recuperação social", "~14 dias", "Variável", "1 a 2 dias", 2],
                  [
                    "Quantas vezes você repete",
                    "Uma vez",
                    "Eventual retoque",
                    "Indefinidamente, em ciclos",
                    0,
                  ],
                ].map((row) => {
                  const win = row[4] as number;
                  return (
                    <tr key={row[0] as string}>
                      {(row.slice(0, 4) as string[]).map((cell, i) => (
                        <td
                          key={i}
                          className={
                            i - 1 === win && i > 0
                              ? "border-b border-border bg-success/10 p-4 align-top font-medium text-ink"
                              : "border-b border-border p-4 align-top text-muted-foreground"
                          }
                        >
                          {i === 0 ? <span className="text-ink">{cell}</span> : cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Comparação técnica entre abordagens, sem referência a profissionais ou clínicas
            específicas.
          </p>
        </div>
      </section>

      {/* 06 · ANTES E DEPOIS */}
      <ResultsCarousel />

      {/* 07 · DEPOIMENTOS */}
      <Testimonials />

      {/* 08 · JORNADA */}
      <section className="border-b border-border surface-blush">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-3 max-w-[26ch] text-[2rem] md:text-[3.1rem]">
            Do primeiro contato ao retorno de 12 meses.
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-5">
            {JOURNEY.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-5">
                <span className="font-mono text-[0.62rem] tracking-[0.12em] text-rose">{n}</span>
                <b className="mt-2 block font-display text-[1.15rem] font-medium">{t}</b>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 · DESEJO */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
          <p className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-gold">
            O que muda
          </p>
          <h2 className="mt-4 max-w-[16ch] text-[2.2rem] md:text-[3.6rem]">
            Não é um rosto novo. É o seu, de volta.
          </h2>

          <div className="mt-10 max-w-2xl border-t border-cream/15">
            {[
              ["Menos peso", "Mais contorno"],
              ["Menos sinais do tempo", "Mais expressão"],
              ["Menos cansaço", "Mais presença"],
            ].map(([less, more]) => (
              <div
                key={less}
                className="grid grid-cols-2 items-center gap-4 border-b border-cream/15 py-4"
              >
                <span className="text-[0.9rem] text-cream/55 line-through decoration-cream/25">
                  {less}
                </span>
                <span className="font-display text-[1.4rem] text-cream">{more}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[56ch] text-[0.95rem] leading-relaxed text-cream/70">
            É aquele tipo de resultado que faz as pessoas comentarem{" "}
            <i>"você está diferente… mais leve, mais bonita"</i>, sem conseguir dizer exatamente o
            porquê.
          </p>
          <p className="mt-6 max-w-[24ch] font-display text-[1.6rem] text-gold">
            A mesma pessoa. Apenas renovada.
          </p>
        </div>
      </section>

      {/* 10 · A AVALIAÇÃO */}
      <section id="avaliacao" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">A avaliação</p>
            <h2 className="mt-3 max-w-[24ch] text-[2rem] md:text-[3.1rem]">
              Uma hora que economiza uma decisão errada.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              A consulta não é uma etapa burocrática antes do procedimento. É onde se decide{" "}
              <b className="text-ink">se</b> o procedimento faz sentido para você, e essa é a parte
              mais valiosa.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              Cada rosto tem uma história. E cada tratamento deve respeitar essa individualidade, o
              que só é possível depois de olhar o seu.
            </p>
            <div className="mt-7 max-w-md">
              <Cta
                href={wa("Olá! Li sobre a avaliação no site e gostaria de agendar a minha.")}
                target="_blank"
                rel="noopener"
              >
                Agendar minha avaliação
              </Cta>
              <p className="mt-3 text-xs text-muted-foreground">
                A agenda tem vagas limitadas por semana. A disponibilidade é confirmada no
                WhatsApp.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [
                "Análise da sua anatomia, não de um protocolo",
                "Onde os tecidos desceram, quanto de sustentação foi perdido, o que a sua estrutura permite. Nenhum rosto entra num modelo pronto.",
              ],
              [
                "Você ouve o que NÃO deve ser feito",
                "Se o resultado que você imagina não for alcançável com naturalidade, você sai sabendo disso.",
              ],
              [
                "Um plano por escrito",
                "Técnica indicada, o que muda, o que não muda, riscos, tempo de recuperação e o que esperar mês a mês.",
              ],
              [
                "Com a médica que vai operar",
                "Não com consultora comercial. Quem avalia é quem faz.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-background p-5">
                <b className="block font-display text-[1.2rem] font-medium">{t}</b>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · SEGURANÇA */}
      <section className="border-b border-border surface-blush">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
          <p className="eyebrow">Segurança</p>
          <h2 className="mt-3 text-[2rem] md:text-[3.1rem]">Cada selo aqui tem lastro.</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              [CLINIC.crm, "Registro ativo no Conselho Regional de Medicina do Paraná."],
              [
                "Centro cirúrgico equipado",
                "Estrutura com suporte de emergência e equipe assistencial.",
              ],
              [
                "Termo de consentimento",
                "Riscos e limitações explicados por escrito antes do sim.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5">
                <b className="block font-display text-[1.2rem] font-medium">{t}</b>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 · A DRA */}
      <section id="a-dra" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-border surface-blush p-10 text-center shadow-card">
            <img
              src={IMG.logo}
              alt="Logo do Instituto Ramoniê"
              className="mx-auto w-52"
              loading="lazy"
            />
            <p className="mt-8 font-display text-[1.6rem] leading-snug">
              "Existe uma grande diferença entre mudar um rosto e devolver sua essência."
            </p>
            <p className="mt-5 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-rose">
              {CLINIC.doctor} · {CLINIC.crm}
            </p>
          </div>
          <div>
            <p className="eyebrow">Quem vai te atender</p>
            <h2 className="mt-3 text-[2rem] md:text-[3.1rem]">{CLINIC.doctor}</h2>
            <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground">
              {CLINIC.crm} · Médica em {CLINIC.city} · {CLINIC.rating} no Google (
              {CLINIC.reviews} avaliações)
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Médica dedicada ao rejuvenescimento facial, técnicas regenerativas e resultados
              naturais. Atende mulheres e homens. Trabalha apenas com técnicas avançadas que
              respeitam as características únicas de cada paciente e entregam resultados harmoniosos,
              duradouros e sofisticados.
            </p>
            <div className="mt-6 grid gap-2.5">
              <Chip
                title="Ela mesma avalia"
                text="A avaliação é feita pela médica, não por consultora comercial"
              />
              <Chip
                title="Deep Plane"
                text="Técnica de reposicionamento profundo, referência em resultado natural"
              />
              <Chip
                title="Acompanhamento incluso"
                text="Retornos em 7, 30, 90 dias e 12 meses"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 13 · FAQ */}
      <Faq />

      {/* 14 · LOCALIZAÇÃO */}
      <section className="border-b border-border surface-blush">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Onde estamos</p>
            <h2 className="mt-3 text-[2rem] md:text-[3.1rem]">Maringá · Paraná</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              {CLINIC.addressLine}
              <br />
              {CLINIC.city} · CEP {CLINIC.zip}
            </p>
            <div className="mt-5 grid gap-2.5">
              <Chip title="Horário" text={CLINIC.hours} />
              <Chip
                title="Vem de outra cidade?"
                text="Orientamos logística, hospedagem e retornos pós-operatórios"
              />
              <Chip title="Telefone e WhatsApp" text={CLINIC.phoneDisplay} />
            </div>
            <div className="mt-6 max-w-sm">
              <Cta
                variant="ghost"
                href={`https://www.google.com/maps/search/?api=1&query=${CLINIC.mapsQuery}`}
                target="_blank"
                rel="noopener"
              >
                Traçar rota no Google Maps
              </Cta>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Mapa do Instituto Ramoniê em Maringá"
              src={`https://www.google.com/maps?q=${CLINIC.mapsQuery}&output=embed`}
              loading="lazy"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* 15 · CTA FINAL */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-[24ch] text-[2rem] md:text-[3.1rem]">
            O melhor resultado é aquele que faz você se olhar no espelho e se reconhecer novamente.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            Meu compromisso é que você saia daqui não apenas mais bonita, mas mais confiante, leve
            e segura da mulher que você é.
          </p>
          <div className="mx-auto mt-8 max-w-sm">
            <Cta
              href={wa("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener"
            >
              Agendar minha avaliação
            </Cta>
            <p className="mt-3 text-xs text-muted-foreground">
              Atendimento por WhatsApp {CLINIC.phoneDisplay} · {CLINIC.city}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-10">
          <div>
            <img
              src={IMG.logo}
              alt="Instituto Ramoniê"
              className="w-40 brightness-0 invert opacity-90"
              loading="lazy"
            />
            <p className="mt-4 text-xs leading-relaxed">
              {CLINIC.doctor} · {CLINIC.crm}
              <br />
              Conteúdo de caráter educativo. Resultados variam de paciente para paciente.
            </p>
          </div>
          <div className="text-xs leading-relaxed">
            <b className="mb-2 block font-mono text-[0.6rem] tracking-[0.14em] uppercase text-gold">
              Endereço
            </b>
            {CLINIC.addressLine}
            <br />
            {CLINIC.city} · {CLINIC.zip}
          </div>
          <div className="text-xs leading-relaxed">
            <b className="mb-2 block font-mono text-[0.6rem] tracking-[0.14em] uppercase text-gold">
              Contato
            </b>
            WhatsApp {CLINIC.phoneDisplay}
            <br />
            {CLINIC.hours}
            <br />
            {CLINIC.rating} ★ · {CLINIC.reviews} avaliações no Google
          </div>
        </div>
        <div className="border-t border-cream/10 px-5 py-4 text-center font-mono text-[0.62rem] tracking-[0.06em] text-cream/40 md:px-10">
          2026 {CLINIC.doctor}. Feito com ♡ por{" "}
          <a
            href="https://overperformance.com.br"
            target="_blank"
            rel="noopener"
            className="text-cream/55 underline underline-offset-2 transition-colors hover:text-cream/80"
          >
            Over Performance
          </a>
        </div>
      </footer>

      {/* STICKY BAR */}
      <div className="sticky bottom-0 z-40 flex items-center gap-3 border-t border-border bg-background/95 px-5 py-3 backdrop-blur md:px-10">
        <div className="flex-1 leading-tight">
          <b className="block text-[0.85rem] font-medium">Avaliação com a {CLINIC.doctor}</b>
          <span className="text-[0.7rem] text-muted-foreground">
            {match
              ? `${match.chip} → ${match.title}`
              : "Escolha um incômodo acima para personalizar"}
          </span>
        </div>
        <Cta
          block={false}
          className="min-h-11 px-6 py-2.5 text-[0.7rem]"
          href={wa(
            match
              ? `Olá! No site marquei "${match.chip}" e gostaria de agendar uma avaliação.`
              : "Olá! Gostaria de agendar uma avaliação.",
          )}
          target="_blank"
          rel="noopener"
        >
          Agendar
        </Cta>
      </div>
    </div>
  );
}
