import Layout from '../../components/layout.js'

export default function User({ user }) {
  return (
    <Layout user={user}>
      <h1>{user.name ? <>{user.name}</> : <>{user.login}</>}</h1>
      <p>Lorems </p>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.user}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })
  if (!res.ok) {
    return { notFound: true }
  }
  const user = await res.json()

  return {
    props: {
      user,
    },
  }
}
