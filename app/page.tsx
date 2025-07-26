import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Hello NextJS!</h1>
      <p>
        <Link style={{ color: "white" }} href="/about">
          About us
        </Link>
      </p>
    </main>
  );
}
