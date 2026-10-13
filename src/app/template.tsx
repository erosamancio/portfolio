import styles from "./template.module.css";

/** Re-mounted on every navigation, so opening a file in the explorer eases its content in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}
