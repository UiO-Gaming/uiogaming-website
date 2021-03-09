export default {
  name: 'author',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'boardMember',
      title: 'Styremedlem?',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Stilling',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-post',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
