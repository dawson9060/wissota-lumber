import { unstable_cache as cache } from 'next/cache'
import config from '@/payload.config'
import { getPayload } from 'payload'

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
}, ['inventory'])
