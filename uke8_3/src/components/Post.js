import { useState } from 'react'

function Post({ title, image }) {
  const [showmore, setShowmore] = useState(false)
  const [post, setPost] = useState([])

  const getPost = async (id) => {
    setShowmore(!showmore)
    if (post) return
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const data = await response.json()
    setPost(data.body)
    console.log(data)
  }

  return (
    <article>
      <h3>{title}</h3>
      <img alt={title} src={image} />
      {showmore ? <p>{post}</p> : null}
      <button type="button" onClick={() => getPost(id)}>
        Se mer
      </button>
    </article>
  )
}

export default Post
