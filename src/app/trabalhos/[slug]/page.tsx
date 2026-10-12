import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Component, Lock, Mail, Send } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { contact, projects } from "@/content/site";
import code from "@/components/code.module.css";
import styles from "./case.module.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/trabalhos/${project.slug}` },
    openGraph: {
      title: `${project.name} · Eros Amancio`,
      description: project.summary,
      ...(project.image ? { images: [project.image.src] } : {}),
    },
  };
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className={styles.case}>
      <header className={`wrap ${styles.header}`}>
        <Link href="/#trabalhos" className={styles.back}>
          <ArrowLeft aria-hidden="true" /> Todos os projetos
        </Link>
        <h1 className={styles.title}>
          <span className="hash" aria-hidden="true">
            #
          </span>
          {project.name}
        </h1>
        <p className={styles.summary}>{project.summary}</p>
        <dl className={styles.facts}>
          <div>
            <dt>contexto:</dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt>papel:</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>tecnologias:</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
        </dl>
      </header>

      {project.image ? (
        <figure className={`wrap ${styles.figure}`}>
          <figcaption className={styles.figureBar} aria-hidden="true">
            {project.image.src.split("/").pop()}
          </figcaption>
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            sizes="(min-width: 80rem) 70rem, 100vw"
            priority
          />
        </figure>
      ) : (
        <div className={`wrap ${styles.panels}`}>
          {project.structure && (
            <figure className={code.panel}>
              <figcaption className={code.head}>
                <Component aria-hidden="true" /> componentes
              </figcaption>
              <ul className={styles.components}>
                {project.structure.map((c) => (
                  <li key={c}>
                    <span className={code.ty}>{`<${c} />`}</span>
                  </li>
                ))}
              </ul>
            </figure>
          )}
          {project.endpoint && (
            <figure className={code.panel}>
              <figcaption className={code.head}>
                <Send aria-hidden="true" /> serviço de tokens · Flask
              </figcaption>
              <div className={code.body}>
                <p className={code.row}>
                  <span className={code.ln} aria-hidden="true">
                    1
                  </span>
                  <span className={code.text}>
                    <span className={code.kw}>{project.endpoint.request.split(" ")[0]}</span>{" "}
                    <span className={code.st}>{project.endpoint.request.split(" ")[1]}</span>
                  </span>
                </p>
                <p className={code.row} aria-hidden="true">
                  <span className={code.ln}>2</span>
                </p>
                <p className={code.row}>
                  <span className={code.ln} aria-hidden="true">
                    3
                  </span>
                  <span className={`${code.text} ${code.cm}`}>{`// ${project.endpoint.note}`}</span>
                </p>
                <p className={code.row}>
                  <span className={code.ln} aria-hidden="true">
                    4
                  </span>
                  <span className={code.text}>
                    {project.endpoint.values.map((v, i) => (
                      <span key={v}>
                        <span className={code.ty}>{v}</span>
                        {i < project.endpoint!.values.length - 1 && " · "}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </figure>
          )}
        </div>
      )}

      <div className={`wrap ${styles.body}`}>
        {project.body.map((b) => (
          <section key={b.heading} className={styles.block}>
            <h2 className={styles.blockTitle}>
              <span className="hash" aria-hidden="true">
                ##
              </span>
              {b.heading}
            </h2>
            <p>{b.text}</p>
          </section>
        ))}
        {project.repo && (
          <a className={styles.repo} href={project.repo} target="_blank" rel="noopener">
            <GitHubIcon /> Ver o código no GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        )}
        {project.closedSource && (
          <p className={styles.closed}>
            <Lock aria-hidden="true" /> {project.closedSource}
          </p>
        )}
      </div>

      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <a className={styles.mailCta} href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" /> Falar sobre este projeto
          </a>
          <Link href={`/trabalhos/${next.slug}`} className={styles.next}>
            Próximo: {next.name} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </article>
  );
}
