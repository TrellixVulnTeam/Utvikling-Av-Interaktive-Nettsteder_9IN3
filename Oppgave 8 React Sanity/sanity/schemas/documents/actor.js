const actor = {
  title: "Actor",
  name: "actor",
  type: "document",
  fields: [
    {
      title: "Skuespiller",
      name: "fullname",
      type: "string",
      description: "Navnet på skuespilleren",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Dette er den unike url-en",
      validation: (Rule) => Rule.required(),
      options: {
        source: "fullname",
        maxLength: 96,
      },
    },
  ],
};

export default actor;
