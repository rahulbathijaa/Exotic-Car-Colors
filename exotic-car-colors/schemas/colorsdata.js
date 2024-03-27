import {SlugInput} from 'sanity-plugin-prefixed-slug'


export default {
    name: "Colors",
    title: "Colors",
    type: "document",
    fields: [
        {
            name: "brand_type",
            title: "Brand Type",
            type: "string",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
          },
        // {
        //     // name: "slug_name",
        //     // title: "Slug",
        //     // type: "slug",
        //     // fields: {
        //         // If you want to customize how slugs are formatted
        //         name: 'slug_custom_format',
        //         type: 'slug',
        //         title: 'Slug',
        //         inputComponent: SlugInput,
        //         options: {
        //           urlPrefix: 'https://exoticcarcolors.com/car-colors/',
        //           slugify: (slugString) => slugString.toLowerCase(),
        //           // You can also avoid slugifying entirely by returning the full value:
        //           slugify: (slugString) => slugString,
        //         },
        //       },
            // options: {
            //     source: 'title',
            //     maxLength: 200, // will be ignored if slugify is set
            //     slugify: input => input
            //                          .toLowerCase()
            //                          .replace(/\s+/g, '-')
            //                          .slice(0, 200)
            //   }
        // },
        
        
        {
            name: "color_name",
            title: "Color Name",
            type: "string",
        },
        
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            }
          },

        {
            name: "short_description",
            title: "Short Description",
            type: "string",
        },

        {
            name: "long_description",
            title: "Long Description",
            type: "text",
        },
        

        {
            name: "affiliate_link",
            title: "Affiliate Link",
            type: "url",
            description: "Enter the affiliate link URL here",
            validation: Rule => Rule.uri({
                allowRelative: false, // Only allow absolute URLs
                scheme: ['http', 'https'], // Only allow http and https URLs
            })
        },

        {
            name: "hex_text",
            title: "HEX Text",
            type: "string",
        },

        {
            name: "rgb_text",
            title: "RGB Text",
            type: "string",
        },

        {
            name: "cmyk_text",
            title: "CMYK Text",
            type: "string",
        },

        {
            name: "ral_text",
            title: "RAL Text",
            type: "string",
        },

        {
            name: "related_color_1",
            title: "Related Color #1",
            type: "string",
        },

        {
            name: "related_color_2",
            title: "Related Color #2",
            type: "string",
        },
        {
            name: "related_color_3",
            title: "Related Color #3",
            type: "string",
        }
    ]


    
}