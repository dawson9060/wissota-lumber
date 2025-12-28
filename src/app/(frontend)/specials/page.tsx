import { Special } from '@/payload-types'
import config from '@/payload.config'
import { Box, Center, Divider, Stack, Text, Title } from '@mantine/core'
import { Metadata } from 'next'
import Image from 'next/image'
import { getPayload } from 'payload'

import classes from './styles.module.css'

export const metadata: Metadata = {
  title: 'Wissota Lumber - Specials',
  description: 'Browse a range of current specials',
}

const SpecialComponent = ({ item }: { item: Special }) => {
  const imagePath = typeof item.image === 'object' ? item.image?.url : item.image

  return (
    <Stack bg="white" p="1rem" bdrs="sm" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Title order={5}>{item.title}</Title>
      <Divider />
      <Text pb="1rem">{item.description}</Text>
      <Box w="100%" h="300px" pos="relative" bg="gray" style={{ borderRadius: '4px' }}>
        {imagePath && (
          <Image
            src={imagePath}
            alt={item.description || 'Special Image'}
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

const SpecialsPage = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let specials
  try {
    specials = await payload.find({
      collection: 'specials',
      limit: 100,
    })
  } catch (error) {
    console.error('Error fetching specials:', error)
    return (
      <Center w="100vw" h="60vh">
        <Text>No Specials available. Please check again later.</Text>
      </Center>
    )
  }

  return (
    <Stack mt="2rem" w="100%" h="100%" maw="1400px" mx="auto" className={classes.container}>
      <Stack gap="0.25rem">
        <Title order={2}>Current Specials</Title>
        <Text>Please call ahead to enquire about available quantities.</Text>
      </Stack>
      <Divider />
      {specials?.docs.length === 0 ? (
        <Text>No Specials Available</Text>
      ) : (
        <Stack gap="1.5rem" pb="1rem">
          {specials?.docs.map((item) => (
            <SpecialComponent key={item.id} item={item} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default SpecialsPage
