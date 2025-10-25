import { Box, Group, Title } from '@mantine/core';
import Link from 'next/link';
import ContactModal from './ContactModal';
import classes from './SiteHeader.module.css';
import CalculatorModal from './CalculatorModal';

const SiteHeader = () => {
  return (
    <nav className={classes.nav}>
      <Group className={classes.navRow}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Title order={3} c="black">Wissota Lumber</Title>
        </Link>
        <Group>
          <Link href="/inventory" className={classes.links}>Inventory</Link>
          <CalculatorModal />
          <ContactModal />
        </Group>
      </Group>
    </nav>
  )
}

export default SiteHeader
