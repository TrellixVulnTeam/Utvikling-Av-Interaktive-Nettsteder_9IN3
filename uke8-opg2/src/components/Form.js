export default function Form({ handleText }) {
  return (
    <form>
      <label htmlFor="">Lag en ny oppgave</label>
      <input
        onChange={handleText}
        type="text"
        // value={text}
        placeholder="Hva vil du utsette?"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}
