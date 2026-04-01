import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "bd936801-9e30-4584-b0fa-4b8adf05c8e0",
  token: "d06c9632ad0650a5fc9d83c3a22284d56958a777",
  
  // Build configuration
  build: {
    outputDir: "admin",
    publicDir: "public",
  },
  
  // Media handling
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  // Search configuration
  search: {
    tina: {
      indexerToken: "d06c9632ad0650a5fc9d83c3a22284d56958a777",
      stopwordLanguages: ["eng", "fra"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  // Schema and collections
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "blog",
        path: "content/blog",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return `/blog`;
            }
            return `/blog/${document._sys.filename}`;
          },
        },
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
            type: "datetime",
            label: "Published Date",
            name: "publishedDate",
          },
          {
            type: "string",
            label: "Author",
            name: "author",
          },
          {
            type: "image",
            label: "Featured Image",
            name: "image",
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true,
            templates: [
              {
                name: "Quote",
                label: "Quote",
                ui: {
                  defaultItem: {
                    children: [{ type: "p", children: [{ text: "" }] }],
                  },
                },
                fields: [
                  {
                    name: "children",
                    label: "Quote Text",
                    type: "rich-text",
                  },
                  {
                    name: "author",
                    label: "Author",
                    type: "string",
                  },
                ],
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
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
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
            type: "image",
            label: "Hero Image",
            name: "heroImage",
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true,
          },
        ],
      },
      {
        label: "Services",
        name: "services",
        path: "content/services",
        format: "mdx",
        fields: [
          {
            type: "string",
            label: "Service Name",
            name: "name",
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
            type: "image",
            label: "Service Icon",
            name: "icon",
          },
          {
            type: "number",
            label: "Price",
            name: "price",
          },
          {
            type: "rich-text",
            label: "Details",
            name: "details",
            isBody: true,
          },
        ],
      },
    ],
  },
});
