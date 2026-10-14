import { Braces, FileCode } from "lucide-react";
import { skills } from "@/content/site";
import { excerpt } from "@/content/source";
import code from "./code.module.css";
import styles from "./CodeSections.module.css";

/** stack.json: the technologies as a JSON file. Shown only in the code view. */
export function StackPanel() {
  return (
    <figure className={`${code.panel} ${styles.json}`}>
      <figcaption className={code.head}>
        <Braces aria-hidden="true" /> stack.json
      </figcaption>
      <div className={code.body}>
        <p className={code.row} aria-hidden="true">
          <span className={code.ln}>1</span>
          <span className={code.text}>{"{"}</span>
        </p>
        <ul className={styles.skillList} data-m="rows">
          {skills.map((s, i) => (
            <li key={s.group} className={code.row}>
              <span className={code.ln} aria-hidden="true">
                {i + 2}
              </span>
              <span className={code.text}>
                {"  "}
                <span className={code.ty} data-tok="">
                  <span aria-hidden="true">“</span>
                  {s.group}
                  <span aria-hidden="true">”</span>
                </span>
                <span aria-hidden="true">: [</span>
                <span className="sr-only">: </span>
                <span>
                  {s.items.map((item, j) => (
                    <span key={item}>
                      <span className={code.st} data-tok="">
                        “{item}”
                      </span>
                      {j < s.items.length - 1 && <span aria-hidden="true">, </span>}
                    </span>
                  ))}
                </span>
                <span aria-hidden="true">]{i < skills.length - 1 ? "," : ""}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className={code.row} aria-hidden="true">
          <span className={code.ln}>{skills.length + 2}</span>
          <span className={code.text}>{"}"}</span>
        </p>
      </div>
    </figure>
  );
}

/** The real useActiveSection hook, read from the source at build time. */
export function SiteSnippet() {
  const hook = excerpt("components/Shell.tsx", "useActiveSection");
  return (
    <figure className={`${code.panel} ${styles.snippet}`}>
      <figcaption className={code.head}>
        <FileCode aria-hidden="true" /> {hook.file}
      </figcaption>
      <pre className={`${code.body} ${styles.scroll}`} tabIndex={0} aria-label={`Trecho de ${hook.file}`}>
        <code data-m="reading">
          {hook.lines.map((line, i) => (
            <span key={i} className={code.row}>
              <span className={code.ln} aria-hidden="true">
                {hook.start + i}
              </span>
              <span className={`${code.text} ${code.keep}`}>
                {line.map(([kind, text], j) =>
                  kind ? (
                    <span key={j} className={code[kind]}>
                      {text}
                    </span>
                  ) : (
                    text
                  ),
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}

type Row = { key: string; label: string; href: string };

/** contato.ts: the contact details as an exported object. Shown only in the code view. */
export function ContactPanel({ rows }: { rows: Row[] }) {
  return (
    <div className={`${code.panel} ${styles.contactPanel}`} data-only="code">
      <p className={code.head} aria-hidden="true">
        <FileCode /> contato.ts
      </p>
      <div className={code.body} data-m="terminal">
        <p className={styles.prompt} aria-hidden="true" data-prompt="">
          <span>~/portfolio</span> $ npm run contato
        </p>
        <p className={code.row} aria-hidden="true">
          <span className={code.ln}>1</span>
          <span className={code.text}>
            <span className={code.kw}>export const</span> contato = {"{"}
          </span>
        </p>
        <ul className={styles.panelList}>
          {rows.map((r, i) => (
            <li key={r.key} className={code.row}>
              <span className={code.ln} aria-hidden="true">
                {i + 2}
              </span>
              <span className={code.text}>
                {"  "}
                <span className={code.ty}>{r.key}</span>
                <span aria-hidden="true">: </span>
                <a
                  className={styles.panelLink}
                  href={r.href}
                  {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                >
                  <span aria-hidden="true">“</span>
                  {r.label}
                  <span aria-hidden="true">”</span>
                </a>
                <span aria-hidden="true">,</span>
              </span>
            </li>
          ))}
        </ul>
        <p className={code.row} aria-hidden="true">
          <span className={code.ln}>{rows.length + 2}</span>
          <span className={code.text}>{"};"}</span>
        </p>
      </div>
    </div>
  );
}
