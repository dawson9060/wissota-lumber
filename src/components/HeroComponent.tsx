import { Box, Divider, Group, Stack, Text } from '@mantine/core'

import classes from './HeroComponent.module.css'

const HeroComponent = () => {
  return (
    <Box className={classes.hero}>
      <Stack gap="0">
        <Text
          fw="bold"
          fz="7rem"
          ta="center"
          style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            lineHeight: '1.1',
          }}
        >
          Wissota Lumber
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
