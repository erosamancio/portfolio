import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Component, Lock } from "lucide-react";
import { FilterChips } from "./FilterChips";
import { TechLine } from "./TechLine";
import { compactSlugs, featuredSlugs, projects, techColor, type Project } from "@/content/site";
import { ProjectsMotion } from "@/motion/ProjectsMotion";
import code from "./code.module.css";
import styles from "./Projects.module.css";

const bySlug = (slugs: string[]) =>
  slugs.flatMap((slug) => {
    const project = projects.find((p) => p.slug === slug);
    return project ? [project] : [];
  });

function Hunk({ slug }: { slug: string }) {
  return (
    <p className={styles.hunk} aria-hidden="true" data-only="code">
      <span>+</span> trabalhos/{slug}.md
    </p>
  );
}

/** Sociiz Meet has no screenshots by agreement, so in the code view it shows its structure instead. */
function ClosedProject({ project }: { project: Project }) {
  return (
    <article className={styles.work} data-tags={project.tags.join(" ")} data-only="code">
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
      <div className={styles.text}>
        <Hunk slug={project.slug} />
        <h3 className={styles.h3}>
          <Link href={`/trabalhos/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className={styles.meta}>
          {project.context} · {project.role}
        </p>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={styles.tags} aria-label="Tecnologias">
          {project.stack.map((t) => (
            <li key={t} style={{ "--tech": techColor(t) } as React.CSSProperties}>
              {t}
            </li>
          ))}
        </ul>
        <Link href={`/trabalhos/${project.slug}`} className={styles.more}>
          Ler o estudo de caso <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function Shot({ project, sizes, tall }: { project: Project; sizes: string; tall?: boolean }) {
  if (!project.image) return null;
  return (
    <Link
      href={`/trabalhos/${project.slug}`}
      className={styles.shot}
      data-reveal=""
      data-tall={tall && project.image.height > project.image.width ? "" : undefined}
      tabIndex={-1}
      aria-hidden="true"
    >
      <span className={styles.shotBar} data-only="code">
        {project.image.src.split("/").pop()}
      </span>
      <Image src={project.image.src} width={project.image.width} height={project.image.height} alt="" sizes={sizes} />
    </Link>
  );
}

export function Projects() {
  const featured = bySlug(featuredSlugs);
  const compact = bySlug(compactSlugs);
  const sociiz = projects.find((p) => p.structure);

  return (
    <section id="trabalhos" className={styles.section} aria-labelledby="trabalhos-title">
      <ProjectsMotion />
      <div className="wrap">
        <h2 id="trabalhos-title" className={styles.h2}>
          <span className="hash" aria-hidden="true">
            #
          </span>
          Projetos
        </h2>
        <div data-only="code">
          <FilterChips variant="bar" />
        </div>

        <div className={styles.list}>
          {sociiz && <ClosedProject project={sociiz} />}
          {featured.map((p, i) => (
            <article
              key={p.slug}
              className={styles.work}
              data-tags={p.tags.join(" ")}
              data-diff=""
              data-flip={i % 2 === 1 ? "" : undefined}
            >
              <Shot
                project={p}
                tall
                sizes="(min-width: 90rem) 37rem, (min-width: 72rem) 40vw, (min-width: 64rem) calc(100vw - 22rem), (min-width: 56rem) 50vw, 92vw"
              />
              <div className={styles.text}>
                <Hunk slug={p.slug} />
                <h3 className={styles.h3}>
                  <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className={styles.meta}>
                  {p.context} · {p.role}
                </p>
                <p className={styles.summary}>{p.summary}</p>
                <TechLine items={p.mainStack} />
                <Link href={`/trabalhos/${p.slug}`} className={styles.more}>
                  Ler o estudo de caso <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <ul className={styles.compact}>
          {compact.map((p) => (
            <li key={p.slug} className={styles.small} data-tags={p.tags.join(" ")} data-diff="">
              <Shot project={p} sizes="(min-width: 56rem) 24rem, 92vw" />
              <Hunk slug={p.slug} />
              <h3 className={styles.h4}>
                <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
              </h3>
              <p className={styles.meta}>{p.context}</p>
              <p className={styles.summary}>{p.summary}</p>
              <TechLine items={p.mainStack} />
              <Link href={`/trabalhos/${p.slug}`} className={styles.more}>
                Ler o estudo de caso <ArrowRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
