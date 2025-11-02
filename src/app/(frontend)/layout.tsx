import React from 'react'
import classes from './styles.module.css'

import { theme } from '@/mantine/theme'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400'],
})

// TODO - add the prod URL and metadataBase URL (same thing - should be in env)
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_PAYLOAD_URL || ''),
  title: 'Wissota Lumber - Lumber | Kiln Drying | Custom Sawing',
  description:
    'One-stop shop for several lumber-related products and services including custom sawing, kiln drying, and a range of lumber that includes rough-sawn, planed, and live-edge products.',
  openGraph: {
    title: 'Wissota Lumber - Lumber | Kiln Drying | Custom Sawing',
    description:
      'One-stop shop for several lumber-related products and services including custom sawing, kiln drying, and a range of lumber that includes rough-sawn, planed, and live-edge products.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_PAYLOAD_URL,
    siteName: 'Wissota Lumber',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" {...mantineHtmlProps} className={poppins.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${poppins.variable}`}>
        <MantineProvider theme={theme}>
          <SiteHeader />
          <main className={classes.main}>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
