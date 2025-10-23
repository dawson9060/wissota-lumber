import { Box, Divider, Group, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'

import classes from './HeroComponent.module.css'

const HeroComponent = () => {
  return (
    <Box className={classes.hero}>
      <Stack gap="0">
        <Text fw="bold" fz="6rem">
          Wissota
        </Text>
        <Text fw="bold" fz="6rem">
          Lumber
        </Text>
      </Stack>
      <Group>
        <Text fz="1.5rem">Lumber</Text>
        <Divider orientation="vertical" />
        <Text fz="1.5rem">Kiln Drying</Text>
        <Divider orientation="vertical" />
        <Text fz="1.5rem">Custom Sawing</Text>
      </Group>
    </Box>
  )
}

export default HeroComponent
