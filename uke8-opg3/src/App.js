import './styles.css'

/*

- Style i henhold til design.png. Se filen i mappen public
  - Husk å mobiltilpasse (se styles.css TODO)
- Flytt koden under ut i komponenter. F.eks Navigation, Sidebar m.fl
- Bruk nødvendig antall props for å gjøre komponentene fleksible
- Gjør det mulig å trykke på "send" (sende skjema). Vis hva brukeren senden ved hjelp av state. Innholdet skal kun vises etter at send er trykket. Husk .preventDefault() for å unngå refresh av siden.
- Det er to knapper i koden i <aside>. Ved klikk på denne skal <span> som ligger under vises / skjules for den knappen som trykkes på.

*/

function Header() {
  return (
    <header>
      <nav>
        <a href="#" id="logo">
          Logo
        </a>
        <ul>
          <li>
            <a href="#">Hjem</a>
          </li>
          <li>
            <a href="#">Om Oss</a>
          </li>
          <li>
            <a href="#">Produkter</a>
          </li>
          <li>
            <a href="#">Blogg</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h1>Overskrift</h1>
      <span>av Nora Nordman</span>
      <p>
        Humblebrag single-origin coffee tilde, +1 bespoke trust fund unicorn
        kombucha affogato etsy distillery viral pok pok. Tousled bespoke you
        probably haven't heard of them stumptown pour-over. Shaman taxidermy
        pickled austin readymade pinterest tumeric aesthetic viral keffiyeh
        quinoa venmo distillery tousled.
      </p>
      <form method="POST">
        <h2>Legg igjen en kommentar</h2>
        <label htmlFor="comment">Kommentar </label>
        <textarea id="comment" cols={15} rows={5} />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

function Aside() {
  return (
    <aside>
      <h2>Siste innlegg</h2>
      <article>
        <img
          alt="Bilde av noe"
          src="https://images.unsplash.com/photo-1644480417721-0aa386122e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        />
        <section>
          <h3>Overskrift 1</h3>
          <p>
            <button type="button">See more</button>
            <span>
              Shaman taxidermy pickled austin readymade pinterest tumeric
              aesthetic viral keffiyeh quinoa venmo distillery tousled.
            </span>
          </p>
        </section>
      </article>
      <article>
        <img
          alt="Bilde av noe annet"
          src="https://images.unsplash.com/photo-1644433329707-2b528437a7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <section>
          <h3>Overskrift 2</h3>
          <p>
            <button type="button">See more</button>
            <span>
              Tousled bespoke you probably haven't heard of them stumptown
              pour-over.
            </span>
          </p>
        </section>
      </article>
    </aside>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022 Fullstækk</p>
    </footer>
  )
}
export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  )
}
