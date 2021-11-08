import style from '../styles/Repo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '../public/github_icon.png'

export default function Repo({ repository: rp }) {
  return (
    <div className={style.card}>
      <h2>{rp.name}</h2>
      <p>{rp.description}</p>
      <Link href={rp.html_url} passHref>
        <Image className={style.icon} src={GithubIcon} alt="Github Icon" />
      </Link>
    </div>
  )
}
