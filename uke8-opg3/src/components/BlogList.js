import Blogs from './Blogs'

export default function BlogList({ showHide }) {
  // Lister over siste bloginnlegg
  const blogList = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1644480417721-0aa386122e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      header: 'Overskrift 1',
      text: 'Shaman taxidermy pickled austin readymade pinterest tumericaesthetic viral keffiyeh quinoa venmo distillery tousled',
      showHide: 'false',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1644433329707-2b528437a7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'Overskrift 2',
      text: `Tousled bespoke you probably haven't heard of them stumptownpour-over.`,
      showHide: 'false',
    },
  ]

  return (
    <section>
      {blogList && blogList.length > 0 ? (
        blogList.map((singleblog) => (
          <Blogs
            key={singleblog.id}
            id={singleblog.id}
            img={singleblog.img}
            header={singleblog.header}
            text={singleblog.text}
            showHide={showHide}
          />
        ))
      ) : (
        <p>Ingen nye blogger</p>
      )}
    </section>
  )
}
