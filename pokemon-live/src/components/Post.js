import { useState } from 'react'

export default function Post() {
  // https://jsonplaceholder.typicode.com/posts
  const [post, setPost] = useState([])

  const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    // console.log(data)
    setPost(data)
    console.log(post)
  }

  return (
    <button type="button" onClick={getPost}>
      Hent post
    </button>
  )
}
