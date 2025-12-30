import { getSpecials } from '@/data/fetchSpecials'
import Link from 'next/link'
import ScrollingSpecialsClient from './ScrollingSpecialsClient'

export const ScrollingSpecials = async () => {
  const specials = await getSpecials()

  if (!specials || specials.totalDocs === 0) {
    return null
  }

  return (
    <Link href="/specials" style={{ textDecoration: 'none' }}>
      <ScrollingSpecialsClient specials={specials.docs} />
    </Link>
  )
}
