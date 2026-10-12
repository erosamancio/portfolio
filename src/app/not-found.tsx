import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <p className={styles.code}>
        <span className={styles.status}>404</span> GET <span className={styles.path}>esta página</span>
      </p>
      <h1 className={styles.title}>Essa página não existe.</h1>
      <p>Ela pode ter mudado de lugar, ou o link veio com um erro de digitação.</p>
      <Link href="/" className={styles.home}>
        Voltar para o início
      </Link>
    </section>
  );
}
