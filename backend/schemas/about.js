export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "aboutTitle",
      title: "About Title",
      type: "string",
    },
    {
      name: "aboutText",
      title: "About Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
