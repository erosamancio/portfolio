"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { MiniPanel } from "./tiles/MiniPanel";
import { Tile } from "./tiles/Tile";
import { rotationFor, turnTo, type Pattern } from "./tiles/patterns";
import { defaultMessage, services, whatsappLink, type ServiceId } from "@/content/site";
import styles from "./Hero.module.css";

const TILE_COUNT = 72;
const SSR_COLUMNS = 12;
const START: Pattern = "diagonal";

type Cell = { col: number; row: number };

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cells = useRef<Cell[]>([]);
  const pattern = useRef<Pattern>(START);
  const [turns, setTurns] = useState<number[]>(() =>
    Array.from({ length: TILE_COUNT }, (_, i) => rotationFor(START, i % SSR_COLUMNS, Math.floor(i / SSR_COLUMNS))),
  );
  const [delays, setDelays] = useState<number[]>(() => Array(TILE_COUNT).fill(0));
  const [instant, setInstant] = useState(true);
  const [selected, setSelected] = useState<ServiceId | null>(null);

  const measure = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const tiles = grid.querySelectorAll<HTMLElement>("[data-tile]");
    const step = tiles[0]?.offsetWidth ?? 1;
    cells.current = Array.from(tiles, (t) => ({
      col: Math.round(t.offsetLeft / step),
      row: Math.round(t.offsetTop / step),
    }));
  }, []);

  // Snap to the real grid (column count changes per breakpoint) without animating.
  useIsoLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const sync = () => {
      setInstant(true);
      measure();
      setTurns((prev) => cells.current.map((c, i) => turnTo(prev[i] ?? 0, rotationFor(pattern.current, c.col, c.row))));
      setDelays(Array(TILE_COUNT).fill(0));
      requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
    };
    // The observer's first callback performs the initial sync.
    const ro = new ResizeObserver(sync);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [measure]);

  function choose(id: ServiceId, origin: HTMLElement) {
    const service = services.find((s) => s.id === id)!;
    setSelected(id);
    pattern.current = service.pattern;
    const grid = gridRef.current!;
    const g = grid.getBoundingClientRect();
    const o = origin.getBoundingClientRect();
    const step = (grid.querySelector<HTMLElement>("[data-tile]")?.offsetWidth ?? 1) || 1;
    const ox = (o.left + o.width / 2 - g.left) / step;
    const oy = (o.top + o.height / 2 - g.top) / step;
    setDelays(cells.current.map((c) => Math.round(Math.hypot(c.col + 0.5 - ox, c.row + 0.5 - oy) * 55)));
    setTurns((prev) => cells.current.map((c, i) => turnTo(prev[i], rotationFor(service.pattern, c.col, c.row))));
  }

  function nudge(i: number, pointerType: string) {
    if (pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setDelays((d) => (d[i] === 0 ? d : Object.assign([...d], { [i]: 0 })));
    setTurns((t) => Object.assign([...t], { [i]: t[i] + 1 }));
  }

  const service = services.find((s) => s.id === selected);
  const message = service?.message ?? defaultMessage;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div ref={gridRef} className={styles.grid} data-instant={instant}>
        <div className={styles.cartouche}>
          <h1 id="hero-title" className={styles.title}>
            Sites que além de bonitos, funcionam.
          </h1>
          <p className={styles.lede}>
            Eu sou o Eros, desenvolvedor em Recife. Crio o site do seu negócio do visual ao que roda por trás:
            formulário que chega no seu e-mail, integração com o que você já usa, sistema quando precisa.
          </p>

          <div className={styles.picker} role="group" aria-labelledby="picker-label">
            <p id="picker-label" className={styles.pickerLabel}>
              O que você precisa?
            </p>
            <div className={styles.options}>
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={styles.option}
                  aria-pressed={selected === s.id}
                  onClick={(e) => choose(s.id, e.currentTarget)}
                >
                  <MiniPanel pattern={s.pattern} className={styles.optionPanel} />
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.cta}>
            <a className={styles.whats} href={whatsappLink(message)} target="_blank" rel="noopener">
              <WhatsAppIcon className={styles.whatsIcon} />
              Chamar no WhatsApp
            </a>
            <p className={styles.ctaNote} aria-live="polite">
              {service ? `Abre a conversa já falando de: ${service.name.toLowerCase()}.` : "Abre a conversa com a mensagem pronta."}
            </p>
          </div>

          <a className={styles.secondary} href="#trabalhos">
            Ver trabalhos e experiência <ArrowDown aria-hidden="true" />
          </a>
        </div>

        {turns.map((t, i) => (
          <Tile
            key={i}
            data-tile=""
            turns={t}
            className={styles.tile}
            style={{ "--delay": `${instant ? 0 : delays[i]}ms` } as CSSProperties}
            onPointerEnter={(e) => nudge(i, e.pointerType)}
          />
        ))}
      </div>
    </section>
  );
}
