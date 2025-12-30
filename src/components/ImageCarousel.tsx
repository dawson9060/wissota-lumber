'use client'

import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Carousel } from '@mantine/carousel'

export const ImageCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }))

  const images = ['/kiln1.webp', '/lumber1.webp', '/milling2.webp']

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image
        src={url}
        alt="wissota lumber picture"
        fill
        style={{ objectFit: 'cover', borderRadius: '0.25rem' }}
      />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      withIndicators
      height={400}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {slides}
    </Carousel>
  )
}

export default ImageCarousel
