import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>JustScreaMy</title>
        <meta name="title" content="JustScreaMy" />
        <meta
          name="description"
          content="Web portfolio of a czechia developer."
        />
        <meta name="keywords" content="programming, portfolio, nextjs" />
        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="JustScreaMy" />
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
