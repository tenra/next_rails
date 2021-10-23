import { useState } from 'react'

function CommentsPage() {
  const [posts, setPosts] = useState([])
  const [title, setPost] = useState('')

  const fetchComments = async () => {
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()
    setPosts(data)
  }

  const submitComment = async () => {
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

  const deleteComment = async commentId => {
    const response = await fetch(`http://localhost:3000/posts/${commentId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
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
        <button onClick={submitComment}>Submit title</button>
      </div>
      <hr />
      <button onClick={fetchComments}>Load comments</button>
      {posts.map(post => {
        return (
          <div key={post.id}>
            {post.id}. {post.title}
            <button onClick={() => deleteComment(post.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default CommentsPage
