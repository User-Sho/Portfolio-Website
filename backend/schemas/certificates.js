export default {
  name: "certificates",
  title: "Certificates",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "course",
      title: "Course",
      type: "string",
    },
    {
      name: "descriptions",
      title: "Descriptions",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImageURL",
      type: "image",
      options: {
        hotspot: true, //hotspot allows you to edit the image on the sanity editor
      },
    },
    {
      name: "certificateLink",
      title: "Certificate Link",
      type: "string",
    },
    {
      name: "verification",
      title: "Verification",
      type: "string",
    },
  ],
};
