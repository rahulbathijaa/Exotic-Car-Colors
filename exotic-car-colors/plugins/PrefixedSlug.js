import SlugInput from 'sanity-plugin-prefixed-slug'

export default {
  name: 'testing-slugs',
  type: 'document',
  fields: [
    {
      name: 'slug_regular_custom_input',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        source: 'title',
        urlPrefix: 'https://site.url',
        // Use isUnique/maxLength just like you would w/ the regular slug field
        isUnique: MyCustomIsUniqueFunction,
        maxLength: 30,
      },
    },
    {
      // If you want to customize how slugs are formatted
      name: 'slug_custom_format',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        urlPrefix: 'https://site.url',
        slugify: (slugString) => slugString.toLowerCase(),
        // You can also avoid slugifying entirely by returning the full value:
        slugify: (slugString) => slugString,
      },
    },
    {
      // If you want to provide a custom path based on the current document:
      name: 'slug_function_path',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        urlPrefix: (document) => `https://site.url/${document.lang}`,
        // It could even be a promise!
        urlPrefix: async (document) => {
          const subPath = await getDocumentSubPath(document) // ficticious method
          return `https://site.url/${subPath}`
        },
      },
    },
  ],
}