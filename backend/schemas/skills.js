export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "skillNames",
      title: "Skill Names",
      type: "string",
    },
    {
      name: "icons",
      title: "Icons",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
