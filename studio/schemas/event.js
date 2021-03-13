export default {
  name: "event",
  title: "Arrangement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Navn",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "Lenke til arrangementet. Sørg for at navnet er unikt og trykk på generate. Hvis ikke, endre denne til noe unikt",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "date",
      title: "Tidspunkt",
      type: "datetime",
    },
    {
      name: "location",
      title: "Sted",
      type: "string",
    },
    {
      name: "body",
      title: "Beskrivelse",
      type: "blockContent",
    },
    {
      name: "mainImage",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "date.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { date } = selection;
      return Object.assign({}, selection, {
        subtitle: date && `at ${date}`,
      });
    },
  },
};
