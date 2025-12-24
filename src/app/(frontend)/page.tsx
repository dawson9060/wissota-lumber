import HeroComponent from '@/components/HeroComponent'
import MapWrapper from '@/components/MapWrapper'
import { Anchor, Box, Button, Divider, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import Link from 'next/link'
import classes from './styles.module.css'

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
        {(title === 'Lumber' || title === 'Slabs') && (
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

export default async function Page() {
  return (
    <>
      <HeroComponent />
      <Stack gap="0" className={classes.landingContainer}>
        <Title order={2} px="2rem" my="1rem">
          What We Offer
        </Title>
        <SimpleGrid px="2rem" spacing="xl" type="container" cols={{ base: 1, '700px': 2 }}>
          <InfoComponent
            title="Lumber"
            description="We offer a wide range of rough and planed lumber in various sizes and species. All of our lumber
            goes through a kiln drying process to ensure its stable and ready to use in your projects. Visit our inventory page
            to view our current stock of Maple, Oak, Walnut, Pine, and more!"
            imgUrl="/lumber1.jpg"
          />
          <InfoComponent
            title="Slabs"
            description="Alongside our lumber selection, we also offer a large variety of live edge slabs perfect for your 
            custom furniture projects. Similar to our lumber inventory, our slabs come in a range of sizes and species. Please
            check our inventory page for availability, or contact us to see if we can source the right 
            slab for you!"
            imgUrl="/slab1.jpg"
          />
          <InfoComponent
            title="Custom Sawing"
            description="Have a special project in mind? We offer custom milling services to help bring your ideas to life. Contact
            us to discuss your project and get a quote."
            imgUrl="/milling1.jpg"
          />

          <InfoComponent
            title="Kiln Drying"
            description="Looking to dry your own lumber or slabs? We offer kiln drying services to get your wood
            to the ideal moisture content for your needs. Reach out to us for pricing and availability."
            imgUrl="/kiln1.jpg"
          />
        </SimpleGrid>
        <Stack bg="blue.0" py="2rem" px="2rem" mx="2rem" gap="2rem" my="4rem" bdrs="sm">
          <SimpleGrid type="container" spacing="xl" cols={{ base: 1, '700px': 2 }}>
            <Stack>
              <Stack gap="0">
                <Title order={3}>Hours</Title>
                <Divider />
              </Stack>
              <Text>
                While we do not have set business hours, we are generally available weekdays and
                some weekends.
              </Text>
              <Text>
                Please call ahead or email to enquire about availability or if you have any special
                requests.
              </Text>
            </Stack>
            <Stack>
              <Stack gap="0">
                <Title order={3}>Contact Us</Title>
                <Divider />
              </Stack>
              <Box className={classes.contactGroup}>
                <Text fw="bold" miw="75px">
                  Phone:
                </Text>
                <Anchor href="Tel:7158287239">(715) 828-7239</Anchor>
              </Box>
              <Box className={classes.contactGroup}>
                <Text fw="bold" miw="75px">
                  Email:
                </Text>
                <Anchor href="mailto:wissotalumber@gmail.com">wissotalumber@gmail.com</Anchor>
              </Box>
              <Box className={classes.contactGroup} style={{ wrap: 'nowrap' }}>
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
              </Box>
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
