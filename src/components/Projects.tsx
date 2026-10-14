import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { compactSlugs, featuredSlugs, projects, techColor, type Project } from "@/content/site";
import { ProjectsMotion } from "@/motion/ProjectsMotion";
import styles from "./Projects.module.css";

const bySlug = (slugs: string[]) =>
  slugs.flatMap((slug) => {
    const project = projects.find((p) => p.slug === slug);
    return project ? [project] : [];
  });

/** Up to three technologies, as quiet text with a small color dot. */
function TechLine({ items }: { items: string[] }) {
  return (
    <ul className={styles.tech} aria-label="Tecnologias" data-reveal="">
      {items.map((t) => (
        <li key={t} style={{ "--tech": techColor(t) } as React.CSSProperties}>
          {t}
        </li>
      ))}
    </ul>
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
      <Image src={project.image.src} width={project.image.width} height={project.image.height} alt="" sizes={sizes} />
    </Link>
  );
}

export function Projects() {
  const featured = bySlug(featuredSlugs);
  const compact = bySlug(compactSlugs);

  return (
    <section id="trabalhos" className={styles.section} aria-labelledby="trabalhos-title">
      <ProjectsMotion />
      <div className="wrap">
        <h2 id="trabalhos-title" className={styles.h2} data-m="title">
          <span className="hash" aria-hidden="true" data-hash="">
            #
          </span>
          <span data-title-text="">Projetos</span>
        </h2>

        <div className={styles.list}>
          {featured.map((p, i) => (
            <article key={p.slug} className={styles.work} data-diff="" data-flip={i % 2 === 1 ? "" : undefined}>
              <Shot
                project={p}
                tall
                sizes="(min-width: 90rem) 37rem, (min-width: 72rem) 40vw, (min-width: 64rem) calc(100vw - 22rem), (min-width: 56rem) 50vw, 92vw"
              />
              <div className={styles.text}>
                <h3 className={styles.h3} data-reveal="">
                  <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className={styles.meta} data-reveal="">
                  {p.context} · {p.role}
                </p>
                <p className={styles.summary} data-reveal="">
                  {p.summary}
                </p>
                <TechLine items={p.mainStack} />
                <Link href={`/trabalhos/${p.slug}`} className={styles.more} data-reveal="">
                  Ler o estudo de caso <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <ul className={styles.compact}>
          {compact.map((p) => (
            <li key={p.slug} className={styles.small} data-diff="">
              <Shot project={p} sizes="(min-width: 56rem) 24rem, 92vw" />
              <h3 className={styles.h4} data-reveal="">
                <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
              </h3>
              <p className={styles.meta} data-reveal="">
                {p.context}
              </p>
              <p className={styles.summary} data-reveal="">
                {p.summary}
              </p>
              <TechLine items={p.mainStack} />
              <Link href={`/trabalhos/${p.slug}`} className={styles.more} data-reveal="">
                Ler o estudo de caso <ArrowRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
