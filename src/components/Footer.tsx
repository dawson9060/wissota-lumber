import { Box, Group, Text } from '@mantine/core'

const Footer = () => {
  return (
    <Group w="100%" bg="gray.9" justify="center" align="center">
      <Group gap="1rem" maw="1400px" p="1rem" mx="auto" justify="center" align="center">
        <Text fz="sm" c="white">
          715-828-7239
        </Text>
        <Box w="1px" h="15px" bg="white" />
        <Text fz="sm" c="white">
          wissotalumber@gmail.com
        </Text>
      </Group>
    </Group>
  )
}

export default Footer
