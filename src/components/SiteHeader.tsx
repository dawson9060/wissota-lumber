import { Box, Group, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import CalculatorModal from './CalculatorModal'
import MobileNavDrawer from './MobileNavDrawer'
import classes from './SiteHeader.module.css'

const SiteHeader = () => {
  return (
    <nav className={classes.nav}>
      <Group className={classes.navRow}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Group gap="0">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <Title order={3} c="black">
              Wissota Lumber
            </Title>
          </Group>
        </Link>
        <Group align="center" className={classes.desktopNav}>
          <Link href="/inventory" className={classes.links}>
            Inventory
          </Link>
          <Box w="1px" h="15px" bg="black" />
          <Link href="/specials" className={classes.links}>
            Specials
          </Link>
          <Box w="1px" h="15px" bg="black" />
          <Link href="/about" className={classes.links}>
            About
          </Link>
          <Box w="1px" h="15px" bg="black" />
          <CalculatorModal />
        </Group>
        <MobileNavDrawer />
      </Group>
    </nav>
  )
}

export default SiteHeader
