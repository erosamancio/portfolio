"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, LazyMotion, MotionConfig, m } from "motion/react";
import { Braces, Check, ChevronDown, FileCode, FileText, FolderOpen, GitBranch, Mail, Menu, X } from "lucide-react";
import { contact, projects, whatsappUrl } from "@/content/site";
import { WhatsAppIcon } from "./BrandIcons";
import { duration, ease } from "@/motion/tokens";
import { Opening } from "@/motion/Opening";
import styles from "./Shell.module.css";

type Entry = { file: string; href: string; section?: string };

// The site's pages and home sections, presented as the files of a project.
const top: Entry[] = [
  { file: "README.md", href: "/" },
  { file: "sobre.md", href: "/sobre", section: "sobre" },
];
const works: Entry[] = projects.map((p) => ({ file: `${p.slug}.md`, href: `/trabalhos/${p.slug}` }));
const rest: Entry[] = [
  { file: "experiencia.md", href: "/#experiencia", section: "experiencia" },
  { file: "stack.json", href: "/#stack", section: "stack" },
  { file: "este-site.ts", href: "/#este-site", section: "este-site" },
  { file: "contato.ts", href: "/#contato", section: "contato" },
];
const sections = [...top, ...rest].flatMap((e) => (e.section ? [e.section] : [])).concat("trabalhos");

function FileIcon({ file }: { file: string }) {
  if (file.endsWith(".json")) return <Braces className={styles.iconJson} aria-hidden="true" />;
  const Icon = file.endsWith(".md") ? FileText : FileCode;
  return <Icon className={file.endsWith(".md") ? styles.iconMd : styles.iconTs} aria-hidden="true" />;
}

// "Contato" opens a small menu with the two ways to reach Eros, instead of jumping straight to one of them.
function ContactMenu({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div className={styles.contactMenu} ref={root}>
      <button
        type="button"
        className={styles.cta}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          onNavigate();
          setOpen((v) => !v);
        }}
      >
        <Mail aria-hidden="true" />
        <span>Contato</span>
      </button>
      <AnimatePresence>
        {open && (
          <m.ul
            id={id}
            className={styles.menu}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: duration.short, ease: ease.out }}
          >
            <li>
              <a href={`mailto:${contact.email}`} onClick={() => setOpen(false)}>
                <Mail aria-hidden="true" className={styles.menuMail} /> Enviar e-mail
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
                <WhatsAppIcon className={styles.menuWhats} /> Chamar no WhatsApp
              </a>
            </li>
            <li>
              <Link href="/#contato" onClick={() => setOpen(false)}>
                <FileCode aria-hidden="true" className={styles.menuCode} /> Ver contato.ts
              </Link>
            </li>
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
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

  // The status bar's cursor follows the scroll, like a caret moving down a file. It writes to the DOM directly,
  // so scrolling never re-renders the page.
  const pos = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ln = 1 + Math.floor(window.scrollY / 24);
      const col = 1 + Math.round((window.scrollY / max) * 79);
      if (pos.current) pos.current.textContent = `Ln ${ln}, Col ${col}`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const project = projects.find((p) => pathname === `/trabalhos/${p.slug}`);
  const pageFile = isHome ? "README.md" : pathname === "/sobre" ? "sobre.md" : project ? `${project.slug}.md` : "404";
  const sectionFile =
    section === "trabalhos" ? "trabalhos" : [...top, ...rest].find((e) => e.section === section)?.file;
  const crumbs = ["portfolio", ...(project ? ["trabalhos"] : []), sectionFile ?? pageFile];

  const isCurrent = (e: Entry) =>
    isHome ? (e.section ? e.section === section : e.href === "/" && !section) : e.href === pathname;

  const tabs: Entry[] = [{ file: "README.md", href: "/" }];
  if (!isHome) tabs.push({ file: pageFile, href: pathname });

  const activeBar = (
    <m.span
      layoutId="explorer-active"
      className={styles.activeBar}
      transition={{ duration: duration.base, ease: ease.out }}
      aria-hidden="true"
    />
  );

  const item = (e: Entry, depth = 1) => (
    <li key={e.file}>
      <Link
        href={e.href}
        className={styles.file}
        data-i="tree"
        style={{ "--depth": depth } as React.CSSProperties}
        aria-current={isCurrent(e) ? "location" : undefined}
        onClick={() => setOpen(false)}
      >
        {isCurrent(e) && activeBar}
        <FileIcon file={e.file} />
        {e.file}
      </Link>
    </li>
  );

  return (
    <LazyMotion features={() => import("@/motion/features").then((mod) => mod.default)} strict>
      <MotionConfig reducedMotion="user">
        <div className={styles.app}>
          <Opening />
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
              <ContactMenu onNavigate={() => setOpen(false)} />
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
                <span className={styles.folder} data-i="tree">
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
                      data-i="tree"
                      style={{ "--depth": 1 } as React.CSSProperties}
                      aria-current={isHome && section === "trabalhos" ? "location" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {isHome && section === "trabalhos" && activeBar}
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
                <AnimatePresence initial={false} mode="popLayout">
                  {tabs.map((t) => (
                    <m.li
                      key={t.file}
                      layout="position"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: duration.short, ease: ease.out }}
                    >
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
                          data-i="tab"
                          aria-current={t.file === pageFile ? "page" : undefined}
                        >
                          <FileIcon file={t.file} />
                          {t.file}
                        </Link>
                      )}
                    </m.li>
                  ))}
                </AnimatePresence>
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
              <span ref={pos} className={styles.pos} aria-hidden="true">
                Ln 1, Col 1
              </span>
              <span data-build="" className={styles.build}>
                <Check aria-hidden="true" /> pronto
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
      </MotionConfig>
    </LazyMotion>
  );
}
