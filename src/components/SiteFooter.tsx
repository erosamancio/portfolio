import Link from "next/link";
import { contact } from "@/content/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.name}>Eros Amancio · Recife, PE</p>
        <ul className={styles.links}>
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
      </div>
    </footer>
  );
}
