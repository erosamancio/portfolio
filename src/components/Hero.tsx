import { ArrowDown, FileCode } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons";
import { contact, tags, techColor, whatsappUrl, type Tag } from "@/content/site";
import code from "./code.module.css";
import styles from "./Hero.module.css";

type Props = { filter: Tag | null; onFilter: (tag: Tag) => void };

function Str({ children }: { children: React.ReactNode }) {
  return (
    <span className={code.st} data-tok="">
      “{children}”
    </span>
  );
}

export function Hero({ filter, onFilter }: Props) {
  // The profile panel's rows; the stack row is interactive and rendered on its own.
  const before: [string, React.ReactNode][] = [
    ["formacao", <Str key="f">Ciência da Computação, CESAR School, 4º período</Str>],
    ["estagio", <Str key="e">Sociiz: backend, leitura de documentos e videoconferência</Str>],
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
  const row = (content: React.ReactNode, key: string, extra?: string) => (
    <p key={key} className={`${code.row} ${extra ?? ""}`} data-i="row">
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
        <span className={code.ty} data-tok="">
          {k}
        </span>
        : {v},
      </>,
      k,
    );

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.intro}>
          <h1 id="hero-title" className={styles.title} data-i="name">
            Eros{" "}
            <span className={styles.last}>
              Amancio
              <span className={styles.caret} aria-hidden="true" />
            </span>
          </h1>
          <p className={styles.role} data-i="text">
            Desenvolvedor · Recife, PE
          </p>
          <p className={styles.lede} data-i="text">
            Estudo Ciência da Computação na CESAR School, no 4º período, e faço estágio na Sociiz. Trabalho nas duas
            pontas de um sistema: as telas que as pessoas usam e a parte que roda por trás delas, em Python, Java e
            React.
          </p>
          <div className={styles.actions} data-i="actions">
            <a className={styles.primary} href="#trabalhos">
              Ver projetos <ArrowDown aria-hidden="true" />
            </a>
            <a className={styles.secondary} href={contact.github} target="_blank" rel="noopener">
              <GitHubIcon className={styles.iconGithub} /> GitHub
            </a>
            <a className={styles.secondary} href={contact.linkedin} target="_blank" rel="noopener">
              <LinkedInIcon className={styles.iconLinkedin} /> LinkedIn
            </a>
            <a className={styles.secondary} href={whatsappUrl} target="_blank" rel="noopener">
              <WhatsAppIcon className={styles.iconWhatsapp} /> WhatsApp
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
                <span className={code.kw} data-tok="">
                  export const
                </span>{" "}
                eros = {"{"}
              </>,
              "open",
            )}
            {before.map(prop)}
            {row(<span className={code.cm}>{"  // escolha uma tecnologia para filtrar os projetos"}</span>, "hint")}
            {row(
              <>
                {"  "}
                <span className={code.ty} data-tok="">
                  tecnologias
                </span>
                : [
              </>,
              "stack-open",
            )}
            <div className={code.row} data-i="row" role="group" aria-label="Filtrar projetos por tecnologia">
              <span className={code.ln} aria-hidden="true">
                {line++}
              </span>
              <div className={styles.stack}>
                {tags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={styles.tag}
                    style={{ "--tech": techColor(t) } as React.CSSProperties}
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
