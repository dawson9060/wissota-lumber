'use client'

import { Button, Divider, Group, Modal, NumberInput, Stack, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useMemo, useState } from 'react'
import classes from './SiteHeader.module.css'

const CalculatorModal = () => {
  const [width, setWidth] = useState<number | string>()
  const [length, setLength] = useState<number | string>()
  const [thickness, setThickness] = useState<number | string>()
  const [price, setPrice] = useState<number | string>()

  const [opened, { open, close }] = useDisclosure(false)

  const totalBoardFeet = useMemo(() => {
    if (width && length && thickness) {
      return Number(((Number(width) * Number(thickness) * Number(length)) / 144).toFixed(2))
    }

    return 0
  }, [width, length, thickness])

  const handleReset = () => {
    setWidth('')
    setLength('')
    setThickness('')
    setPrice('')
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Board-Foot Calculator">
        <Stack>
          <Title order={5}>What is a Board-Foot?</Title>
          <Text fz=".925rem">
            A board foot is a measure of volume. One board foot of lumber is one square foot that is
            one-inch thick.
          </Text>
          <Text fz=".925rem">Formula (in inches): (length x width x thickness) / 144</Text>
        </Stack>
        <Divider my="1rem" />
        <Stack gap="0.5rem">
          <NumberInput
            label="Width (inches)"
            withAsterisk
            hideControls
            value={width}
            onChange={setWidth}
          />
          <NumberInput
            label="Length (inches)"
            withAsterisk
            hideControls
            value={length}
            onChange={setLength}
          />
          <NumberInput
            label="Thickness (inches)"
            withAsterisk
            hideControls
            value={thickness}
            onChange={setThickness}
          />
          <NumberInput label="Price per bd/ft" hideControls value={price} onChange={setPrice} />
        </Stack>
        <Group mt="1rem" bg="ghostwhite" p="1rem" justify="space-between">
          <Text>
            <strong>Total Board-Feet: </strong>
            {totalBoardFeet}
          </Text>
          <Text>
            <strong>Total Price: $</strong>
            {price && totalBoardFeet ? totalBoardFeet * Number(price) : '0'}
          </Text>
        </Group>
        <Group justify="flex-end" mt="2rem" gap="0.5rem">
          <Button color="orange.5" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button color="blue.5" onClick={close}>
            Close
          </Button>
        </Group>
      </Modal>

      <Text className={classes.links} onClick={open}>
        BDFT Calculator
      </Text>
    </>
  )
}

export default CalculatorModal
