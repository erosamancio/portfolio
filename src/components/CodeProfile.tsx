import { FileCode } from "lucide-react";
import { FilterChips } from "./FilterChips";
import code from "./code.module.css";
import styles from "./CodeProfile.module.css";

function Str({ children }: { children: React.ReactNode }) {
  return (
    <span className={code.st} data-tok="">
      “{children}”
    </span>
  );
}

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

/** perfil.ts, shown only in the code view: the profile as a source file, with the filter for the project list. */
export function CodeProfile() {
  let line = 1;
  const row = (content: React.ReactNode, key: string) => (
    <p key={key} className={code.row} data-i="row">
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
    <div className={`${code.panel} ${styles.profile}`} data-only="code">
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
        <div className={code.row} data-i="row">
          <span className={code.ln} aria-hidden="true">
            {line++}
          </span>
          <FilterChips variant="chips" />
        </div>
        {row("  ],", "stack-close")}
        {after.map(prop)}
        {row("};", "close")}
      </div>
    </div>
  );
}
