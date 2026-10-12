"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { defaultMessage, whatsappLink } from "@/content/site";
import styles from "./SiteNav.module.css";

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#trabalhos", label: "Trabalhos" },
  { href: "/#processo", label: "Como eu trabalho" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.bar}>
      <nav className={styles.inner} aria-label="Principal">
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true">EA</span>
          Eros Amancio
        </Link>

        <ul id="menu" className={styles.links} data-open={open}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a className={styles.whats} href={whatsappLink(defaultMessage)} target="_blank" rel="noopener">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
