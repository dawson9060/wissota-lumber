'use client';

import { Button, Group, Modal, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './SiteHeader.module.css';

const ContactModal = () => {
    const [opened, { open, close }] = useDisclosure(false);

  return (
     <>
      <Modal opened={opened} onClose={close} title="Contact Us">
         <Stack gap="0.5rem">
            <Text><strong>Phone: </strong>(715) 828-7239</Text>
            <Text><strong>Email: </strong>wissotalumber@gmail.com</Text>
            <Link
              href="https://www.google.com/maps?q=5497+ 173rd+Street,+Chippewa+Falls,+WI+54729"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Address: </strong>5497 173rd Street, Chippewa Falls, WI 54729
            </Link>
          </Stack>
            <Group justify="flex-end" mt="2rem">
                <Button color="blue.5" onClick={close}>Close</Button>
            </Group>
      </Modal>

      <Text className={classes.links} onClick={open}>Contact Us</Text>
    </>
  )
}

export default ContactModal;