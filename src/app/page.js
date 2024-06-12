"use client"
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  function handleClick() {
    alert("dfwert");
  }
  return (
    <div>
      <h1 className={styles.title}>Hasham</h1>
      <button onClick={handleClick}>click me</button>
      <Link href="/login">Go to Login Page</Link>
    </div>
  );
}
