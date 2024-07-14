import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>Home page</h3>
      <h3>
        <Link href="/users">Our users➡</Link>
      </h3>
    </main>
  );
}
