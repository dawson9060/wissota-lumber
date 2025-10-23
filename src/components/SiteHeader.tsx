import { Anchor, Button, Group, Text, Title } from '@mantine/core'
import classes from './SiteHeader.module.css'
import Link from 'next/link'

const SiteHeader = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/">
        <Title order={3}>Wissota Lumber</Title>
      </Link>
      <Group>
        <Link href="/inventory">Inventory</Link>
        <Anchor href="#contact">Contact Us</Anchor>
      </Group>
    </nav>
  )
}

export default SiteHeader
