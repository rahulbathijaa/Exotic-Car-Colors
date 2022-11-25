
import Papa from 'papaparse';
import fs from 'fs'
import sanityClient from '@sanity/client'

// var file = fs.readFileSync('src/csv/Exotic Car Colors Database - Compiled.csv', 'utf8');
// var csv_parsed = Papa.parse(file, {header: true});
// var csv_rows = csv_parsed['data'];



// for (const row in csv_rows){
//     console.log(row)
// const sanityClient = require('@sanity/client')



const CAR_API_URL = 'https://guide-cat-api.sanity-io.now.sh/cats'



const client = sanityClient({
    projectId: 'zlmf9sgs',
    dataset: 'production',
    apiVersion: '2021-08-31',
    token: 'REDACTED_TOKEN', // we need this to get write access
    useCdn: false // We can't use the CDN for writing
  })
client.create({
_id: 2,
_type: 'Colors',
brand_type: 'Lamborghini',
color_name: 'Arancia Atlas',
short_description: 'Lamborghini\'s shiny orange color.',
long_description: 'Lamborghini\'s Arancia Atlas is a shiny orange color that pops in the sunlight. It is best based with Nero accents.',
hex_text: '#FC9303',
rgb_text: 'rgb(252,147,3)',
cmyk_text: '0, 42, 99, 1',
ral_text: 'RAL 1033',
related_color_1: 'Arancio Xanto',
related_color_2: 'Arancio Bruciato',
related_color_3: 'Arancio Borealis'
})
