import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.h1}>Hello NextJS!</h1>
      <p>
        <span>you can also see about page with that link : </span>
        <Link style={{ color: "blue" }} href="/about">
          About us
        </Link>
      </p>
    </main>
  );
}
