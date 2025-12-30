import { Button, Divider, Group, List, ListItem, Stack, Text, Title } from '@mantine/core'

import ImageCarousel from '@/components/ImageCarousel'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollingSpecials } from '@/components/ScrollingSpecials'

import classes from './styles.module.css'

const BladesComponent = () => {
  return (
    <Group align="center" gap="0.5rem" mx="auto">
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
      <Image className={classes.blade} src="/blade.webp" width={50} height={50} alt="saw blade" />
    </Group>
  )
}

const Page = () => {
  return (
    <Stack maw="1400px" mx="auto" gap="2rem" pb="4rem" className={classes.container}>
      <ScrollingSpecials />
      <Stack gap="4rem">
        <Stack>
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
        <Stack>
          <Title order={2}>What We Do</Title>
          <Divider />
          <Text>
            We aim to be involved in every step of the lumber process, from picking up the log to
            drying the finished lumber before it heads out the door. Whether you are a commercial
            contractor looking for specific dimensions or a DIY enthusiast working on a weekend
            project, we have the tools and expertise to help. Our core services include:
          </Text>
          <List>
            <ListItem>
              <strong>Premium Lumber & Slabs:</strong> A wide selection of species including Oak,
              Maple, Walnut and more in a variety of sizes.
            </ListItem>
            <ListItem>
              <strong>Custom Sawing:</strong> Precision milling tailored to your exact
              specifications.
            </ListItem>
            <ListItem>
              <strong>Kiln Drying:</strong> Professional-grade drying to ensure your wood is stable
              and ready for use.
            </ListItem>
          </List>
        </Stack>

        <BladesComponent />

        <Stack>
          <Title order={2}>Our Philosophy</Title>
          <Divider />
          <Text>
            At Wissota Lumber, no project is too big or too small. We take pride in serving both
            commercial partners and individual homeowners with the same level of dedication. We
            aren’t just selling wood; we are helping you build your vision.
          </Text>
          <Text>
            We know that every project is unique, and we are always happy to consult with you to
            find the perfect solution for your specific needs. From the first cut to the final dry,
            we handle your lumber with care and craftsmanship that you can trust.
          </Text>
        </Stack>
        <BladesComponent />
        <Stack bg="blue.0" p="1rem" bdrs="sm">
          <Title order={2}>Ready to Start?</Title>
          <Divider />
          <Text>
            To discuss what Wissota Lumber can do for you, get in touch today! Give us a call at
            715-828-7239 or send an email to wissotalumber@gmail.com to discuss how we can help
            bring your project to life.
          </Text>
          <Text>
            If you would like to see our current inventory, please head over to our inventory page
            to expolore your options!
          </Text>
          <Link href="/inventory" style={{ color: 'var(--mantine-color-blue-5' }}>
            <Button variant="light" color="blue.5" w="fit-content">
              View our Inventory
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Page
