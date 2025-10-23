import InventoryComponent from '@/components/InventoryComponent'
import LumberDisplay from '@/components/LumberDisplay'
import config from '@/payload.config'
import { Group, ScrollArea, Select, Stack, Text, Title } from '@mantine/core'
import { getPayload } from 'payload'

export default async function InventoryPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const inventory = await payload.find({
    collection: 'lumber',
    limit: 100,
    sort: 'woodSpecies',
  })

  console.log('INVENTORY', inventory)

  return (
    <Stack mt="2rem" px="2rem" w="100%" h="100%" style={{ overflow: 'hidden' }}>
      <InventoryComponent inventory={inventory} />
    </Stack>
  )
}
