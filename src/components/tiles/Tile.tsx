import type { CSSProperties, HTMLAttributes } from "react";
import styles from "./Tile.module.css";

type TileProps = HTMLAttributes<HTMLSpanElement> & {
  turns: number;
};

export function Tile({ turns, className, style, ...rest }: TileProps) {
  return (
    <span {...rest} className={`${styles.tile} ${className ?? ""}`} style={{ ...style, "--r": turns } as CSSProperties}>
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <use href="#azulejo" />
      </svg>
    </span>
  );
}
