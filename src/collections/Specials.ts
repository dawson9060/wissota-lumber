import fs from 'fs'
import path from 'path'
import type { CollectionAfterDeleteHook, CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const afterDeleteHook: CollectionAfterDeleteHook = async ({ req, id, doc }) => {
  // Get the file path
  const staticDir = path.resolve(dirname, '../../public/media')
  const filePath = path.join(staticDir, doc.image.filename)

  // Check if the file exists and delete it
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
    console.log(`Deleted file: ${filePath}`)
  }
}

const Specials: CollectionConfig = {
  slug: 'specials',
  access: {
    read: () => true,
  },
  hooks: {
    afterDelete: [afterDeleteHook],
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Specials
