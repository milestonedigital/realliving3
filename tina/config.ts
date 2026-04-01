import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "bd936801-9e30-4584-b0fa-4b8adf05c8e0",
  token: "", // Token will be auto-generated
  build: {
    outputDir: "admin",
    publicDir: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "blog",
        path: "content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Description",
            name: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            list: true,
            name: "body",
            label: "Body",
            ui: {
              itemProps: (item) => {
                return { label: item?.children?.[0]?.text };
              },
              previewSrc: "./public/blog-preview.png",
            },
            fields: [
              {
                name: "children",
                label: "Content",
                type: "string",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Slug",
            name: "slug",
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "body",
            label: "Body",
            fields: [
              {
                name: "children",
                label: "Content",
                type: "string",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
