import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  const [posts, setPosts] = useState([])

  const getImage = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    )
    const data = await response.json()
    return data.url
  }

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json()
      const selectedPosts = data.slice(0, 10)
      // const imageResult = selectedPosts.slice(0, 10).map((post) => {
      //   const image = getImage(post.id);
      //   return image;
      // });
      // const images = await Promise.all(imageResult);
      // const postsWithImages = selectedPosts.map((post, index) => {
      //   return { ...post, image: images[index] };
      // });
      setPosts(selectedPosts)
    }
    getPosts()
  }, [])

  return (
    <section>
      {posts && posts.length > 0
        ? posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <Link to={`${post.id}`}>Gå til post</Link>
            </article>
          ))
        : null}
    </section>
  )
}

export default Posts
