export default {
  type: 'document',
  name: 'category',
  title: 'Kategori',
  fields: [
    {
      type: 'slug',
      name: 'name',
      title: 'Navn',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'name.current' },
  },
}
