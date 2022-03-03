import { useEffect, useEFfect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  const getImage = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    )
    const data = await response.json()
    return data.thumbnailUrl
  }

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const data = await response.json()
      const image = await getImage(id)

      setPost({ ...data, image })
    }
    getPost()
  }, [id])

  return (
    <article id="post">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {/* Cors policy for å hente bilde */}
      {/* <img alt="bilde" src={post?.image} /> */}
      <img alt="bilde" src="https://www.fillmurray.com/640/360" />
      <Link to="/posts">Tilbake til alle artikler</Link>
    </article>
  )
}

export default Post
