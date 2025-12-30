import { TAG_SPECIALS } from '@/data/tags'
import { revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
} from 'payload'

const afterChangeHook: CollectionAfterChangeHook = async () => {
  revalidateTag(TAG_SPECIALS)
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({ req, id, doc }) => {
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
