import style from '../styles/Repos.module.css'
import Layout from '../components/layout.js'
import Repo from '../components/repo.js'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Home() {
  const { data, error } = useSWR(
    'https://api.github.com/users/screamy159/repos',
    fetcher
  )
  if (error)
    return (
      <Layout>
        <p className={style.error}>Failed to load!</p>
      </Layout>
    )
  if (!data)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  return (
    <Layout>
      {data.map((repo) => (
        <Repo key={repo.id} repository={repo}></Repo>
      ))}
    </Layout>
  )
}
