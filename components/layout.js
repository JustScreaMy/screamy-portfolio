import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ user, children }) {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href={user.html_url} passHref>
          <p className={styles.link}>Odkaz 1</p>
        </Link>
        <Link href={user.html_url} passHref>
          <p className={styles.link}>Odkaz 2</p>
        </Link>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
