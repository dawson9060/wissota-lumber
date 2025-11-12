import HeroComponent from '@/components/HeroComponent'
import MapWrapper from '@/components/MapWrapper'
import { Anchor, Box, Button, Divider, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import Link from 'next/link'
import classes from './styles.module.css'

export default async function HomePage() {
  return (
    <>
      <HeroComponent />
      <Stack gap="0" className={classes.landingContainer}>
        <Title order={2} px="2rem" my="1rem">
          What We Offer
        </Title>
        <Stack gap="4rem" px="2rem">
          <SimpleGrid cols={2} spacing="2rem">
            <Box
              w="100%"
              h="100%"
              mih="300px"
              pos="relative"
              bdrs="0.25rem"
              style={{ boxShadow: '0px 6px 15px 3px rgba(0,0,0,0.15)' }}
            >
              <Image
                src="/lumber1.jpg"
                fill
                style={{ borderRadius: '0.25rem', objectFit: 'cover' }}
                alt="picture of lumber"
              />
            </Box>
            <Stack>
              <Title order={3}>Lumber</Title>
              <Divider />
              <Text>
                We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is
                of the highest quality.
              </Text>

              <Link href="/inventory" style={{ color: 'var(--mantine-color-blue-5' }}>
                <Button variant="light" color="blue.5">
                  View our Inventory
                </Button>
              </Link>
            </Stack>
          </SimpleGrid>
          <SimpleGrid cols={2} spacing="2rem">
            <Stack>
              <Title order={3}>Kiln Drying</Title>
              <Divider />
              <Text>
                We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is
                of the highest quality.
              </Text>
            </Stack>
            <Box
              w="100%"
              h="100%"
              mih="300px"
              pos="relative"
              bdrs="0.25rem"
              style={{ boxShadow: '0px 6px 15px 3px rgba(0,0,0,0.15)' }}
            >
              <Image
                src="/kiln1.jpg"
                fill
                alt="picture of kiln"
                style={{ borderRadius: '0.25rem', objectFit: 'cover' }}
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid cols={2} spacing="2rem">
            <Box
              w="100%"
              h="100%"
              mih="300px"
              pos="relative"
              bdrs="0.25rem"
              style={{ boxShadow: '0px 6px 15px 3px rgba(0,0,0,0.15)' }}
            >
              <Image
                src="/milling1.jpg"
                fill
                alt="picture of milling"
                style={{ borderRadius: '0.25rem', objectFit: 'cover' }}
              />
            </Box>
            <Stack>
              <Title order={3}>Custom Milling</Title>
              <Divider />
              <Text>
                We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is
                of the highest quality.
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>
        <Stack bg="blue.0" py="2rem" px="2rem" gap="2rem" my="4rem">
          <SimpleGrid cols={2}>
            <Stack>
              <Title order={3}>Hours</Title>
              <Text>
                <strong>Monday - Friday: </strong>7:00 AM - 5:00 PM
              </Text>
              <Text>
                <strong>Saturday: </strong>8:00 AM - 12:00 PM
              </Text>
              <Text>
                <strong>Sunday: </strong>Closed
              </Text>
            </Stack>
            <Stack>
              <Title order={3}>Contact Us</Title>
              <Group>
                <Text fw="bold" miw="75px">
                  Phone:
                </Text>
                <Anchor href="Tel:7158287239">(715) 828-7239</Anchor>
              </Group>
              <Group>
                <Text fw="bold" miw="75px">
                  Email:
                </Text>
                <Anchor href="mailto:wissotalumber@gmail.com">wissotalumber@gmail.com</Anchor>
              </Group>
              <Group align="flext-start" wrap="nowrap">
                <Text fw="bold" miw="75px">
                  Address:
                </Text>
                <Link
                  href="https://www.google.com/maps?q=5497+ 173rd+Street,+Chippewa+Falls,+WI+54729"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--mantine-color-blue-5)',
                    textDecoration: 'none',
                  }}
                >
                  5497 173rd Street, Chippewa Falls, WI 54729
                </Link>
              </Group>
            </Stack>
          </SimpleGrid>
        </Stack>
        <Stack px="2rem" mb="1rem">
          <Title order={3}>Find Us</Title>
          <MapWrapper />
        </Stack>
      </Stack>
    </>
  )
}
