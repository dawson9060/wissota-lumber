import { Button, Divider, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'

import ImageCarousel from '@/components/ImageCarousel'
import Image from 'next/image'
import Link from 'next/link'

import classes from './styles.module.css'

const BladesComponent = () => {
  return (
    <Group align="center" gap="0.4rem" mx="auto">
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
    </Group>
  )
}

const Page = () => {
  return (
    <Stack className={classes.container} align="center">
      <Stack gap="4rem" pt="2rem">
        <Stack px="2rem">
          <Title order={2}>Our Story</Title>
          <Divider />
          <Text>
            What began as a small project in 2023 has grown into Wissota Lumber, a full-fledged
            lumber business aiming to handle all aspects of lumber production and services. Based in
            Chippewa Falls, Wisconsin, Wissota Lumber has come to serve countless people and
            businesses across Wisconsin and Minnesota today.
          </Text>
          <Text>
            We started with a simple mission: to provide our community with high-quality,
            sustainably sourced wood products and professional milling services that you can’t find
            at a big-box store. We may be a small business, but we aim to make a big impact, you can
            rely on us to set you up for success!
          </Text>
        </Stack>
        <ImageCarousel />
        <Stack gap="1.5rem">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1.5rem" px="2rem">
            <Stack bg="white" p="1.5rem" bdrs="sm">
              <Title order={2}>Our Philosophy</Title>
              <Divider />
              <Text>
                At Wissota Lumber, no project is too big or too small. We take pride in serving both
                commercial partners and individual homeowners with the same level of dedication. We
                aren’t just selling wood; we are helping you build your vision.
              </Text>
              <Text>
                We know that every project is unique, and we are always happy to consult with you to
                find the perfect solution for your specific needs. From the first cut to the final
                dry, we handle your lumber with care and craftsmanship that you can trust.
              </Text>
            </Stack>
            <Stack bg="white" p="1.5rem" bdrs="sm">
              <Title order={2}>What We Do</Title>
              <Divider />
              <Text>
                We aim to be involved in every step of the lumber process, from picking up the log
                to drying the finished lumber before it heads out the door. Whether you are a
                commercial contractor looking for specific dimensions or a DIY enthusiast working on
                a weekend project, we have the tools and expertise to help.
              </Text>
              <Text>Check out our core services below!</Text>
            </Stack>
          </SimpleGrid>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="1.5rem" px="2em">
            <Stack p="1.5rem" gap="xs" bdrs="sm" bg="white">
              <Title order={4}>Lumber & Slabs</Title>
              <Divider />
              <Text>
                We keep a wide selection of species including Oak, Maple, Walnut and more in a
                variety of sizes in stock. Checkout our inventory and slabs pages to see what we
                have available now!
              </Text>
            </Stack>
            <Stack p="1.5rem" gap="xs" bdrs="sm" bg="white">
              <Title order={4}>Custom Sawing</Title>
              <Divider />
              <Text>
                Have specific dimensions in-mind? We offer precision milling tailored to your
                project's exact specifications.
              </Text>
            </Stack>
            <Stack p="1.5rem" gap="xs" bdrs="sm" bg="white">
              <Title order={4}>Kiln Drying</Title>
              <Divider />
              <Text>
                We minimize wood-movement headaches with our large, on-site kiln that offers
                professional-grade drying to ensure your wood is stable and ready for use.
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>
        <BladesComponent />

        <Stack bg="white" p="3rem 2rem">
          <Title order={2}>Ready to Start?</Title>
          <Divider />
          <Text>
            To discuss what Wissota Lumber can do for you, get in touch today! Give us a call at
            715-828-7239 or send an email to wissotalumbers@gmail.com to discuss how we can help
            bring your project to life.
          </Text>
          <Text>
            If you would like to see our current inventory, please head over to our inventory and
            slabs pages to expolore your options!
          </Text>
          <Group>
            <Link href="/inventory" style={{ color: 'var(--mantine-color-blue-5' }}>
              <Button variant="light" color="blue.5" w="fit-content">
                View our Lumber
              </Button>
            </Link>
            <Link href="/slabs" style={{ color: 'var(--mantine-color-blue-5' }}>
              <Button variant="light" color="blue.5" w="fit-content">
                View our Slabs
              </Button>
            </Link>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Page
