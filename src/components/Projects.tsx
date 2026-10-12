import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Component, Lock } from "lucide-react";
import { projects, tags, type Project, type Tag } from "@/content/site";
import code from "./code.module.css";
import styles from "./Projects.module.css";

type Props = { filter: Tag | null; onFilter: (tag: Tag | null) => void };

function Preview({ project }: { project: Project }) {
  const href = `/trabalhos/${project.slug}`;
  if (project.image) {
    return (
      <Link href={href} className={styles.shot} tabIndex={-1} aria-hidden="true">
        <span className={styles.shotBar}>{project.image.src.split("/").pop()}</span>
        <Image
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt=""
          sizes="(min-width: 90rem) 37rem, (min-width: 72rem) 40vw, (min-width: 64rem) calc(100vw - 22rem), (min-width: 56rem) 50vw, 92vw"
        />
      </Link>
    );
  }
  // No screenshots exist for this project by agreement, so it shows its structure instead.
  return (
    <div className={`${code.panel} ${styles.structure}`}>
      <p className={code.head}>
        <Component aria-hidden="true" /> componentes
      </p>
      <ul className={styles.components}>
        {project.structure?.map((c) => (
          <li key={c}>
            <span className={code.ty}>{`<${c} />`}</span>
          </li>
        ))}
      </ul>
      {project.closedSource && (
        <p className={styles.closed}>
          <Lock aria-hidden="true" /> {project.closedSource}
        </p>
      )}
    </div>
  );
}

export function Projects({ filter, onFilter }: Props) {
  const count = (t: Tag) => projects.filter((p) => p.tags.includes(t)).length;
  let order = 0;
  const shown = filter ? projects.filter((p) => p.tags.includes(filter)).length : projects.length;

  return (
    <section id="trabalhos" className={styles.section} aria-labelledby="trabalhos-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="trabalhos-title" className={styles.h2}>
            <span className="hash" aria-hidden="true">
              #
            </span>
            Projetos
          </h2>
          <div className={styles.filter} role="group" aria-label="Filtrar por tecnologia">
            <span className={styles.filterLabel} aria-hidden="true">
              filtro:
            </span>
            <button
              type="button"
              className={styles.option}
              aria-pressed={filter === null}
              onClick={() => onFilter(null)}
            >
              todos <span className={styles.count}>{projects.length}</span>
            </button>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                className={styles.option}
                aria-pressed={filter === t}
                onClick={() => onFilter(filter === t ? null : t)}
              >
                {t} <span className={styles.count}>{count(t)}</span>
              </button>
            ))}
          </div>
          <p className={styles.status} aria-live="polite">
            {filter ? `${shown} de ${projects.length} projetos usam ${filter}` : `${projects.length} projetos`}
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((p) => {
            const visible = !filter || p.tags.includes(filter);
            if (visible) order++;
            return (
              <article
                key={p.slug}
                className={styles.work}
                hidden={!visible}
                data-flip={visible && order % 2 === 0 ? "" : undefined}
              >
                <Preview project={p} />
                <div className={styles.text}>
                  <h3 className={styles.h3}>
                    <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p className={styles.meta}>
                    {p.context} · {p.role}
                  </p>
                  <p className={styles.summary}>{p.summary}</p>
                  <ul className={styles.tags} aria-label="Tecnologias">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link href={`/trabalhos/${p.slug}`} className={styles.more}>
                    Ler estudo de caso <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
