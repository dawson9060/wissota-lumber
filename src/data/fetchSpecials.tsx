import { unstable_cache as cache } from 'next/cache'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { TAG_SPECIALS } from './tags'

// tags inventory cache under the name "inventory" so we can reset it after updates are made
export const getSpecials = cache(async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let specials = null
  try {
    specials = await payload.find({
      collection: 'specials',
      limit: 100,
    })
  } catch (error) {
    console.error('Error fetching specials:', error)
  }

  return specials
}, [TAG_SPECIALS])
