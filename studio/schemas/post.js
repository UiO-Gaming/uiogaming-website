export default {
  name: 'post',
  title: 'Blogginnlegg',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Lenke til innlegget. Sørg for at tittelen er unik og trykk på generate. Hvis ikke, endre denne til noe unikt',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Person',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Forsidebilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Publiseringsdato',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Brødtekst',
      type: 'blockContent',
    },
    {
      name: 'excerpt',
      title: 'Sammendrag',
      description: 'Dette er teksten som vil vises på forsiden som forhåndsvisning',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      person: 'person.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {person} = selection
      return Object.assign({}, selection, {
        subtitle: person && `by ${person}`,
      })
    },
  },
}
