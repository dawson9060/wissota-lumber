import PriceType from '@/enums/PriceType'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { Lumber } from '@/payload-types'
import { Box, Divider, Group, List, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

const LumberDisplay = ({ lumberInfo }: { lumberInfo: Lumber }) => {
  // const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL
  const imagePath = lumberInfo?.image?.url

  return (
    <Group
      justify="space-between"
      align="flex-start"
      h="fit-content"
      bg="white"
      bdrs="sm"
      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
    >
      <Stack
        gap="0.5rem"
        align="flex-start"
        justify="flex-start"
        h="100%"
        style={{ flexGrow: 1 }}
        p="1rem"
      >
        <Group w="100%" justify="space-between">
          <Title order={5}>
            {WoodSpecies[lumberInfo.woodSpecies]} (
            {lumberInfo.customThickness || WoodThickness[lumberInfo.thickness]}&quot;)
          </Title>
          <Text>
            ${lumberInfo.price}/{PriceType[lumberInfo.priceType]}
          </Text>
        </Group>
        <Divider w="100%" />
        <Text>{lumberInfo.description}</Text>
        <List>
          {/* <List.Item>Description: {lumberInfo.description}</List.Item> */}
          <List.Item>Type: {WoodState[lumberInfo.woodState]}</List.Item>
          <List.Item>
            Approx. Available: {lumberInfo.amountAvailable}{' '}
            {PriceType[lumberInfo.priceType] === PriceType.PER_BOARD_FOOT ? 'BDFT' : 'pieces'}
          </List.Item>
          <List.Item>Wood Grade / Sawing Type / Dimensions: </List.Item>
        </List>
      </Stack>
      {imagePath ? (
        <Image
          src={imagePath}
          alt={lumberInfo.description || 'Lumber Image'}
          width={300}
          height={200}
          style={{ borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}
        />
      ) : (
        <Box
          w={300}
          h={200}
          bg="gray.5"
          style={{ borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}
        />
      )}
    </Group>
  )
}

export default LumberDisplay
