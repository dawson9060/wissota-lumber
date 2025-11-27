import HeroComponent from '@/components/HeroComponent'
import MapWrapper from '@/components/MapWrapper'
import { Anchor, Box, Button, Divider, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import Link from 'next/link'
import classes from '../styles.module.css'

type InfoComponentProps = {
  title: string
  description: string
  imgUrl: string
}

const InfoComponent = ({ title, description, imgUrl }: InfoComponentProps) => {
  return (
    <Stack bdrs="0.25rem" style={{ boxShadow: '0px 6px 15px 3px rgba(0,0,0,0.05)' }}>
      <Stack w="100%" h="300px" pos="relative" bdrs="0.25rem" justify="center" align="center">
        <Image
          src={imgUrl}
          fill
          style={{
            borderTopLeftRadius: '0.25rem',
            borderTopRightRadius: '0.25rem',
            objectFit: 'cover',
          }}
          alt="picture of lumber"
        />
        <Text
          fz="4rem"
          c="white"
          ta="center"
          style={{ zIndex: '100', textShadow: '2px 2px 4px rgb(0, 0, 0)' }}
        >
          {title}
        </Text>
      </Stack>
      <Stack gap="1rem" p="1rem">
        <Text>{description}</Text>
        {title === 'Lumber' && (
          <Link href="/inventory" style={{ color: 'var(--mantine-color-blue-5' }}>
            <Button variant="light" color="blue.5">
              View our Inventory
            </Button>
          </Link>
        )}
      </Stack>
    </Stack>
  )
}

export default async function TestPage() {
  return (
    <>
      <HeroComponent />
      <Stack gap="0" className={classes.landingContainer}>
        <Title order={2} px="2rem" my="1rem">
          What We Offer
        </Title>
        <SimpleGrid
          px="2rem"
          spacing="xl"
          type="container"
          cols={{ base: 1, '700px': 2, '1100px': 3 }}
        >
          <InfoComponent
            title="Lumber"
            description=" We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is
                of the highest quality."
            imgUrl="/lumber1.jpg"
          />
          <InfoComponent
            title="Custom Milling"
            description=" We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is
                of the highest quality."
            imgUrl="/milling1.jpg"
          />
          <InfoComponent
            title="Kiln Drying"
            description=" We offer a wide variety of lumber including but not limited to: Pine, Oak, Maple,
                Cherry, Fir, Cedar, and more. Our lumber is sourced from sustainable forests and is
                of the highest quality."
            imgUrl="/kiln1.jpg"
          />
        </SimpleGrid>
        <Stack bg="blue.0" py="2rem" px="2rem" gap="2rem" my="4rem">
          <SimpleGrid type="container" spacing="xl" cols={{ base: 1, '700px': 2 }}>
            <Stack>
              <Stack gap="0">
                <Title order={3}>Hours</Title>
                <Divider />
              </Stack>
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
              <Stack gap="0">
                <Title order={3}>Contact Us</Title>
                <Divider />
              </Stack>
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
