import { useEffect, useState } from "react";
import { ArrowDown, FileCode } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import { contact, tags, type Tag } from "@/content/site";
import code from "./code.module.css";
import styles from "./Hero.module.css";

/** The profile panel types itself once per visit; coming back to the home page shows it at rest. */
let played = false;

type Props = { filter: Tag | null; onFilter: (tag: Tag) => void };

function Str({ children }: { children: React.ReactNode }) {
  return <span className={code.st}>“{children}”</span>;
}

export function Hero({ filter, onFilter }: Props) {
  const [typing] = useState(() => !played);
  useEffect(() => {
    played = true;
  }, []);
  // The profile panel's rows; the stack row is interactive and rendered on its own.
  const before: [string, React.ReactNode][] = [
    ["formacao", <Str key="f">Ciência da Computação, CESAR School, 4º período</Str>],
    ["estagio", <Str key="e">Sociiz: backend, OCR e videoconferência</Str>],
  ];
  const after: [string, React.ReactNode][] = [
    [
      "idiomas",
      <span key="i">
        [<Str>português</Str>, <Str>inglês fluente</Str>]
      </span>,
    ],
    ["cidade", <Str key="c">Recife, PE</Str>],
  ];
  let line = 1;
  const lineStyle = (n: number) => (typing ? ({ "--i": n } as React.CSSProperties) : undefined);
  const row = (content: React.ReactNode, key: string, extra?: string) => (
    <p key={key} className={`${code.row} ${typing ? styles.line : ""} ${extra ?? ""}`} style={lineStyle(line)}>
      <span className={code.ln} aria-hidden="true">
        {line++}
      </span>
      <span className={code.text}>{content}</span>
    </p>
  );
  const prop = ([k, v]: [string, React.ReactNode]) =>
    row(
      <>
        {"  "}
        <span className={code.ty}>{k}</span>: {v},
      </>,
      k,
    );

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.intro}>
          <h1 id="hero-title" className={styles.title}>
            Eros{" "}
            <span className={styles.last}>
              Amancio
              <span className={styles.caret} aria-hidden="true" />
            </span>
          </h1>
          <p className={styles.role}>Desenvolvedor · Recife, PE</p>
          <p className={styles.lede}>
            Estudo Ciência da Computação na CESAR School e estagio na Sociiz, onde trabalho do frontend ao backend: a
            interface de videoconferência da empresa em React, o serviço de tokens em Flask e um pipeline de OCR em
            Python.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#trabalhos">
              Ver projetos <ArrowDown aria-hidden="true" />
            </a>
            <a className={styles.secondary} href={contact.github} target="_blank" rel="noopener">
              <GitHubIcon /> GitHub
            </a>
            <a className={styles.secondary} href={contact.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>

        <div className={`${code.panel} ${styles.profile}`}>
          <p className={code.head} aria-hidden="true">
            <FileCode /> perfil.ts
          </p>
          <div className={code.body}>
            {row(
              <>
                <span className={code.kw}>export const</span> eros = {"{"}
              </>,
              "open",
            )}
            {before.map(prop)}
            {row(<span className={code.cm}>{"  // escolha uma tecnologia para filtrar os projetos"}</span>, "hint")}
            {row(
              <>
                {"  "}
                <span className={code.ty}>tecnologias</span>: [
              </>,
              "stack-open",
            )}
            <div
              className={`${code.row} ${typing ? styles.line : ""}`}
              style={lineStyle(line)}
              role="group"
              aria-label="Filtrar projetos por tecnologia"
            >
              <span className={code.ln} aria-hidden="true">
                {line++}
              </span>
              <div className={styles.stack}>
                {tags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={styles.tag}
                    aria-pressed={filter === t}
                    onClick={() => onFilter(t)}
                  >
                    “{t}”
                  </button>
                ))}
              </div>
            </div>
            {row("  ],", "stack-close")}
            {after.map(prop)}
            {row("};", "close")}
          </div>
        </div>
      </div>
    </section>
  );
}
