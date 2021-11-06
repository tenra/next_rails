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
      {props.posts.map((post, index) =>
        <div key={index}>
        <Link href={`/posts/${encodeURIComponent(post.id)}`}>
          <a>{ post.id },{ post.title }</a>
        </Link>
        </div>
      )}
      <p>別ページ</p>
      <p><a href="/other">other_page</a></p>

      <Image src="/favicon.ico" width={64} height={64} alt="image" />
      <Image src="/vercel.svg" width={64} height={64} alt="image" />
        <hr />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://api:8000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}
