import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div>
      <h1>Postの一覧</h1>
      {props.posts.map((post) =>
        <p>{ post.id },{ post.title }</p>
      )}
      <p>別ページ</p>
      <p><a href="/other">other_page</a></p>
    </div>
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
