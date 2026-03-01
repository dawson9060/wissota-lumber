import { Box, Center, Divider, Stack, Text, Title } from '@mantine/core'
import { Metadata } from 'next'
import Image from 'next/image'

import { getSlabs } from '@/data/fetchSlabs'
import { Slab } from '@/payload-types'
import classes from './styles.module.css'

export const metadata: Metadata = {
  title: 'Wissota Lumber - Slabs Inventory',
  description: 'Browse a range of available slabs',
}

const SlabsComponent = ({ item }: { item: Slab }) => {
  const imagePath = typeof item.image === 'object' ? item.image?.url : item.image

  return (
    <Stack bg="white" p="1rem" bdrs="sm" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Title order={5}>{item.title}</Title>
      <Divider />
      <Text pb="1rem">{item.description}</Text>
      <Box w="100%" h="300px" pos="relative" bg="gray" style={{ borderRadius: '4px' }}>
        {imagePath && imagePath.includes('res.cloudinary') && (
          <Image
            src={imagePath}
            alt={item.description || 'Slab Image'}
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '4px',
            }}
          />
        )}
      </Box>
    </Stack>
  )
}

const SlabsPage = async () => {
  const slabs = await getSlabs()

  return (
    <Stack mt="2rem" w="100%" h="100%" maw="1400px" mx="auto" className={classes.container}>
      <Stack gap="0.25rem">
        <Title order={2}>Live Edge Slabs Inventory</Title>
        <Text>Please call ahead to inquire about available quantities.</Text>
      </Stack>
      <Divider />
      {slabs?.docs.length === 0 ? (
        <Center w="100%" h="200px">
          <Text>No Slabs Available</Text>
        </Center>
      ) : (
        <Stack gap="1.5rem" pb="1rem">
          {slabs?.docs.map((item) => (
            <SlabsComponent key={item.id} item={item} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default SlabsPage
