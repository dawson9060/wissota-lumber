import InventoryComponent from '@/components/InventoryComponent'
import { Center, Stack, Text } from '@mantine/core'
import { Metadata } from 'next'

import { getInventory } from '@/data/fetchInventory'
import classes from './styles.module.css'

export const metadata: Metadata = {
  title: 'Wissota Lumber - Lumber Inventory',
  description: 'Browse a range of lumber products',
}

export default async function InventoryPage() {
  const inventory = await getInventory()

  if (!inventory) {
    return (
      <Center w="100vw" h="60vh">
        <Text>Failed to load lumber inventory. Please try again later.</Text>
      </Center>
    )
  }

  return (
    <Stack w="100%" h="100%" gap="0" maw="1400px" mx="auto" className={classes.container}>
      <InventoryComponent inventory={inventory} />
    </Stack>
  )
}
