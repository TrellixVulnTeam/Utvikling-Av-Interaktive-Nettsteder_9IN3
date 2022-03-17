const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      title: "Filmtittel",
      name: "title",
      type: "string",
      description: "Dette er tittelen",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Dette er den unike url-en",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // Prøver å legge til flere skuespillere på hver film
    // {
    //   title: "Skuespillere",
    //   name: "skuespillere",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Skuespiller",
    //       name: "actor",
    //       type: "reference",
    //       to: [{ type: "actor" }],
    //     },
    //   ],
    // },
    {
      title: "Skuespiller",
      name: "actor",
      type: "reference",
      to: [{ type: "actor" }],
    },
  ],
};

export default movie;
