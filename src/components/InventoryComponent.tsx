'use client'

import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { Lumber } from '@/payload-types'
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
import { useDisclosure } from '@mantine/hooks'
import { PaginatedDocs } from 'payload'
import { useEffect, useState } from 'react'
import LumberDisplay from './LumberDisplay'

import classes from './InventoryComponent.module.css';

const SORT_SPECIES = 'Species'
const SORT_PRICE = 'Price'
const SORT_TYPE = 'Type'

const sortTypes = [SORT_SPECIES, SORT_PRICE, SORT_TYPE];

const FilterDrawer = ({ defaultData, setActiveData, sortType }: { defaultData: Lumber[], setActiveData: Function, sortType: string} ) => {
  const [speciesFilters, setSpeciesFilters] = useState<string[]>([]);
  const [stateFilters, setStateFilters] = useState<string[]>([]);
  const [thicknessFilters, setThicknessFilters] = useState<string[]>([]);

  const numFilters = speciesFilters.length + stateFilters.length + thicknessFilters.length;
  
  const [opened, { open, close }] = useDisclosure(false)

  useEffect(() => {
    let newData = [...defaultData];

    if (speciesFilters.length > 0) {
      newData = newData.filter((lumber: Lumber) => speciesFilters.includes(lumber.woodSpecies));
    }
    if (stateFilters.length > 0) {
      newData = newData.filter((lumber: Lumber) => stateFilters.includes(lumber.woodState));
    }
    if (thicknessFilters.length > 0) {
      newData = newData.filter((lumber: Lumber) => thicknessFilters.includes(lumber.thickness));
    }

    const sortParameter =
      sortType === SORT_SPECIES ? 'woodSpecies' : sortType === SORT_PRICE ? 'price' : 'woodState'

    const sorted = newData.sort((a, b) => {
      return a[sortParameter] > b[sortParameter] ? 1 : -1
    });

    setActiveData(sorted)
  }, [speciesFilters, stateFilters, thicknessFilters, sortType]);

  const handleResetFilters = () => {
    setSpeciesFilters([]);
    setStateFilters([]);
    setThicknessFilters([]);

    const sortParameter =
      sortType === SORT_SPECIES ? 'woodSpecies' : sortType === SORT_PRICE ? 'price' : 'woodState'

    const sorted = defaultData.sort((a, b) => {
      return a[sortParameter] > b[sortParameter] ? 1 : -1
    });

    setActiveData(sorted);

    close();
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        scrollAreaComponent={ScrollArea.Autosize}
      >
          <Stack>
            <Group w="100%" justify='space-between'>
              <Text fw="bold">Wood Species</Text>
              <Button variant="outline" size="compact-sm" color="blue.5" onClick={() => handleResetFilters()}>Reset Filters</Button>
            </Group>
            <Checkbox.Group value={speciesFilters} onChange={setSpeciesFilters}>
              {Object.entries(WoodSpecies).map(([key, value]) => (
                <Checkbox color="blue.5" mb="0.5rem" key={key} label={value} value={key} />
              ))}
            </Checkbox.Group>
          </Stack>
          <Divider w="100%" my="1rem" />
          <Stack>
            <Text fw="bold">Wood Type</Text>
            <Checkbox.Group value={stateFilters} onChange={setStateFilters}>
              {Object.entries(WoodState).map(([key, value]) => (
                <Checkbox color="blue.5" mb="0.5rem" key={key} label={value} value={key} />
              ))}
            </Checkbox.Group>
          </Stack>
          <Divider w="100%" my="1rem" />
          <Stack>
            <Text fw="bold">Wood Thickness</Text>
            <Checkbox.Group value={thicknessFilters} onChange={setThicknessFilters}>
              {Object.entries(WoodThickness).map(([key, value]) => (
                <Checkbox color="blue.5" mb="0.5rem" key={key} label={value} value={key} />
              ))}
            </Checkbox.Group>
          </Stack>
      </Drawer>

      <Button color="blue" variant="outline" onClick={open}>
        Filters {numFilters > 0 && `(${numFilters})`}
      </Button>
    </>
  )
}

const InventoryComponent = ({ inventory }: { inventory: PaginatedDocs<Lumber> }) => {
  const [activeData, setActiveData] = useState<Lumber[]>([]);
  const [sortType, setSortType] = useState<string>(SORT_SPECIES);

  useEffect(() => {
    setActiveData(inventory?.docs || [])
  }, [inventory]);

  return (
    <Stack className={classes.inventoryContainer}>
      <Group justify="space-between">
        <Title order={2}>Current Inventory</Title>
        <Group>
          <FilterDrawer defaultData={inventory?.docs || []} setActiveData={setActiveData} sortType={sortType} />
          <Select value={sortType} onChange={(val) => setSortType(val ?? SORT_SPECIES)} allowDeselect={false} data={sortTypes} c="blue.5" />
        </Group>
      </Group>
      <Divider />
      <Stack h="100%" mah="calc(100vh - 225px)" style={{ overflowY: 'auto' }}>
        <Stack gap="0.5rem" pb="1rem">
          {inventory?.docs.length > 0 && activeData.length === 0 ? (
            <Text>No Items Match Your Filters</Text>
          ) : activeData.length === 0 ? (
            <Skeleton h="100%" mih="70vh" w="100%" />
          ) : (
            activeData.map((item) => <LumberDisplay key={item.id} lumberInfo={item} />)
          )}
        </Stack>
      </Stack>

    </Stack>
  )
}

export default InventoryComponent
