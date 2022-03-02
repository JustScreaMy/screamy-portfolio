import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" passHref>
          <p className={styles.link}>About</p>
        </Link>
        <Link href="/repos" passHref>
          <p className={styles.link}>Projects</p>
        </Link>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
