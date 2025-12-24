import { Box, Divider, Group, Stack, Text } from '@mantine/core'

import classes from './HeroComponent.module.css'

const HeroComponent = () => {
  return (
    <Box className={classes.hero}>
      <Stack gap="0" px="sm">
        <Text
          className={classes.mainHeroText}
          fw="bold"
          ta="center"
          style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            lineHeight: '1.5',
          }}
        >
          Wissota Lumber
        </Text>
      </Stack>
      <Group className={classes.subtextLarge}>
        <Text fz="1.5rem">Lumber</Text>
        <Divider orientation="vertical" />
        <Text fz="1.5rem">Slabs</Text>
        <Divider orientation="vertical" />
        <Text fz="1.5rem">Custom Sawing</Text>
        <Divider orientation="vertical" />
        <Text fz="1.5rem">Kiln Drying</Text>
      </Group>
      <Stack className={classes.subtextSmall}>
        <Group w="100%" justify="center">
          <Text fz="1.5rem">Lumber</Text>
          <Divider orientation="vertical" />
          <Text fz="1.5rem">Slabs</Text>
        </Group>
        <Group w="100%" justify="center">
          <Text fz="1.5rem">Custom Sawing</Text>
          <Divider orientation="vertical" />
          <Text fz="1.5rem">Kiln Drying</Text>
        </Group>
      </Stack>
    </Box>
  )
}

export default HeroComponent
