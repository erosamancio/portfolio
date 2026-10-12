"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, FileCode, FileText, FolderOpen, GitBranch, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { contact, defaultMessage, projects, whatsappLink } from "@/content/site";
import styles from "./Shell.module.css";

type Entry = { file: string; href: string; section?: string };

// The site's pages and home sections, presented as the files of a project.
const top: Entry[] = [
  { file: "inicio.tsx", href: "/" },
  { file: "servicos.md", href: "/#servicos", section: "servicos" },
];
const works: Entry[] = projects.map((p) => ({ file: `${p.slug}.md`, href: `/trabalhos/${p.slug}` }));
const rest: Entry[] = [
  { file: "este-site.ts", href: "/#este-site", section: "este-site" },
  { file: "processo.md", href: "/#processo", section: "processo" },
  { file: "perguntas.md", href: "/#perguntas", section: "perguntas" },
  { file: "sobre.md", href: "/sobre", section: "quem-faz" },
  { file: "contato.ts", href: "/#contato", section: "contato" },
];
const sections = [...top, ...rest].flatMap((e) => (e.section ? [e.section] : [])).concat("trabalhos");

function FileIcon({ file }: { file: string }) {
  const Icon = file.endsWith(".md") ? FileText : FileCode;
  return <Icon className={file.endsWith(".md") ? styles.iconMd : styles.iconTs} aria-hidden="true" />;
}

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const els = sections.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.boundingClientRect.top : Infinity);
        const best = [...visible.entries()].filter(([, top]) => top !== Infinity).sort((a, b) => a[1] - b[1])[0];
        setActive(best ? best[0] : null);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const section = useActiveSection(isHome);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const project = projects.find((p) => pathname === `/trabalhos/${p.slug}`);
  const pageFile = isHome ? "inicio.tsx" : pathname === "/sobre" ? "sobre.md" : project ? `${project.slug}.md` : "404";
  const sectionFile =
    section === "trabalhos" ? "trabalhos" : [...top, ...rest].find((e) => e.section === section)?.file;
  const crumbs = ["portfolio", ...(project ? ["trabalhos"] : []), sectionFile ?? pageFile];

  const isCurrent = (e: Entry) =>
    isHome ? (e.section ? e.section === section : e.href === "/" && !section) : e.href === pathname;

  const tabs: Entry[] = [{ file: "inicio.tsx", href: "/" }];
  if (!isHome) tabs.push({ file: pageFile, href: pathname });

  const item = (e: Entry, depth = 1) => (
    <li key={e.file}>
      <Link
        href={e.href}
        className={styles.file}
        style={{ "--depth": depth } as React.CSSProperties}
        aria-current={isCurrent(e) ? "location" : undefined}
        onClick={() => setOpen(false)}
      >
        <FileIcon file={e.file} />
        {e.file}
      </Link>
    </li>
  );

  return (
    <div className={styles.app}>
      <header className={styles.title}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true">
            EA
          </span>
          Eros Amancio
          <span className={styles.repo} aria-hidden="true">
            ~/portfolio
          </span>
        </Link>
        <div className={styles.actions}>
          <a className={styles.whats} href={whatsappLink(defaultMessage)} target="_blank" rel="noopener">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="explorador"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </header>

      <nav id="explorador" className={styles.side} data-open={open} aria-label="Principal">
        <p className={styles.sideTitle}>Explorador</p>
        <ul className={styles.tree}>
          <li>
            <span className={styles.folder}>
              <ChevronDown aria-hidden="true" />
              <FolderOpen aria-hidden="true" />
              portfolio
            </span>
            <ul>
              {top.map((e) => item(e))}
              <li>
                <Link
                  href="/#trabalhos"
                  className={`${styles.file} ${styles.folder}`}
                  style={{ "--depth": 1 } as React.CSSProperties}
                  aria-current={isHome && section === "trabalhos" ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <ChevronDown aria-hidden="true" />
                  <FolderOpen aria-hidden="true" />
                  trabalhos
                </Link>
                <ul>{works.map((e) => item(e, 2))}</ul>
              </li>
              {rest.map((e) => item(e))}
            </ul>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={styles.scrim}
        data-open={open}
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div className={styles.editor}>
        <div className={styles.tabbar}>
          <ul className={styles.tabs} aria-label="Abas abertas">
            {tabs.map((t) => (
              <li key={t.file}>
                {t.file === "404" ? (
                  // No link: prefetching a missing page never settles.
                  <span className={styles.tab} aria-current="page">
                    <FileIcon file={t.file} />
                    {t.file}
                  </span>
                ) : (
                  <Link
                    href={t.href}
                    className={styles.tab}
                    aria-current={t.file === pageFile ? "page" : undefined}
                  >
                    <FileIcon file={t.file} />
                    {t.file}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className={styles.crumbs} aria-hidden="true">
            {crumbs.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </p>
        </div>
        <main id="conteudo" className={styles.main}>
          {children}
        </main>
      </div>

      <footer className={styles.status}>
        <p className={styles.statusLeft}>
          <span className={styles.branch}>
            <GitBranch aria-hidden="true" /> main
          </span>
          <span>Eros Amancio · Recife, PE</span>
        </p>
        <ul className={styles.statusLinks}>
          <li>
            <a href={contact.github} target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <Link href="/sobre">Sobre e experiência</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
