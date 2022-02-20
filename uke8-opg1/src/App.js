import Nav from './components/Nav'
import PageLeft from './components/PageLeft'
import PageRight from './components/PageRight'
import './styles.css'
import { useState } from 'react'

function App() {
  // Statisk liste for overskrifter på sidene
  const contentList = [
    {
      // id: 1,
      headerLeft: 'Design i Human',
      headerRight: 'Design is human. Design making ideas real',
      img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit laoreet leo, sed consectetur metus placerat vitae. Curabitur ut placerat mauris, id finibus risus. Duis ultricies ex at nulla lobortis, sit amet lobortis lacus vehicula. Suspendisse ultrices ante at elit ullamcorper tempus sit amet id est. Aenean molestie arcu lorem, id pharetra justo tincidunt eget. Nulla elit turpis, ornare eget pretium consequat, tempor ac eros. Ut vel ultricies libero. Nam semper, sapien non semper rhoncus, lacus ante semper purus, et mollis metus risus nec nibh. Maecenas sit amet odio ut turpis lobortis sodales nec eget lorem.',
    },
    {
      // id: 2,
      headerLeft: 'Programming Delivers Solutions',
      headerRight:
        'Programming Delivers Solutions. Engineering and Development Thrive on Strong Design.',
      img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: 'Donec mattis ligula sed lorem commodo, ut dapibus lorem ullamcorper. Aenean tortor tellus, aliquam vitae mi ut, vehicula consequat massa. Fusce ultricies ante eleifend consectetur cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porta, turpis vel ornare interdum, tellus libero hendrerit urna, eget rhoncus turpis ipsum vitae orci. In nibh augue, lobortis in pellentesque eget, semper vel odio. Vestibulum quam tortor, suscipit ac hendrerit viverra, auctor eget diam.',
    },
    {
      // id: 3,
      headerLeft: 'Support is Trust.',
      headerRight: 'Support is Trust. Product Life Cycle Beyond Development',
      img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: 'Pellentesque aliquam ante ac congue sodales. Duis sed malesuada ipsum. Pellentesque at arcu eu ligula placerat dapibus eget non felis. Donec leo ante, volutpat sed auctor interdum, varius vitae nisl. Phasellus interdum mauris eu ligula vestibulum hendrerit. Cras non lacinia leo. Quisque pretium aliquet lacus, quis tempus erat scelerisque varius. Nulla viverra non dolor ac imperdiet. Proin consequat accumsan posuere. Mauris et massa at nulla sollicitudin pharetra a congue leo.',
    },
  ]

  // Getting title from this website
  // https://jsonplaceholder.typicode.com/posts

  // useState to set up content
  const [post, setPost] = useState()
  // function to get the post from https://jsonplaceholder.typicode.com/posts
  const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPost(data)
    console.log(JSON.stringify(post))
  }

  // useState to storage current content
  const [current, setCurrent] = useState(contentList[0])
  // onClick for å trigge noe skal skj
  const handleClick = (event) => {
    event.preventDefault()
    setCurrent(contentList[event.currentTarget.id])
    // if (event.currentTarget.id == 0) {
    //   console.log('Du er på side med design')
    // } else if (event.currentTarget.id == 1) {
    //   console.log('Du er på side med programmering')
    // } else if (event.currentTarget.id == 2) {
    //   console.log('Du er på sypport siden')
    // }
    switch (event.currentTarget.id) {
      case '0':
        console.log('Design')
        // console.log(document.getElementById(0))
        document.getElementById(event.currentTarget.id).style.backgroundColor =
          'pink'
        document.getElementById(1).style.backgroundColor = ''
        document.getElementById(2).style.backgroundColor = ''
        break
      case '1':
        console.log('Programming')
        document.getElementById(event.currentTarget.id).style.backgroundColor =
          'pink'
        document.getElementById(0).style.backgroundColor = ''
        document.getElementById(2).style.backgroundColor = ''
        break
      case '2':
        console.log('Support')
        document.getElementById(event.currentTarget.id).style.backgroundColor =
          'pink'
        document.getElementById(1).style.backgroundColor = ''
        document.getElementById(0).style.backgroundColor = ''
        break
      default:
        break
    }
  }

  return (
    <>
      <Nav handleClick={handleClick} />
      <main>
        <PageLeft current={current} />
        <PageRight current={current} />
      </main>
    </>
  )
}

export default App
