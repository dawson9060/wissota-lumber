'use client'

import {
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import LumberDisplay from './LumberDisplay'
import { Lumber } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'

const sortTypes = ['Species', 'Price', 'Type']

const FilterDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Filters">
        Filters here
      </Drawer>

      <Button color="blue" variant="subtle" onClick={open}>
        Filters
      </Button>
    </>
  )
}

const InventoryComponent = ({ inventory }: { inventory: PaginatedDocs<Lumber> }) => {
  const [activeData, setActiveDate] = useState<Lumber[]>()

  useEffect(() => {
    setActiveDate(inventory?.docs || [])
  }, [inventory])

  const handleSort = (value: any) => {
    console.log('SORT BY:', value)
    const initialData = [...(inventory?.docs || [])]
    const sortParameter =
      value === 'Species' ? 'woodSpecies' : value === 'Price' ? 'price' : 'cutType'

    const sorted = initialData.sort((a, b) => {
      return a[sortParameter] > b[sortParameter] ? 1 : -1
    })
    console.log('SORTED DATA', sorted)

    setActiveDate(sorted)
  }

  return (
    <>
      <Group justify="space-between">
        <Title order={2}>Current Inventory</Title>
        <Group>
          <FilterDrawer />
          <Select
            defaultValue="Species"
            data={sortTypes}
            allowDeselect={false}
            onChange={handleSort}
            w="120px"
          />
        </Group>
      </Group>
      <Divider />
      <ScrollArea h="100%" offsetScrollbars="y">
        <Stack gap="1rem">
          {activeData?.map((item) => (
            <LumberDisplay key={item.id} lumberInfo={item} />
          ))}
          {/* {inventory?.docs?.map((item) => (
            <LumberDisplay key={item.id} lumberInfo={item} />
          ))} */}
        </Stack>
      </ScrollArea>
      <Group bg="black" c="white" p="1rem" w="100%">
        Wissota Lumber {new Date().getFullYear()}
      </Group>
    </>
  )
}

export default InventoryComponent
