import { Box, Group, Title } from '@mantine/core'
import Link from 'next/link'
import ContactModal from './ContactModal'
import classes from './SiteHeader.module.css'
import CalculatorModal from './CalculatorModal'
import Image from 'next/image'

const SiteHeader = () => {
  return (
    <nav className={classes.nav}>
      <Group className={classes.navRow}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Group gap="0">
            <Image src="/LogoV2.png" width={50} height={50} alt="logo" />
            <Title order={3} c="black">
              Wissota Lumber
            </Title>
          </Group>
        </Link>
        <Group>
          <Link href="/inventory" className={classes.links}>
            Inventory
          </Link>
          <CalculatorModal />
          <ContactModal />
        </Group>
      </Group>
    </nav>
  )
}

export default SiteHeader
