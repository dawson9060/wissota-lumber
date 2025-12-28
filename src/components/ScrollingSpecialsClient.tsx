'use client'

import { Special } from '@/payload-types'
import { Box, Group, Text, Title, Transition } from '@mantine/core'
import { useEffect, useState } from 'react'

const SpecialItem = ({ item, active }: { item: Special; active: boolean }) => {
  return (
    <Transition mounted={active} transition="fade-right" duration={500} timingFunction="ease">
      {(styles) => (
        <Box
          style={{
            ...styles,
            position: 'absolute',
            left: 95,
            width: '100%',
          }}
        >
          <Text>{item.title}</Text>
        </Box>
      )}
    </Transition>
  )
}

const ScrollingSpecialsClient = ({ specials }: { specials: Special[] }) => {
  const [activeSpecialIndex, setActiveSpecialIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpecialIndex((prevIndex) => (prevIndex + 1) % specials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [specials.length])

  return (
    <Group
      c="black"
      bdrs="sm"
      p="sm"
      bg="white"
      w="100%"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <Title order={5}>Specials: </Title>
      {specials.map((special, index) => (
        <SpecialItem key={special.id} item={special} active={index === activeSpecialIndex} />
      ))}
    </Group>
  )
}

export default ScrollingSpecialsClient
