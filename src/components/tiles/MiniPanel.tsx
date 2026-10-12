import { rotationFor, type Pattern } from "./patterns";
import { Tile } from "./Tile";
import styles from "./MiniPanel.module.css";

/** A small square of tiles showing one pattern. */
export function MiniPanel({ pattern, size = 2, className }: { pattern: Pattern; size?: number; className?: string }) {
  const cells = Array.from({ length: size * size }, (_, i) => rotationFor(pattern, i % size, Math.floor(i / size)));
  return (
    <span className={`${styles.panel} ${className ?? ""}`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
      {cells.map((turns, i) => (
        <Tile key={i} turns={turns} />
      ))}
    </span>
  );
}
