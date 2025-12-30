'use client'

import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { Lumber } from '@/payload-types'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AnimatePresence, motion } from 'motion/react'
import { PaginatedDocs } from 'payload'
import { useEffect, useState } from 'react'
import LumberDisplay from './LumberDisplay'

import classes from './InventoryComponent.module.css'

const SORT_SPECIES = 'Species'
const SORT_PRICE = 'Price'
const SORT_TYPE = 'Type'

const sortTypes = [SORT_SPECIES, SORT_PRICE, SORT_TYPE]

const FilterComponent = ({
  defaultData,
  setActiveData,
  sortType,
}: {
  defaultData: Lumber[]
  setActiveData: (data: Lumber[]) => void
  sortType: string
}) => {
  const [speciesFilters, setSpeciesFilters] = useState<string[]>([])
  const [stateFilters, setStateFilters] = useState<string[]>([])
  const [thicknessFilters, setThicknessFilters] = useState<string[]>([])

  useEffect(() => {
    let newData = [...defaultData]

    if (speciesFilters.length > 0) {
      newData = newData.filter((lumber: Lumber) => speciesFilters.includes(lumber.woodSpecies))
    }
    if (stateFilters.length > 0) {
      newData = newData.filter((lumber: Lumber) => stateFilters.includes(lumber.woodState))
    }
    if (thicknessFilters.length > 0) {
      newData = newData.filter((lumber: Lumber) => thicknessFilters.includes(lumber.thickness))
    }

    const sortParameter =
      sortType === SORT_SPECIES ? 'woodSpecies' : sortType === SORT_PRICE ? 'price' : 'woodState'

    const sorted = newData.sort((a, b) => {
      if (a[sortParameter] > b[sortParameter]) {
        return 1
      } else if (a[sortParameter] < b[sortParameter]) {
        return -1
      } else {
        // secondary sort by id
        return a['id'] < b['id'] ? -1 : 1
      }
    })

    setActiveData(sorted)
  }, [speciesFilters, stateFilters, thicknessFilters, sortType, defaultData, setActiveData])

  const handleResetFilters = () => {
    setSpeciesFilters([])
    setStateFilters([])
    setThicknessFilters([])

    const sortParameter =
      sortType === SORT_SPECIES ? 'woodSpecies' : sortType === SORT_PRICE ? 'price' : 'woodState'

    const sorted = defaultData.sort((a, b) => {
      if (a[sortParameter] > b[sortParameter]) {
        return 1
      } else if (a[sortParameter] < b[sortParameter]) {
        return -1
      } else {
        // secondary sort by id
        return a['id'] < b['id'] ? -1 : 1
      }
    })

    setActiveData(sorted)

    close()
  }

  return (
    <Stack gap="1rem">
      <Stack>
        <Group w="100%" justify="space-between">
          <Text fw="bold">Species</Text>
          <Button
            variant="outline"
            size="compact-sm"
            color="blue.5"
            onClick={() => handleResetFilters()}
          >
            Reset
          </Button>
        </Group>
        <Checkbox.Group value={speciesFilters} onChange={setSpeciesFilters}>
          {Object.entries(WoodSpecies).map(([key, value]) => (
            <Checkbox color="blue.5" mb="0.5rem" key={key} label={value} value={key} />
          ))}
        </Checkbox.Group>
      </Stack>
      <Divider w="100%" />
      <Stack>
        <Text fw="bold">Wood Type</Text>
        <Checkbox.Group value={stateFilters} onChange={setStateFilters}>
          {Object.entries(WoodState).map(([key, value]) => (
            <Checkbox color="blue.5" mb="0.5rem" key={key} label={value} value={key} />
          ))}
        </Checkbox.Group>
      </Stack>
      <Divider w="100%" />
      <Stack>
        <Text fw="bold">Wood Thickness</Text>
        <Checkbox.Group value={thicknessFilters} onChange={setThicknessFilters}>
          <SimpleGrid cols={2} spacing="0.25rem">
            {Object.entries(WoodThickness).map(([key, value]) => (
              <Checkbox color="blue.5" mb="0.5rem" key={key} label={value} value={key} />
            ))}
          </SimpleGrid>
        </Checkbox.Group>
      </Stack>
    </Stack>
  )
}

const FilterDrawer = ({
  defaultData,
  setActiveData,
  sortType,
}: {
  defaultData: Lumber[]
  setActiveData: (data: Lumber[]) => void
  sortType: string
}) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Box className={classes.filtersDrawer}>
      <Drawer opened={opened} keepMounted onClose={close} scrollAreaComponent={ScrollArea.Autosize}>
        <FilterComponent
          defaultData={defaultData}
          setActiveData={setActiveData}
          sortType={sortType}
        />
      </Drawer>
      <Button color="gray.4" c="black" bg="white" variant="outline" onClick={open}>
        Filters
      </Button>
    </Box>
  )
}

const FilterSidebar = ({
  defaultData,
  setActiveData,
  sortType,
}: {
  defaultData: Lumber[]
  setActiveData: (data: Lumber[]) => void
  sortType: string
}) => {
  return (
    <Stack className={classes.filtersSidebar}>
      <FilterComponent
        defaultData={defaultData}
        setActiveData={setActiveData}
        sortType={sortType}
      />
    </Stack>
  )
}

const InventoryComponent = ({ inventory }: { inventory: PaginatedDocs<Lumber> }) => {
  const [activeData, setActiveData] = useState<Lumber[]>(inventory?.docs)
  const [sortType, setSortType] = useState<string>(SORT_SPECIES)

  return (
    <Stack className={classes.inventoryContainer}>
      <Group justify="space-between" align="flex-end">
        <Stack gap="0.25rem">
          <Title order={2}>Current Inventory</Title>
          <Text>
            Please call ahead to enquire about available quantities or with any special requests.
          </Text>
        </Stack>
        <Group gap="0.5rem">
          <FilterDrawer
            defaultData={inventory?.docs || []}
            setActiveData={setActiveData}
            sortType={sortType}
          />
          <Select
            value={sortType}
            onChange={(val) => setSortType(val ?? SORT_SPECIES)}
            allowDeselect={false}
            data={sortTypes}
            w="120px"
            c="blue.5"
          />
        </Group>
      </Group>
      <Divider />
      <Stack h="100%">
        <Group w="100%" wrap="nowrap" align="flex-start" pb="1rem">
          <FilterSidebar
            defaultData={inventory?.docs || []}
            setActiveData={setActiveData}
            sortType={sortType}
          />
          <Stack gap="0.5rem" w="100%">
            {inventory?.docs.length === 0 ? (
              <Text>No Inventory Available</Text>
            ) : activeData.length === 0 ? (
              <Text>No Items Match Your Filters</Text>
            ) : (
              <AnimatePresence>
                {activeData.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    key={item.id}
                  >
                    <LumberDisplay key={item.id} lumberInfo={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </Stack>
        </Group>
      </Stack>
    </Stack>
  )
}

export default InventoryComponent
