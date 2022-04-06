import { useState } from 'react'

const ContactForm = ({ loading, onSubmit }) => {
  // Lagrer endringer på input med state
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // handleSubmit trigges ved klikk på send knappen
  // Dette igjen trigger onSubmit som vi får som prop
  // Sender med name og message som skal brukes når vi skal lagre data
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ name, message })
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      action="#"
      className="mt-6 grid max-w-lg grid-cols-1 gap-y-6"
    >
      <label id="name" className="block text-sm font-medium text-gray-700">
        Navn:
        {/* Lytter til endringer og trigger handleNameChange
      Oppdatere value med endringen via name useEffect */}
      </label>
      <input
        className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        onChange={handleNameChange}
        value={name}
        type="text"
        id="name"
        placeholder="Hva heter du?"
        required
      />
      <label id="message" className="block text-sm font-medium text-gray-700">
        Melding:
        {/* Lytter til endringer og trigger handleMessageChange
      Oppdatere value med endringen via message useEffect */}
      </label>
      <textarea
        className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        rows="4"
        cols="50"
        onChange={handleMessageChange}
        value={message}
        type="text"
        id="message"
        placeholder="Legg igjen din beskjed her"
        required
      />
      <button
        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        type="submit"
      >
        {loading ? 'Sender ...' : 'Send'}
      </button>
    </form>
  )
}

export default ContactForm
