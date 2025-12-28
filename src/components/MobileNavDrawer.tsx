'use client'

import { Burger, Divider, Drawer, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import classes from './SiteHeader.module.css'
import Link from 'next/link'
import CalculatorModal from './CalculatorModal'

const MobileNavDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer opened={opened} onClose={close}>
        <Stack>
          <Stack onClick={close}>
            <Link href="/inventory" className={classes.links}>
              Inventory
            </Link>
            <Link href="/specials" className={classes.links}>
              Specials
            </Link>
            <Link href="/about" className={classes.links}>
              About
            </Link>
          </Stack>
          <Divider />
          <CalculatorModal />
        </Stack>
      </Drawer>

      <Burger onClick={open} className={classes.mobileNav} />
    </>
  )
}

export default MobileNavDrawer
