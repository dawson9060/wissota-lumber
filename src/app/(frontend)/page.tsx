import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import {
  Box,
  Center,
  Divider,
  Group,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import MapWrapper from '@/components/MapWrapper'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import HeroComponent from '@/components/HeroComponent'
export default async function HomePage() {
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <Stack gap="0">
      <HeroComponent />
      <Stack gap="2rem" px="1rem" my="2rem">
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
      <Stack bg="blue.0" py="1rem" px="1rem" gap="2rem">
        <SimpleGrid cols={2}>
          <Stack>
            <Title order={3}>Hours</Title>
            <Text>Monday - Friday: 7:00 AM - 5:00 PM</Text>
            <Text>Saturday: 8:00 AM - 12:00 PM</Text>
            <Text>Sunday: Closed</Text>
          </Stack>
          <Stack id="contact">
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
        <Stack>
          <Title order={3}>Find Us</Title>
          <MapWrapper />
        </Stack>
      </Stack>
      <Center p="1rem" w="100%" bg="gray.9">
        <Text c="white">Wissota Lumber</Text>
      </Center>
    </Stack>
  )

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="docs"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Update this page by editing</p>
        <a className="codeLink" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
