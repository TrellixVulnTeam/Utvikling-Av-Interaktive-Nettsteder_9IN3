import { useEffect, useState } from 'react'
import Container from '../components/Container'
import EventList from '../components/EventList'
import Title from '../components/Title'
import { getEvents } from '../utils/eventService'

function Events() {
  const [events, setEvents] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getEventsData = async () => {
      // Indikerer at vi hetner data
      setLoading(true)
      try {
        // Henter data
        const data = await getEvents()
        // Lagrer data
        setEvents(data)
      } catch (error) {
        // Lagrer error
        setError(error)
      } finally {
        // Loading resettes
        setLoading(false)
      }
    }
    getEventsData()
  }, [])

  // Viser innholder under basert på om vi får feil eller henter data
  if (!events && error) return <div>Noe gikk galt ...</div>
  if (!events && loading) return <div>Henter data ... </div>

  // Hvis vi ikke henter data eller får feil vises selve innholdet
  return (
    <Container>
      <Title title="Events" />
      <EventList events={events} />
    </Container>
  )
}

export default Events
