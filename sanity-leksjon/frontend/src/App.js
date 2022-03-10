import { getEvent, getEvents } from './utils/eventService'

export default function App() {
  const getEventsData = async () => {
    const events = await getEvents()
    console.log(JSON.stringify(events))
  }

  const getEventData = async () => {
    const slug = 'event-1'
    const event = await getEvent(slug)
    console.log(JSON.stringify(event))
  }

  return (
    <main>
      <button type="button" onClick={getEventsData}>
        Hent Data
      </button>
      <button type="button" onClick={getEventData}>
        Hent data om et event
      </button>
    </main>
  )
}
