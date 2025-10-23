import WoodSpecies from '@/enums/WoodSpecies'
import { Lumber, Media } from '@/payload-types'
import { Box, Divider, Group, List, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

const LumberDisplay = ({ lumberInfo }: { lumberInfo: Lumber }) => {
  const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL
  const imagePath = lumberInfo?.image?.url
  const fullImagePath = `${baseUrl}${imagePath}`
  console.log('FULL IMAGE PATH', fullImagePath)

  return (
    <Group
      justify="space-between"
      align="flex-start"
      h="100%"
      bg="white"
      bdrs="md"
      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
    >
      <Stack align="flex-start" justify="flex-start" h="100%" style={{ flexGrow: 1 }} p="1rem">
        <Title order={4}>{WoodSpecies[lumberInfo.woodSpecies]}</Title>
        <Divider w="100%" />
        <Text>
          Price: ${lumberInfo.price} per{' '}
          {lumberInfo.priceType === 'board_foot' ? 'board foot' : 'piece'}
        </Text>
        <List>
          <List.Item>Thickness: {lumberInfo.dimensions}</List.Item>
          <List.Item>Type: {lumberInfo.cutType === 'planed' ? 'Planed' : 'Rough'}</List.Item>
          <List.Item>Approx. Available: {lumberInfo.amountAvailable}</List.Item>
        </List>
      </Stack>
      {imagePath ? (
        <Image
          src={imagePath}
          alt={lumberInfo.name}
          width={300}
          height={200}
          style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
        />
      ) : (
        <Box w={300} h={200} bg="gray.5" />
      )}
    </Group>
  )
}

export default LumberDisplay
