import { Box, Group, Text } from '@mantine/core'
import { TbMail, TbPhone } from 'react-icons/tb'

const Footer = () => {
  return (
    <Group w="100%" bg="gray.9" justify="center" align="center">
      <Group gap="1rem" maw="1400px" p="1rem" mx="auto" justify="center" align="center">
        <Group gap="xs">
          <TbPhone color="white" />
          <Text fz="sm" c="white">
            715-828-7239
          </Text>
        </Group>

        <Box w="1px" h="15px" bg="white" />
        <Group gap="xs">
          <TbMail color="white" />
          <Text fz="sm" c="white">
            wissotalumber@gmail.com
          </Text>
        </Group>
      </Group>
    </Group>
  )
}

export default Footer
