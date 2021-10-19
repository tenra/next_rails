import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Layout from '../components/layout'

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Postの一覧</h1>
      {props.posts.map((post) =>
        <p>{ post.id },{ post.title }</p>
      )}
      <p>別ページ</p>
      <p><a href="/other">other_page</a></p>

      <Link href="/posts/new">
        <a>New Post</a>
      </Link>
      <Image src="/favicon.ico" width={64} height={64} alt="image" />
      <Image src="/vercel.svg" width={64} height={64} alt="image" />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}
