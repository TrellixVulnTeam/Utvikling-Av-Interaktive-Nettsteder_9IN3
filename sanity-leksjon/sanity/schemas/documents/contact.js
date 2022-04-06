export default {
  title: "Kontakt",
  name: "contact",
  type: "document",
  fields: [
    {
      title: "Avsender",
      name: "name",
      type: "string",
    },
    {
      title: "Beskjed",
      name: "message",
      type: "text",
    },
  ],
  preview: {
    select: {
      name: "name",
      created: "_createdAt",
    },
    prepare({ name, created }) {
      return {
        title: `Fra ${name}`,
        subtitle: `Dato: ${created ? new Date(created).toDateString() : null}`,
      };
    },
  },
};
