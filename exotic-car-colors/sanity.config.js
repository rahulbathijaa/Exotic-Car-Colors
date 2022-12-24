// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'


export default defineConfig({
  title: "Colors",
  projectId: "zlmf9sgs",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: [],
  },
});


