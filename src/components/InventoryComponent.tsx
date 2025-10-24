'use client'

import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Select,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import LumberDisplay from './LumberDisplay'
import { Lumber } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'

const SORT_SPECIES = 'Species'
const SORT_PRICE = 'Price'
const SORT_TYPE = 'Type'

const sortTypes = [SORT_SPECIES, SORT_PRICE, SORT_TYPE]

const FilterDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleSpeciesFilter = (species: string) => {
    console.log('Species', species)
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Filters"
        scrollAreaComponent={ScrollArea.Autosize}
        styles={{
          body: {
            height: '100vh !important',
          },
        }}
      >
        <Stack>
          <Text fw="bold">Wood Species</Text>
          {Object.entries(WoodSpecies).map(([key, value]) => (
            <Checkbox key={key} label={value} onChange={() => handleSpeciesFilter(value)} />
          ))}
        </Stack>
        <Divider w="100%" my="1rem" />
        <Stack>
          <Text fw="bold">Wood Type</Text>
          {Object.entries(WoodState).map(([key, value]) => (
            <Checkbox key={key} label={value} onChange={() => handleSpeciesFilter(value)} />
          ))}
        </Stack>
      </Drawer>

      <Button color="blue" variant="subtle" onClick={open}>
        Filters
      </Button>
    </>
  )
}

const InventoryComponent = ({ inventory }: { inventory: PaginatedDocs<Lumber> }) => {
  const [activeData, setActiveDate] = useState<Lumber[]>([])

  useEffect(() => {
    setActiveDate(inventory?.docs || [])
  }, [inventory])

  const handleSort = (value: any) => {
    const initialData = [...(inventory?.docs || [])]
    const sortParameter =
      value === SORT_SPECIES ? 'woodSpecies' : value === SORT_PRICE ? 'price' : 'woodState'

    const sorted = initialData.sort((a, b) => {
      return a[sortParameter] > b[sortParameter] ? 1 : -1
    })

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
      <Stack h="100%" gap="0.5rem">
        {activeData.length === 0 ? (
          <Skeleton h="100%" w="100%" />
        ) : (
          activeData.map((item) => <LumberDisplay key={item.id} lumberInfo={item} />)
        )}
      </Stack>
      {/* <ScrollArea h="100%" offsetScrollbars="y"> */}

      {/* </ScrollArea> */}
      <Group bg="black" c="white" p="1rem" w="100%">
        Wissota Lumber {new Date().getFullYear()}
      </Group>
    </>
  )
}

export default InventoryComponent
