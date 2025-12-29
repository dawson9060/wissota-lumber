import { unstable_cache as cache } from 'next/cache'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { TAG_INVENTORY } from './tags'

// tags inventory cache under the name "inventory" so we can reset it after updates are made
export const getInventory = cache(async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let inventory = null
  try {
    inventory = await payload.find({
      collection: 'lumber',
      limit: 100,
      sort: ['woodSpecies', 'id'],
    })
  } catch (error) {
    console.error('Error fetching inventory:', error)
  }

  return inventory
}, [TAG_INVENTORY])
