import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import Title from '../components/Title'
import { getEvent } from '../utils/eventService'
import SanityContent from '../components/PortableText'

function Event() {
  const [event, setEvent] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  // Henter ut slug fra url
  const { slug } = useParams()

  // Trigges henting av data når komponenten blir laget
  useEffect(() => {
    const getEventsData = async () => {
      // Indikerer på at vi henter data
      setLoading(true)
      try {
        // Henter data
        const data = await getEvent(slug)
        // Lagrer data
        setEvent(data)
      } catch (error) {
        // Lagrer feilmelding
        setError(error)
        console.log(error)
      } finally {
        // Loading resettes
        setLoading(false)
      }
    }
    getEventsData()
  }, [slug])

  // Viser innholder under basert på om vi får feil eller henter data
  if (!event && error) return <div>Noe gikk galt ...</div>
  if (!event && loading) return <div>Henter data ... </div>

  // Hvis vi ikke henter data eller får feil vises selve innholdet

  return (
    <Container>
      <p className="mb-4 text-xs">/events/{event?.slug}</p>
      <p className="mb-2 inline-block bg-slate-900 px-3 py-2 text-sm capitalize text-white">
        {event?.category}
      </p>
      {/* Tittel */}
      <Title title={event?.title} />
      {/* Ingress */}
      <p className="my-2 text-sm italic">{event?.preAmble}</p>
      {/* Bruker sanity content for å vise innhold*/}
      <SanityContent data={event?.body} />
    </Container>
  )
}

export default Event
