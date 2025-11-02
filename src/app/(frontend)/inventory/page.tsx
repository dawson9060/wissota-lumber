import InventoryComponent from '@/components/InventoryComponent'
import config from '@/payload.config'
import { Stack } from '@mantine/core'
import { Metadata } from 'next'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: 'Wissota Lumber - Inventory',
  description: 'Browse a range of lumber products',
}

export default async function InventoryPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const inventory = await payload.find({
    collection: 'lumber',
    limit: 100,
    sort: ['woodSpecies', 'id'],
  })

  console.log('INVENTORY', inventory)

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
