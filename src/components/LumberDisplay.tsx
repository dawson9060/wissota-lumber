import PriceType from '@/enums/PriceType'
import WoodSpecies from '@/enums/WoodSpecies'
import WoodState from '@/enums/WoodStates'
import WoodThickness from '@/enums/WoodThickness'
import { Lumber } from '@/payload-types'
import {
  Badge,
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'

import classes from './LumberDisplay.module.css'

const LumberDisplay = ({ lumberInfo }: { lumberInfo: Lumber }) => {
  const [opened, { toggle }] = useDisclosure(false)

  const imagePath = typeof lumberInfo.image === 'object' ? lumberInfo.image?.url : lumberInfo.image
  console.log('LUMBER INFO', lumberInfo)
  return (
    <Stack className={classes.container} onClick={toggle}>
      <Grid
        columns={10}
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '600px', lg: '700px', xl: '800px' }}
      >
        <Grid.Col span={{ base: 10, md: 6 }}>
          <Group className={classes.groupOne}>
            <Title miw="100px" order={5}>
              {WoodSpecies[lumberInfo.woodSpecies]}
            </Title>
            <Group gap="xs">
              <Badge size="lg" color="green" variant="light">
                {lumberInfo.customThickness || WoodThickness[lumberInfo.thickness]}
              </Badge>
              <Badge size="lg" color="blue.5" variant="light">
                {WoodState[lumberInfo.woodState]}
              </Badge>
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 4 }}>
          <Group className={classes.groupTwo}>
            <Text>
              ${lumberInfo.price}/{PriceType[lumberInfo.priceType]}
            </Text>
            <Button w="105px" color="blue.5" variant="subtle" size="xs">
              {opened ? 'Hide Details' : 'Show Details'}
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
      <Collapse in={opened}>
        <Divider mb="1rem" />
        <Stack>
          <Text pb="1rem">{lumberInfo.description}</Text>
          <Box pos="relative" w="100%" h="300px" bg="gray" style={{ borderRadius: '4px' }}>
            {imagePath && (
              <Image
                src={imagePath}
                alt={lumberInfo.description || 'Lumber Image'}
                fill
                style={{ borderRadius: '4px', objectFit: 'cover' }}
              />
            )}
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  )
}

export default LumberDisplay
