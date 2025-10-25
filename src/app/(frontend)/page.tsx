
import HeroComponent from '@/components/HeroComponent'
import MapWrapper from '@/components/MapWrapper'
import {
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title
} from '@mantine/core'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import classes from './styles.module.css'

export default async function HomePage() {
  return (
    <>
      <HeroComponent />
      <Stack gap="2rem" className={classes.landingContainer}>
        <Stack gap="2rem" px="2rem">
          <Title order={3}>Services</Title>
          <SimpleGrid cols={2}>
            <Skeleton h="300px" w="100%" />
            <Stack>
              <Title order={4}>Lumber</Title>
              <Text>
                We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is of
                the highest quality.
              </Text>
            </Stack>
          </SimpleGrid>
          <SimpleGrid cols={2}>
            <Stack>
              <Title order={4}>Kiln Drying</Title>
              <Text>
                We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is of
                the highest quality.
              </Text>
            </Stack>
            <Skeleton h="300px" w="100%" />
          </SimpleGrid>
          <SimpleGrid cols={2}>
            <Skeleton h="300px" w="100%" />
            <Stack>
              <Title order={4}>Custom Milling</Title>
              <Text>
                We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is of
                the highest quality.
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>
        <Stack bg="blue.0" py="2rem" px="2rem" gap="2rem">
          <SimpleGrid cols={2}>
            <Stack>
              <Title order={3}>Hours</Title>
              <Text>Monday - Friday: 7:00 AM - 5:00 PM</Text>
              <Text>Saturday: 8:00 AM - 12:00 PM</Text>
              <Text>Sunday: Closed</Text>
            </Stack>
            <Stack>
              <Title order={3}>Contact Us</Title>
              <Text>Phone: (715) 828-7239</Text>
              <Text>Email: wissotalumber@gmail.com</Text>
              <Link
                href="https://www.google.com/maps?q=5497+ 173rd+Street,+Chippewa+Falls,+WI+54729"
                target="_blank"
                rel="noopener noreferrer"
              >
                5497 173rd Street, Chippewa Falls, WI 54729
              </Link>
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
