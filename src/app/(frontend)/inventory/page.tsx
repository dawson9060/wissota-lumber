import InventoryComponent from '@/components/InventoryComponent'
import { ScrollingSpecials } from '@/components/ScrollingSpecials'
import config from '@/payload.config'
import { Center, Stack, Text } from '@mantine/core'
import { Metadata } from 'next'
import { getPayload } from 'payload'

import classes from './styles.module.css'
import { getInventory } from '@/data/fetchInventory'

export const metadata: Metadata = {
  title: 'Wissota Lumber - Inventory',
  description: 'Browse a range of lumber products',
}

export default async function InventoryPage() {
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })

  // let inventory
  // try {
  //   inventory = await payload.find({
  //     collection: 'lumber',
  //     limit: 100,
  //     sort: ['woodSpecies', 'id'],
  //   })
  // } catch (error) {
  //   console.error('Error fetching inventory:', error)
  //   return (
  //     <Center w="100vw" h="60vh">
  //       <p>Failed to load inventory. Please try again later.</p>
  //     </Center>
  //   )
  // }

  const inventory = await getInventory()

  if (!inventory) {
    return (
      <Center w="100vw" h="60vh">
        <Text>Failed to load inventory. Please try again later.</Text>
      </Center>
    )
  }

  return (
    <Stack w="100%" gap="2rem" h="100%" maw="1400px" mx="auto" className={classes.container}>
      <ScrollingSpecials />
      <InventoryComponent inventory={inventory} />
    </Stack>
  )
}
