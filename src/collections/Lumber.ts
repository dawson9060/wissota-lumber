import { TAG_INVENTORY } from '@/data/tags'
import PriceType from '@/enums/PriceType'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { convertEnumToOptions } from '@/utilities'
import { revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
} from 'payload'

const afterChangeHook: CollectionAfterChangeHook = async () => {
  revalidateTag(TAG_INVENTORY)
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({ req, doc }) => {
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

  revalidateTag(TAG_INVENTORY)
}

const Lumber: CollectionConfig = {
  slug: 'lumber',
  access: {
    read: () => true,
  },
  hooks: {
    afterDelete: [afterDeleteHook],
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'woodSpecies',
      label: 'Wood Species',
      type: 'select',
      required: true,
      options: convertEnumToOptions(WoodSpecies),
    },
    {
      name: 'description',
      type: 'text',
      required: false,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'priceType',
      label: 'Price Type',
      type: 'select',
      required: true,
      options: convertEnumToOptions(PriceType),
    },
    {
      name: 'woodState',
      label: 'Wood State',
      type: 'select',
      required: true,
      options: convertEnumToOptions(WoodState),
    },
    {
      name: 'thickness',
      type: 'select',
      label: 'Thickness',
      required: true,
      options: convertEnumToOptions(WoodThickness),
    },
    {
      name: 'customThickness',
      type: 'text',
      label: 'Custom Thickness',
      admin: {
        condition: (_, siblingData) => siblingData.thickness === 'CUSTOM',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Lumber
