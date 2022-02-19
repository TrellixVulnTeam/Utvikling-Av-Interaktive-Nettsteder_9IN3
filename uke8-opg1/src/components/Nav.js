export default function Nav({ handleClick }) {
  return (
    <nav>
      <a onClick={handleClick} id="0">
        <p>01.</p>
        <h2>Design</h2>
      </a>

      <a onClick={handleClick} id="1">
        <p>02.</p>
        <h2>Programming</h2>
      </a>

      <a onClick={handleClick} id="2">
        <p>01.</p>
        <h2>Support</h2>
      </a>
    </nav>
  )
}
