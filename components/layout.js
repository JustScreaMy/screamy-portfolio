import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>JustScreaMy</title>
      </Head>
      <div>
        <div className={styles.navbar}>
          <Link href="/" passHref>
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/repos" passHref>
            <a className={styles.link}>Projects</a>
          </Link>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
