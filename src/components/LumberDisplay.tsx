import PriceType from '@/enums/PriceType'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { Lumber } from '@/payload-types'
import { Badge, Box, Divider, Group, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

const LumberDisplay = ({ lumberInfo }: { lumberInfo: Lumber }) => {
  const imagePath = typeof lumberInfo.image === 'object' ? lumberInfo.image?.url : lumberInfo.image

  return (
    <Group
      justify="space-between"
      align="flex-start"
      h="175px"
      bg="white"
      gap="0"
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
          <Group>
            <Title order={5}>{WoodSpecies[lumberInfo.woodSpecies]}</Title>
            <Group gap="xs">
              <Badge size="lg" color="green" variant="light">
                {lumberInfo.customThickness || WoodThickness[lumberInfo.thickness]}
              </Badge>
              <Badge size="lg" color="blue.5" variant="light">
                {WoodState[lumberInfo.woodState]}
              </Badge>
            </Group>
          </Group>
          <Text>
            ${lumberInfo.price}/{PriceType[lumberInfo.priceType]}
          </Text>
        </Group>
        <Divider w="100%" />
        <Stack h="100%" justify="space-between" style={{ overflowY: 'auto' }}>
          <Text>{lumberInfo.description}</Text>
        </Stack>
      </Stack>
      {imagePath ? (
        <Image
          src={imagePath}
          alt={lumberInfo.description || 'Lumber Image'}
          width={280}
          height={175}
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
