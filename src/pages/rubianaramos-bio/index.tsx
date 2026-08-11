import { useState } from "react";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Star,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { IMG } from "@/lib/site-data";
import { trackLead } from "@/lib/pixel";
import { ga4Lead } from "@/lib/ga4";
import { withUtms } from "@/lib/utm";

const PHONE = "5544991689022";
const LP_URL = "https://clientes.overdash.com.br/rubianaramos";

function whatsappUrl(message: string, campaign: string) {
  const utm = `utm_source=instagram&utm_medium=bio&utm_campaign=linkbio&utm_content=${campaign}`;
  const text = `${message}\n\n(${utm})`;
  return `https://api.whatsapp.com/send/?phone=${PHONE}&text=${encodeURIComponent(text)}`;
}

const rotas = [
  {
    k: "flacidez",
    title: "Meu rosto está caindo",
    sub: "Papada, contorno perdido, mandíbula sumindo",
    msg: "Olá! Vim pelo link da bio. Sinto meu rosto caindo — papada e contorno menos definidos. Gostaria de entender qual o melhor caminho para o meu caso.",
  },
  {
    k: "candidata",
    title: "Sou candidata ao Deep Plane?",
    sub: "Quero saber se é indicado para o meu caso",
    msg: "Olá! Vim pelo link da bio. Gostaria de saber se sou candidata ao Lifting Facial Deep Plane.",
  },
  {
    k: "recuperacao",
    title: "Quantos dias fico sem aparecer?",
    sub: "Tenho compromisso e preciso me planejar",
    msg: "Olá! Vim pelo link da bio. Gostaria de entender como é a recuperação e em quantos dias consigo voltar à rotina.",
  },
  {
    k: "outracidade",
    title: "Moro em outra cidade",
    sub: "Como funciona a logística e os retornos",
    msg: "Olá! Vim pelo link da bio. Moro em outra cidade e gostaria de entender como funciona a logística, a estadia e os retornos.",
  },
];

const depoimentos = [
  {
    quote: "Estou me amando. Uma nova mulher.",
    who: "@sandra.mmartos · 30 dias de pós",
  },
  {
    quote: "Foi uma grande mudança em minha vida, vale a pena.",
    who: "@caliltania_ · lifting facial",
  },
  {
    quote:
      "Mamãe com o contorno definido e o olhar descansado. Obrigada pelas mãos que renovaram a autoestima.",
    who: "@thaysedellagnolo · filha de paciente",
  },
];

const conteudos = [
  {
    title: "Deep Plane × lifting comum × fios",
    sub: "A comparação técnica que ninguém te mostra",
    href: LP_URL,
  },
  {
    title: "Como é a recuperação, dia a dia",
    sub: "Do dia 0 aos 90 dias, com acompanhamento próximo",
    href: LP_URL,
  },
  {
    title: "O que acontece na avaliação",
    sub: "Por que você sai com um plano definido",
    href: LP_URL,
  },
  {
    title: "Site oficial · Instituto Ramoniê",
    sub: "Procedimentos, equipe e estrutura",
    href: LP_URL,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/drarubianaramos",
    Icon: Instagram,
  },
  { label: "TikTok", href: "https://www.tiktok.com/@drarubianaramos", Icon: MessageCircle },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@InstitutoRamoni%C4%93",
    Icon: Youtube,
  },
  { label: "Facebook", href: "https://www.facebook.com/rubiana.ramos.10", Icon: Facebook },
];

function PrimaryCta({ campaign, label, hint }: { campaign: string; label: string; hint?: string }) {
  return (
    <a
      href={whatsappUrl(
        "Olá! Vim pelo link da bio e gostaria de agendar uma avaliação.",
        campaign,
      )}
      target="_blank"
      rel="noopener"
      onClick={() => { trackLead(`bio_${campaign}`); ga4Lead(`bio_${campaign}`, window.location.pathname); }}
      className="flex w-full flex-col items-center rounded-full px-6 py-4 text-center text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
      style={{ backgroundImage: "var(--gradient-cta)", boxShadow: "var(--shadow-lift)" }}
    >
      <span className="text-[15px] font-semibold tracking-wide uppercase">{label}</span>
      {hint ? <span className="mt-1 text-xs font-light opacity-90">{hint}</span> : null}
    </a>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[12px] text-muted-foreground">
      {children}
    </span>
  );
}

function GhostLink({
  href,
  title,
  sub,
  flush,
}: {
  href: string;
  title: string;
  sub: string;
  flush?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`bio-surface-card flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-secondary ${flush ? "" : "mt-2.5"}`}
    >
      <span className="flex-1">
        <span className="block text-[15px] font-medium">{title}</span>
        <span className="mt-0.5 block text-[13px] text-muted-foreground">{sub}</span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
    </a>
  );
}

export function RubianaRamosBioPage() {
  const [rota, setRota] = useState<(typeof rotas)[number] | null>(null);
  // Forward any UTMs from the current URL (e.g. from an ad or retargeting link)
  // to the LP so Meta Pixel on the LP sees the same source attribution.
  const lpUrl = withUtms(LP_URL);
  const lpConteudos = conteudos.map((c) => ({ ...c, href: lpUrl }));

  return (
    <div className="bio-page">
      <main className="bio-petal-bg min-h-screen pb-28">
        <div className="mx-auto w-full max-w-[460px] px-5">
          {/* Identidade */}
          <header className="pt-10 text-center">
            <img
              src={IMG.logo}
              alt="Instituto Ramoniê"
              className="mx-auto h-14 w-auto"
              width={220}
              height={96}
            />
            <div className="mt-7 flex justify-center">
              <div
                className="rounded-full bg-blush p-1.5"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-card">
                  <span className="text-4xl text-primary" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                    RR
                  </span>
                </div>
              </div>
            </div>
            <h1 className="mt-5 text-[28px] leading-tight">Dra. Rubiana Ramos</h1>
            <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Médica · CRM/PR 43.164 · Maringá
            </p>
            <p className="mx-auto mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted-foreground">
              Lifting Facial <strong className="font-semibold text-foreground">Deep Plane</strong>.
              Reposiciono estrutura, não estico pele.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Badge>
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Técnica Deep Plane
              </Badge>
              <Badge>
                <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 5,0 no Google
              </Badge>
              <Badge>Instituto Ramoniê</Badge>
            </div>
          </header>

          {/* CTA primário */}
          <section className="mt-8">
            <PrimaryCta
              campaign="cta_principal"
              label="Agendar minha avaliação"
              hint="Atendimento pelo WhatsApp · Maringá/PR"
            />
          </section>

          {/* Ver a LP completa */}
          <section className="mt-4">
            <a
              href={lpUrl}
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-card px-6 py-3.5 text-[14px] font-medium tracking-wide text-primary transition-colors hover:bg-blush"
            >
              Ver site completo <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          {/* Rotas por dor */}
          <section className="mt-10">
            <p className="bio-eyebrow text-center">Ainda em dúvida?</p>
            <h2 className="mt-2 text-center text-[22px]">Me diga o que te trouxe aqui.</h2>
            <p className="mx-auto mt-2 max-w-[36ch] text-center text-sm text-muted-foreground">
              Você chega no WhatsApp com a pergunta já feita e recebe a resposta certa de primeira.
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              {rotas.map((r) => {
                const active = rota?.k === r.k;
                return (
                  <button
                    key={r.k}
                    onClick={() => setRota(active ? null : r)}
                    aria-pressed={active}
                    className={`bio-surface-card flex items-center gap-3 px-4 py-3.5 text-left transition-colors ${
                      active ? "bg-blush ring-1 ring-primary" : "hover:bg-secondary"
                    }`}
                  >
                    <span className="flex-1">
                      <span className="block text-[15px] font-medium">{r.title}</span>
                      <span className="mt-0.5 block text-[13px] text-muted-foreground">
                        {r.sub}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                  </button>
                );
              })}
            </div>

            {rota ? (
              <div className="bio-surface-card mt-4 bg-blush p-4" role="status" aria-live="polite">
                <p className="bio-eyebrow">Sua mensagem</p>
                <p className="mt-2 rounded-xl bg-card p-3 text-[14px] leading-relaxed text-muted-foreground">
                  {rota.msg}
                </p>
                <a
                  href={whatsappUrl(rota.msg, `rota_${rota.k}`)}
                  target="_blank"
                  rel="noopener"
                  onClick={() => { trackLead(`bio_rota_${rota.k}`); ga4Lead(`bio_rota_${rota.k}`, window.location.pathname); }}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase"
                >
                  <MessageCircle className="h-4 w-4" /> Enviar no WhatsApp
                </a>
              </div>
            ) : null}
          </section>

          {/* Prova social */}
          <section className="mt-11">
            <p className="bio-eyebrow text-center">Resultados reais</p>
            <h2 className="mt-2 text-center text-[22px]">Pacientes de verdade, com autorização.</h2>

            <div className="mt-5 flex flex-col gap-2.5">
              {depoimentos.map((d) => (
                <figure key={d.who} className="bio-surface-card p-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-2 text-[15px] leading-relaxed">"{d.quote}"</blockquote>
                  <figcaption className="mt-2 text-xs text-muted-foreground">{d.who}</figcaption>
                </figure>
              ))}
            </div>

            <GhostLink
              href={lpUrl}
              title="Ver todos os resultados"
              sub="Galeria completa, por procedimento e tempo de pós"
            />

            <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
              Casos reais publicados com autorização. Resultados variam conforme características
              individuais; a indicação cirúrgica é definida após avaliação médica.
            </p>
          </section>

          {/* Educação */}
          <section className="mt-11">
            <p className="bio-eyebrow text-center">Antes de decidir</p>
            <h2 className="mt-2 text-center text-[22px]">Entenda o procedimento.</h2>
            <div className="mt-5 flex flex-col gap-2.5">
              {lpConteudos.map((c) => (
                <GhostLink key={c.title} href={c.href} title={c.title} sub={c.sub} flush />
              ))}
            </div>
          </section>

          {/* Localização */}
          <section className="mt-11">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Instituto+Ramoni%C3%AA+Maring%C3%A1"
              target="_blank"
              rel="noopener"
              className="bio-surface-card flex items-center gap-3 px-4 py-4 transition-colors hover:bg-secondary"
            >
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="flex-1">
                <span className="block text-[15px] font-medium">
                  Instituto Ramoniê · Maringá/PR
                </span>
                <span className="mt-0.5 block text-[13px] text-muted-foreground">
                  Atendimento com hora marcada · traçar rota
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
            </a>
          </section>

          {/* Redes */}
          <footer className="mt-12 text-center">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Acompanhe o dia a dia
            </p>
            <div className="mt-4 flex justify-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-blush"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-muted-foreground">
              Dra. Rubiana Ramos · CRM/PR 43.164
              <br />
              Conteúdo de caráter educativo. Procedimentos médicos possuem indicações, riscos e
              contraindicações.
            </p>
            <p className="mt-4 text-[11px] text-muted-foreground/60">
              Feito com ♡ por{" "}
              <a
                href="https://overperformance.com.br"
                target="_blank"
                rel="noopener"
                className="underline underline-offset-2 hover:text-muted-foreground"
              >
                Over Performance
              </a>
            </p>
          </footer>
        </div>

        {/* CTA fixo */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-5 py-3 backdrop-blur">
          <div className="mx-auto w-full max-w-[460px]">
            <PrimaryCta campaign="cta_fixo" label="Agendar minha avaliação" />
          </div>
        </div>
      </main>
    </div>
  );
}
