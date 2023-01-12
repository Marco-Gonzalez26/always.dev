import * as fs from 'fs'
import path from 'path'
import algoliasearch from 'algoliasearch'
import xml2json from 'xml2json'
import { fileURLToPath } from 'url'

require('dotenv').config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const rss = fs.readFileSync(
  path.resolve(__dirname, '../public/index.xml'),
  'utf-8'
)

const json = xml2json.toJson(rss, { object: true })

const ALGOLIA_APPLICATION_ID = 'JQRV8YDQDC'
const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_KEY
const ALGOLIA_INDEX_NAME = 'always-dev'
const WEBSITE_URL = process.env.WEBSITE_URL
const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)

export const getAlgoliaIndexes = () => {
  const posts = json.rss.channel.item.map((post) => {
    const relativePath = post.guid.replace(WEBSITE_URL, '')

    return {
      ...post,
      objectID: post.guid,
      relativePath
    }
  })

  index
    .saveObjects(posts)
    .then((res) => {
      console.log('Índices agregados exitosamente ')
    })
    .catch((err) => console.error(err))
}
