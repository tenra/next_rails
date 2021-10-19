
const Post = ({ post }) => {
return (
  <div className="mb-2">
    <span>{post.id}</span>
    {" : "}
    <span className="cursor-pointer hover:bg-gray-200">{post.title}</span>
    <p className="cursor-pointer hover:bg-gray-200">{post.content}</p>
  </div>
);

export default Post;
  // Render post...
}

export async function getStaticPaths() {
  // ...
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch("http://api:3000/posts/${params.id}", {method: "GET"});
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post;
