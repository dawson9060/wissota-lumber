import config from '@/payload.config'

import { getPayload } from 'payload'
import ScrollingSpecialsClient from './ScrollingSpecialsClient'
import Link from 'next/link'

export const ScrollingSpecials = async () => {
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

  if (!specials || specials.totalDocs === 0) {
    return null
  }

  return (
    <Link href="/specials" style={{ textDecoration: 'none' }}>
      <ScrollingSpecialsClient specials={specials.docs} />
    </Link>
  )
}
