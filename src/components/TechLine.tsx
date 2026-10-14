import { techColor } from "@/content/site";
import styles from "./TechLine.module.css";

/** Technologies as quiet text, each with a small dot in its color. */
export function TechLine({ items }: { items: string[] }) {
  return (
    <ul className={styles.tech} aria-label="Tecnologias">
      {items.map((t) => (
        <li key={t} style={{ "--tech": techColor(t) } as React.CSSProperties}>
          {t}
        </li>
      ))}
    </ul>
  );
}
