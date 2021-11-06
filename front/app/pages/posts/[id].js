import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import Layout from '../../components/layout'

const Post = ({ post }) => {
  return (
    <Layout>
      <p>{post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.created_at}</p>
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
  const post = await res.json()

  return { props: { post } }
}

export default Post
