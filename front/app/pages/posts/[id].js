import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Layout from '../../components/layout'

const Post = ({ post, answers }) => {
  return (
    <Layout>
      <p>{post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.created_at}</p>
      {answers.map((answer, index) =>
        <div key={index}>
          { answer.id },{ answer.content }, { answer.post_id }
        </div>
      )}
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://api:8000/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`http://api:8000/posts/${params.id}`)
  const a_res = await fetch(`http://api:8000/posts/${params.id}/answers`)
  const post = await res.json()
  const answers = await a_res.json()

  return { props: { post, answers } }
}

export default Post
