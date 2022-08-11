export default {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "myResume",
      title: "My Resume",
      type: "file",
      fields: [
        {
          name: "description",
          title: "Description",
          type: "string",
        },
      ],
    },
  ],
};
