import { useState, useRef, useCallback } from "react";
import { IMG } from "@/lib/site-data";

const CAPTIONS = [
  { tech: "Deep Plane", note: "Reposicionamento de terço médio e inferior. Foto de 3 meses." },
  { tech: "Deep Plane", note: "Contorno de mandíbula e pescoço. Foto de 6 meses." },
  { tech: "Deep Plane", note: "Perfil — papada e terço inferior. Foto de 4 meses." },
  { tech: "Deep Plane", note: "Perfil lateral — redefinição de contorno. Foto de 5 meses." },
  { tech: "Deep Plane", note: "Papada e pescoço. Menor downtime, foto de 90 dias." },
  { tech: "Deep Plane + Nanofat", note: "Reposicionamento + volume com gordura própria. Foto de 6 meses." },
  { tech: "Deep Plane", note: "Flacidez de terço médio e inferior. Foto de 4 meses." },
  { tech: "Deep Plane", note: "Perfil — harmonização de contorno facial. Foto de 5 meses." },
  { tech: "Deep Plane", note: "Queixo e pescoço. Resultado natural e duradouro. Foto de 3 meses." },
  { tech: "Deep Plane + Nanofat", note: "Terço médio + regeneração. Foto de 4 meses." },
  { tech: "Deep Plane", note: "Perfil — papada, pescoço e mandíbula. Foto de 6 meses." },
  { tech: "Nanofat", note: "Textura, viço e uniformidade da pele. Foto de 90 dias." },
  { tech: "Deep Plane", note: "Terço médio e inferior — resultado expressivo. Foto de 5 meses." },
  { tech: "Deep Plane", note: "Pescoço e queixo. Recuperação social em ~14 dias. Foto de 3 meses." },
  { tech: "Deep Plane", note: "Flacidez generalizada. Reposicionamento profundo. Foto de 6 meses." },
  { tech: "Deep Plane + Nanofat", note: "Volume e contorno com gordura própria. Foto de 4 meses." },
];

export function ResultsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = IMG.results.length;

  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStart.current = null;
  };

  const caption = CAPTIONS[current] ?? CAPTIONS[0];

  return (
    <section id="resultados" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Resultados</p>
        <h2 className="mt-3 max-w-[28ch] text-[2rem] md:text-[3.1rem]">
          Antes e depois com o que ninguém coloca: contexto.
        </h2>
        <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground">
          Técnica, tempo de pós-operatório e o que <b className="text-ink">não</b> foi feito. Foto
          sem legenda não é prova, é enfeite.
        </p>

        {/* Carousel */}
        <div className="mt-9 relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {/* Main image */}
          <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-card">
            <img
              key={current}
              src={IMG.results[current]}
              alt={`Resultado real — ${caption.tech} — Instituto Ramoniê`}
              className="w-full object-cover max-h-[680px]"
              loading="lazy"
            />
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-ink shadow-soft backdrop-blur transition-opacity hover:opacity-90 md:h-12 md:w-12"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-ink shadow-soft backdrop-blur transition-opacity hover:opacity-90 md:h-12 md:w-12"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter badge */}
          <div className="absolute bottom-4 right-4 rounded-full border border-border bg-card/90 px-3 py-1 font-mono text-[0.6rem] tracking-[0.1em] text-muted-foreground backdrop-blur">
            {current + 1} / {total}
          </div>
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-rose">
              Caso real · {caption.tech}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{caption.note}</p>
          </div>
          <p className="shrink-0 text-xs text-muted-foreground/60 mt-0.5">
            Autorização por escrito
          </p>
        </div>

        {/* Dots */}
        <div className="mt-5 flex flex-wrap gap-1.5 justify-center">
          {IMG.results.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para resultado ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={
                i === current
                  ? "h-2 w-6 rounded-full bg-rose transition-all"
                  : "h-2 w-2 rounded-full bg-border transition-all hover:bg-rose/40"
              }
            />
          ))}
        </div>

        <p className="mt-6 max-w-[80ch] text-xs leading-relaxed text-muted-foreground">
          Imagens publicadas com autorização por escrito. Resultados variam conforme anatomia, idade
          e cicatrização. A avaliação define o que é possível no seu caso. Conteúdo educativo.
        </p>
      </div>
    </section>
  );
}
