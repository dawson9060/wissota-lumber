import InventoryComponent from '@/components/InventoryComponent'
import config from '@/payload.config'
import { Center, Stack } from '@mantine/core'
import { Metadata } from 'next'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: 'Wissota Lumber - Inventory',
  description: 'Browse a range of lumber products',
}

export default async function InventoryPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let inventory
  try {
    inventory = await payload.find({
      collection: 'lumber',
      limit: 100,
      sort: ['woodSpecies', 'id'],
    })
  } catch (error) {
    console.error('Error fetching inventory:', error)
    return (
      <Center w="100vw" h="60vh">
        <p>Failed to load inventory. Please try again later.</p>
      </Center>
    )
  }

  return (
    <Stack
      mt="2rem"
      px="2rem"
      w="100%"
      h="100%"
      maw="1400px"
      mx="auto"
      style={{ overflowY: 'hidden' }}
    >
      <InventoryComponent inventory={inventory} />
    </Stack>
  )
}
