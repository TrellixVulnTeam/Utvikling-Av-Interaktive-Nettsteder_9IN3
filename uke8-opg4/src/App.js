import './styles.css'

function Pictures() {
  return (
    <>
      <h3>PICTURES FROM SUMMER 2020</h3>
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
        alt="Landscape of mountains"
      />
      <div className="color-changer">
        <div className="color-blue color-btn" />
        <div className="color-red color-btn" />
        <div className="color-green color-btn" />
      </div>

      <p>
        Nulla facilisi. Proin hendrerit lacus vitae sapien faucibus consectetur.
        Morbi mattis eleifend aliquam. Proin non semper metus. Integer vehicula
        purus eu facilisis auctor. Aliquam id feugiat libero, a sollicitudin
        tellus.
      </p>
      <button type="button" className="active-button">
        1
      </button>
      <button type="button" className="disabled-button">
        2
      </button>
      <button type="button" className="disabled-button">
        3
      </button>
    </>
  )
}

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <main>
      <Pictures />
    </main>
  )
}

export default App
