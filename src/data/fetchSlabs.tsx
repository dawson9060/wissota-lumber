import { unstable_cache as cache } from 'next/cache'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { TAG_SLABS } from './tags'

// tags inventory cache under the name "slabs" so we can reset it after updates are made
export const getSlabs = cache(
  async () => {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    let slabs = null
    try {
      slabs = await payload.find({
        collection: 'slabs',
        limit: 100,
      })
    } catch (error) {
      console.error('Error fetching slabs:', error)
    }

    return slabs
  },
  [TAG_SLABS],
  { tags: [TAG_SLABS], revalidate: false },
)
