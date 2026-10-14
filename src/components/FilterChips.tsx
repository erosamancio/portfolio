"use client";

import { projects, tags, techColor, type Tag } from "@/content/site";
import { setProjectFilter, useProjectFilter } from "./projectFilter";
import styles from "./FilterChips.module.css";

const count = (t: Tag) => projects.filter((p) => p.tags.includes(t)).length;

type Props = {
  /** "bar" is the filter above the project list; "chips" are the buttons inside the perfil.ts panel. */
  variant: "bar" | "chips";
};

export function FilterChips({ variant }: Props) {
  const filter = useProjectFilter();
  const pick = (t: Tag) => {
    const next = filter === t ? null : t;
    setProjectFilter(next);
    // Choosing from the profile panel at the top takes the reader to the narrowed list.
    if (next && variant === "chips") document.getElementById("trabalhos")?.scrollIntoView({ block: "start" });
  };

  if (variant === "chips")
    return (
      <div className={styles.chips} role="group" aria-label="Filtrar projetos por tecnologia">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={styles.tag}
            style={{ "--tech": techColor(t) } as React.CSSProperties}
            aria-pressed={filter === t}
            onClick={() => pick(t)}
          >
            “{t}”
          </button>
        ))}
      </div>
    );

  const shown = filter ? projects.filter((p) => p.tags.includes(filter)).length : projects.length;
  return (
    <div className={styles.bar}>
      <div className={styles.filter} role="group" aria-label="Filtrar por tecnologia">
        <span className={styles.filterLabel} aria-hidden="true">
          filtro:
        </span>
        <button
          type="button"
          className={styles.option}
          aria-pressed={filter === null}
          onClick={() => setProjectFilter(null)}
        >
          todos <span className={styles.count}>{projects.length}</span>
        </button>
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={styles.option}
            style={{ "--tech": techColor(t) } as React.CSSProperties}
            aria-pressed={filter === t}
            onClick={() => pick(t)}
          >
            {t} <span className={styles.count}>{count(t)}</span>
          </button>
        ))}
      </div>
      <p className={styles.status} aria-live="polite">
        {filter ? `${shown} de ${projects.length} projetos usam ${filter}` : `${projects.length} projetos`}
      </p>
    </div>
  );
}
