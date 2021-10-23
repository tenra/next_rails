import { useState } from 'react'

function CommentsPage() {
  const [posts, setComments] = useState([])
  const [title, setComment] = useState('')

  const fetchComments = async () => {
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()
    setComments(data)
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
    console.log(data)
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
      <div>
        <input
          type='text'
          value={title}
          onChange={e => setComment(e.target.value)}
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
