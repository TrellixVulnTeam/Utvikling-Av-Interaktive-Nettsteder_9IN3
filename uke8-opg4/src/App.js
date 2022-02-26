import './styles.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  // Liste over bilde og info
  const pictureList = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
      alt: 'Green Mountain',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Snowy Mountain',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      alt: 'Beach',
    },
  ]

  // useState for å lagre hvilken bilde som skal vises
  const [current, setCurrent] = useState(pictureList[0])
  const [activeImgBtn, setActiveImgBtn] = useState('0')

  // handleClick for å endre hvilke bilde som vises
  const handleClick = (event) => {
    event.preventDefault()
    setCurrent(pictureList[event.currentTarget.id])
    // console.log(event.currentTarget.id)
    switch (event.currentTarget.id) {
      case '0':
        setActiveImgBtn(event.currentTarget.id)
        break
      case '1':
        setActiveImgBtn(event.currentTarget.id)
        break
      case '2':
        setActiveImgBtn(event.currentTarget.id)
        break
      default:
        break
    }
  }

  // useState for å lagre hvilken farge filteret skal være
  const [currentFilter, setCurrentFilter] = useState(
    'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'
  )

  // useState for å sette farge filter
  const [activeColor, setActiveColor] = useState('')

  // handleChangeFilter funksjon som setter hvilke filter som skal vises
  const handleChangeFilter = (event) => {
    event.preventDefault()
    // console.log('trykket', event.currentTarget.value)
    switch (event.currentTarget.value) {
      case 'blue':
        setCurrentFilter(
          'linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(0, 133, 133, 0.5))'
        )
        setActiveColor(event.target.value)
        break
      case 'red':
        setCurrentFilter(
          'linear-gradient(to right, rgba(0, 255, 255, 0.5), rgba(133, 0, 133, 0.5))'
        )
        setActiveColor(event.target.value)
        break
      case 'green':
        setCurrentFilter(
          'linear-gradient(to right, rgba(0, 255, 0, 0.5), rgba(133, 133, 0, 0.5))'
        )
        setActiveColor(event.target.value)
        break
      case 'reset':
        setCurrentFilter(
          'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))'
        )
        setActiveColor(event.target.value)
        break
      default:
        break
    }
  }

  const [hover, setHover] = useState('false')

  const handleMouseIn = () => {
    setHover(false)
  }

  const handleMouseOut = () => {
    setHover(true)
  }

  return (
    <main>
      <h3>PICTURES FROM SUMMER 2020</h3>
      {/* Kontainer for bilde */}
      <div className="parent-container">
        <div
          className="img-container"
          style={{
            backgroundImage: `${currentFilter}, url(${current.img})`,
          }}
        />

        {/* Boks med tooltip */}
        <div className="tooltip" hidden={hover}>
          Use to this filter
        </div>

        {/* Knapper som endrer filter farge på bilde */}
        <div className="color-changer">
          <motion.button
            whileHover={{ scale: 0.6 }}
            onMouseOver={handleMouseIn}
            onFocus={handleMouseIn}
            onMouseOut={handleMouseOut}
            onBlur={handleMouseOut}
            onClick={handleChangeFilter}
            type="button"
            className={
              activeColor === 'blue'
                ? 'blue color-btn active-color-btn'
                : 'blue color-btn inactive-color-btn'
            }
            value="blue"
          />
          <motion.button
            whileHover={{ scale: 0.6 }}
            onMouseOver={handleMouseIn}
            onFocus={handleMouseIn}
            onMouseOut={handleMouseOut}
            onBlur={handleMouseOut}
            onClick={handleChangeFilter}
            type="button"
            className={
              activeColor === 'red'
                ? 'red color-btn active-color-btn'
                : 'red color-btn inactive-color-btn'
            }
            value="red"
          />
          <motion.button
            whileHover={{ scale: 0.6 }}
            onMouseOver={handleMouseIn}
            onFocus={handleMouseIn}
            onMouseOut={handleMouseOut}
            onBlur={handleMouseOut}
            onClick={handleChangeFilter}
            type="button"
            className={
              activeColor === 'green'
                ? 'green color-btn active-color-btn'
                : 'green color-btn inactive-color-btn'
            }
            value="green"
          />
          <motion.button
            whileHover={{ scale: 0.6 }}
            onMouseOver={handleMouseIn}
            onFocus={handleMouseIn}
            onMouseOut={handleMouseOut}
            onBlur={handleMouseOut}
            onClick={handleChangeFilter}
            type="button"
            className={
              activeColor === 'reset'
                ? 'reset color-btn active-color-btn'
                : 'reset color-btn inactive-color-btn'
            }
            value="reset"
          />
        </div>
      </div>

      <p>
        Nulla facilisi. Proin hendrerit lacus vitae sapien faucibus consectetur.
        Morbi mattis eleifend aliquam. Proin non semper metus. Integer vehicula
        purus eu facilisis auctor. Aliquam id feugiat libero, a sollicitudin
        tellus.
      </p>
      <button
        onClick={handleClick}
        type="button"
        className={activeImgBtn === '0' ? 'active-button' : 'disabled-button'}
        id="0"
      >
        1
      </button>
      <button
        onClick={handleClick}
        type="button"
        className={activeImgBtn === '1' ? 'active-button' : 'disabled-button'}
        id="1"
      >
        2
      </button>
      <button
        onClick={handleClick}
        type="button"
        className={activeImgBtn === '2' ? 'active-button' : 'disabled-button'}
        id="2"
      >
        3
      </button>
    </main>
  )
}

export default App
