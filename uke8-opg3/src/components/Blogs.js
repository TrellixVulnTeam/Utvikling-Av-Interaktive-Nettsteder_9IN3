import { useState } from 'react'

export default function Blogs({ img, header, text }) {
  // Bruker useState for å lagre vise om see more skal vises eller skjules
  const [show, setShow] = useState(true)

  // Funksjon for å oppdatere statur av see more
  const showHide = () => {
    setShow(!show)
    console.log()
  }

  return (
    <aside>
      <article>
        <img alt="Bilde av noe" src={img} />
        <section>
          <h3>{header}</h3>
          <p hidden={show}>{text}</p>
          <button type="button" onClick={showHide}>
            See more
          </button>
        </section>
      </article>
    </aside>
  )
}
