import PriceType from '@/enums/PriceType'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { convertEnumToOptions } from '@/utilities'
import path from 'path'
import type { CollectionAfterDeleteHook, CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'
import fs from 'fs'

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

const Lumber: CollectionConfig = {
  slug: 'lumber',
  access: {
    read: () => true,
  },
  hooks: {
    afterDelete: [afterDeleteHook],
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
