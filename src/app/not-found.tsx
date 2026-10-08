import Link from "next/link";
import { Tile } from "@/components/tiles/Tile";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.wall} aria-hidden="true">
        {Array.from({ length: 9 }, (_, i) =>
          i === 4 ? <span key={i} className={styles.gap} /> : <Tile key={i} turns={[2, 3, 2, 1, 0, 1, 2, 3, 2][i]} />,
        )}
      </div>
      <h1 className={styles.title}>Faltou um azulejo aqui.</h1>
      <p>Essa página não existe ou mudou de lugar.</p>
      <Link href="/" className={styles.home}>
        Voltar para o início
      </Link>
    </section>
  );
}
