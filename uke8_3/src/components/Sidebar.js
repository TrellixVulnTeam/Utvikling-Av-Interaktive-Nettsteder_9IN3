import Post from './Post'

const posts = [
  {
    id: 1,
    title: 'Overskrift 1',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    image:
      'https://images.unsplash.com/photo-1644480417721-0aa386122e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    id: 2,
    title: 'Overskrift 2',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    image:
      'https://images.unsplash.com/photo-1644433329707-2b528437a7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
]

function Sidebar() {
  return (
    <aside>
      <h2>Siste Innlegg</h2>
      {posts && posts.length > 0
        ? posts.map((post) => (
            <Post key={post.id} title={post.title} image={post.image} />
          ))
        : null}
      {/* {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
          />
        ))
      ) : (
        <p>Ingen innlegg å vise</p>
      )} */}
    </aside>
  )
}

export default Sidebar
