import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GitHubIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { defaultMessage, projects, whatsappLink } from "@/content/site";
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
    openGraph: { title: `${project.name} · Eros Amancio`, description: project.summary, images: [project.image.src] },
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
          <ArrowLeft aria-hidden="true" /> Todos os trabalhos
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
      </div>

      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <a className={styles.whats} href={whatsappLink(defaultMessage)} target="_blank" rel="noopener">
            <WhatsAppIcon /> Quero um site assim
          </a>
          <Link href={`/trabalhos/${next.slug}`} className={styles.next}>
            Próximo: {next.name} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </article>
  );
}
