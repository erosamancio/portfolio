import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Component, Lock } from "lucide-react";
import { projects, tags, techColor, type Project, type Tag } from "@/content/site";
import code from "./code.module.css";
import { duration, ease, MOBILE_QUERY } from "@/motion/tokens";
import { gsap, ScrollTrigger, useGSAP } from "@/motion/gsap";
import styles from "./Projects.module.css";

type Props = { filter: Tag | null; onFilter: (tag: Tag | null) => void };

function Preview({ project }: { project: Project }) {
  const href = `/trabalhos/${project.slug}`;
  if (project.image) {
    return (
      <Link
        href={href}
        className={styles.shot}
        data-reveal=""
        data-tall={project.image.height > project.image.width ? "" : undefined}
        tabIndex={-1}
        aria-hidden="true"
      >
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
    <div className={`${code.panel} ${styles.structure}`} data-reveal="">
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

/** Each project reads like a hunk of a diff: it is "added" as it scrolls into view. */
function useDiffReveal(root: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)", mobile: MOBILE_QUERY },
        (ctx) => {
          const { motion, mobile } = ctx.conditions as { motion: boolean; mobile: boolean };
          if (!motion) return;
          const items = gsap.utils.toArray<HTMLElement>("[data-diff]");
          const parts = (el: Element) => el.querySelectorAll("[data-reveal]");

          // Only what is still below the fold starts hidden, so nothing flashes on load.
          items.forEach((el) => {
            if (el.getBoundingClientRect().top > window.innerHeight * 0.9) gsap.set(parts(el), { opacity: 0 });
          });

          ScrollTrigger.batch(items, {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              batch.forEach((el, i) => {
                const [media, ...text] = parts(el);
                const tl = gsap.timeline({ delay: i * 0.1, defaults: { ease: "expo.out" } });
                if (media)
                  tl.fromTo(
                    media,
                    mobile ? { opacity: 0, y: 14 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" },
                    mobile
                      ? { opacity: 1, y: 0, duration: 0.5 }
                      : { opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.8 },
                    0,
                  );
                if (text.length)
                  tl.fromTo(text, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, 0.15);
                tl.set([media, ...text].filter(Boolean), { clearProps: "all" });
              });
            },
          });
        },
        root,
      );
      return () => mm.revert();
    },
    { scope: root },
  );
}

export function Projects({ filter, onFilter }: Props) {
  const section = useRef<HTMLElement>(null);
  useDiffReveal(section);
  // Filtering moves everything below the list; the scroll triggers measure again once the layout settles.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => clearTimeout(t);
  }, [filter]);
  const count = (t: Tag) => projects.filter((p) => p.tags.includes(t)).length;
  let order = 0;
  const shown = filter ? projects.filter((p) => p.tags.includes(filter)).length : projects.length;

  return (
    <section id="trabalhos" ref={section} className={styles.section} aria-labelledby="trabalhos-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="trabalhos-title" className={styles.h2} data-m="title">
            <span className="hash" aria-hidden="true" data-hash="">
              #
            </span>
            <span data-title-text="">Projetos</span>
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
                style={{ "--tech": techColor(t) } as React.CSSProperties}
                aria-pressed={filter === t}
                onClick={() => onFilter(filter === t ? null : t)}
              >
                {t} <span className={styles.count}>{count(t)}</span>
              </button>
            ))}
          </div>
          <div className={styles.status} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={filter ?? "todos"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: duration.short, ease: ease.out }}
              >
                {filter ? `${shown} de ${projects.length} projetos usam ${filter}` : `${projects.length} projetos`}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.list}>
          <AnimatePresence mode="popLayout" initial={false}>
            {projects.map((p) => {
              if (filter && !p.tags.includes(filter)) return null;
              order++;
              return (
                <motion.article
                  key={p.slug}
                  layout="position"
                  className={styles.work}
                  data-diff=""
                  data-flip={order % 2 === 0 ? "" : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: duration.base, ease: ease.out }}
                >
                  <Preview project={p} />
                  <div className={styles.text}>
                    <p className={styles.hunk} data-reveal="" aria-hidden="true">
                      <span>+</span> trabalhos/{p.slug}.md
                    </p>
                    <h3 className={styles.h3} data-reveal="">
                      <Link href={`/trabalhos/${p.slug}`}>{p.name}</Link>
                    </h3>
                    <p className={styles.meta} data-reveal="">
                      {p.context} · {p.role}
                    </p>
                    <p className={styles.summary} data-reveal="">
                      {p.summary}
                    </p>
                    <ul className={styles.tags} aria-label="Tecnologias" data-reveal="">
                      {p.stack.map((t) => (
                        <li key={t} style={{ "--tech": techColor(t) } as React.CSSProperties}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/trabalhos/${p.slug}`} className={styles.more} data-reveal="">
                      Ler estudo de caso <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
