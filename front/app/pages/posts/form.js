import { useState } from 'react'

function PostsPage() {
  const [posts, setPosts] = useState([])
  const [title, setPost] = useState('')

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()
    setPosts(data)
  }

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data);
    setPost("");
  }

  const deletePost = async postId => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data);
    fetchPosts();
  }
  return (
    <>
      <div className="form">
        <input
          type='text'
          name='title'
          value={title}
          onChange={e => setPost(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit Post</button>
      </div>
      <hr />
      <button onClick={fetchPosts}>Load posts</button>
      {posts.map(post => {
        return (
          <div key={post.id}>
            {post.id}. {post.title}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default PostsPage
