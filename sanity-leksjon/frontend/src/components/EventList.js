import { Link } from 'react-router-dom'

function EventList({ events }) {
  return (
    <section>
      {events.map((event) => (
        <article
          key={event.slug}
          className="px-6 py-4 shadow-md shadow-slate-200"
        >
          <h2 className="font-1g mb-2 font-extrabold text-gray-700">
            {event.title}
          </h2>
          <p className="font-base font-light">{event.preAmble}</p>
          <Link to={event.slug} className="text-green-600 underline">
            {event.slug}
          </Link>
        </article>
      ))}
    </section>
  )
}

export default EventList
