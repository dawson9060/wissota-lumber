import PriceType from '@/enums/PriceType'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { convertEnumToOptions } from '@/utilities'
import type { CollectionConfig } from 'payload'

const Lumber: CollectionConfig = {
  slug: 'lumber',
  access: {
    read: () => true,
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
      name: 'amountAvailable',
      label: 'Amount Available',
      type: 'number',
      required: true,
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
// const Lumber: CollectionConfig = {
//   slug: 'lumber',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'name',
//       type: 'text',
//       required: false,
//     },
//     {
//       name: 'woodSpecies',
//       label: 'Wood Type',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Ash', value: 'ash' },
//         { label: 'Oak', value: 'oak' },
//         { label: 'Walnut', value: 'walnut' },
//       ],
//     },
//     {
//       name: 'price',
//       type: 'number',
//       required: true,
//     },
//     {
//       name: 'priceType',
//       label: 'Price Type',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Per Board Foot', value: 'board_foot' },
//         { label: 'Per Piece', value: 'piece' },
//       ],
//     },
//     {
//       name: 'amountAvailable',
//       type: 'number',
//       required: true,
//     },
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//       required: false,
//     },
//     {
//       name: 'cutType',
//       label: 'Wood Cut Type',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Planed', value: 'planed' },
//         { label: 'Rough Cut', value: 'rough_cut' },
//       ],
//     },
//     {
//       name: 'dimensions',
//       type: 'select',
//       label: 'Dimensions',
//       required: true,
//       options: [
//         { label: '1/2', value: '1/2' },
//         { label: '7/16', value: '7/16' },
//         { label: '4/4', value: '4/4' },
//         { label: '1 1/8', value: '1_1/8' },
//         { label: '5/4', value: '5/4' },
//         { label: '6/4', value: '6/4' },
//         { label: '8/4', value: '8/4' },
//         { label: 'Custom', value: 'custom' },
//       ],
//     },
//     {
//       name: 'customDimension',
//       type: 'text',
//       label: 'Custom Dimension',
//       admin: {
//         condition: (_, siblingData) => siblingData.dimensions === 'custom',
//       },
//     },
//   ],
// }

export default Lumber
