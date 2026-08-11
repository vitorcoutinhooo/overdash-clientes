import { useState, useRef, useCallback } from "react";
import { IMG } from "@/lib/site-data";

const total = IMG.results.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function ResultsCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => mod(c - 1, total)), []);
  const next = useCallback(() => setCurrent((c) => mod(c + 1, total)), []);

  const prevIdx = mod(current - 1, total);
  const nextIdx = mod(current + 1, total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <section id="resultados" className="border-b border-border bg-ink overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">

        {/* Header */}
        <p className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-rose">
          Resultados
        </p>
        <h2 className="mt-3 max-w-[28ch] text-[2rem] text-cream md:text-[3.1rem]">
          Antes e depois com o que ninguém coloca: contexto.
        </h2>
        <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-cream/60">
          Técnica, tempo de pós-operatório e o que <b className="text-cream">não</b> foi feito.
          Foto sem legenda não é prova, é enfeite.
        </p>

        {/* Cards stage */}
        <div
          className="relative mt-10 flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ height: "clamp(260px, 44vw, 520px)" }}
        >
          {/* Prev */}
          <div
            onClick={prev}
            className="absolute cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/10"
            style={{
              width: "clamp(200px, 38vw, 460px)",
              aspectRatio: "1 / 1",
              height: "clamp(200px, 38vw, 460px)",
              maxHeight: "100%",
              left: "50%",
              transform: "translateX(calc(-50% - clamp(140px, 28vw, 320px))) scale(0.82)",
              transformOrigin: "right center",
              opacity: 0.4,
              filter: "blur(2px)",
              transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
              zIndex: 1,
            }}
          >
            <img src={IMG.results[prevIdx]} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-ink/50" />
          </div>

          {/* Center */}
          <div
            className="relative overflow-hidden rounded-[1.8rem] border border-white/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
            style={{
              width: "clamp(200px, 38vw, 460px)",
              aspectRatio: "1 / 1",
              height: "clamp(200px, 38vw, 460px)",
              maxHeight: "100%",
              zIndex: 10,
              transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <img
              key={current}
              src={IMG.results[current]}
              alt={`Caso real Instituto Ramoniê — antes e depois`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-3 right-3 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[0.58rem] tracking-widest text-white/70 backdrop-blur">
              {current + 1} / {total}
            </div>
          </div>

          {/* Next */}
          <div
            onClick={next}
            className="absolute cursor-pointer overflow-hidden rounded-[1.8rem] border border-white/10"
            style={{
              width: "clamp(200px, 38vw, 460px)",
              aspectRatio: "1 / 1",
              height: "clamp(200px, 38vw, 460px)",
              maxHeight: "100%",
              left: "50%",
              transform: "translateX(calc(-50% + clamp(140px, 28vw, 320px))) scale(0.82)",
              transformOrigin: "left center",
              opacity: 0.4,
              filter: "blur(2px)",
              transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
              zIndex: 1,
            }}
          >
            <img src={IMG.results[nextIdx]} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-ink/50" />
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-0 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={next}
            className="absolute right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-7 flex flex-wrap justify-center gap-1.5">
          {IMG.results.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Resultado ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={
                i === current
                  ? "h-2 w-6 rounded-full bg-rose transition-all"
                  : "h-2 w-2 rounded-full bg-white/20 transition-all hover:bg-rose/50"
              }
            />
          ))}
        </div>

        <p className="mt-7 max-w-[80ch] text-xs leading-relaxed text-cream/35">
          Imagens publicadas com autorização por escrito. Resultados variam conforme anatomia, idade
          e cicatrização. A avaliação define o que é possível no seu caso. Conteúdo educativo.
        </p>
      </div>
    </section>
  );
}
