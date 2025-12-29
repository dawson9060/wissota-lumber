import fs from 'fs'
import { revalidateTag } from 'next/cache'
import path from 'path'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
} from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const afterChangeHook: CollectionAfterChangeHook = async () => {
  // revalidate inventory
  // revalidatePath('/inventory')
  revalidateTag(TAG_SPECIALS)
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({ req, id, doc }) => {
  // Get the file path
  // const staticDir = path.resolve(dirname, '../../public/media')
  // const filePath = path.join(staticDir, doc.image.filename)

  // // Check if the file exists and delete it
  // if (fs.existsSync(filePath)) {
  //   fs.unlinkSync(filePath)
  //   console.log(`Deleted file: ${filePath}`)
  // }

  if (doc.image) {
    try {
      // Fetch the related media document
      const mediaDoc = await req.payload.findByID({
        collection: 'media',
        id: doc.image.id,
      })

      if (mediaDoc) {
        // Delete the media file using the Cloudinary adapter
        await req.payload.delete({
          collection: 'media',
          id: mediaDoc.id,
        })
      }
    } catch (error) {
      console.error('Error deleting associated media:', error)
    }
  }

  // revalidate inventory
  // revalidatePath('/inventory')
  revalidateTag(TAG_SPECIALS)
}

const Specials: CollectionConfig = {
  slug: 'specials',
  access: {
    read: () => true,
  },
  hooks: {
    afterDelete: [afterDeleteHook],
    afterChange: [afterChangeHook],
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
