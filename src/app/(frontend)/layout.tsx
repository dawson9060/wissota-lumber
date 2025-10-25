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

export const metadata: Metadata = {
  title: 'Wissota Lumber',
  description: 'One stop shop for all your lumber needs',
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
          <main className={classes.main}>
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
