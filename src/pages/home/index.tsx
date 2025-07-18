import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as='h1' size='4xl'>Easy scheduling</Heading>
        <Text size='xl'>
          Connect your calendar and let people book appointments during your available time.
        </Text>
      </Hero>

      <Preview>
        <Image 
          src={previewImage} 
          alt="Calendar representing the app in action" 
          height={472} 
          quality={100} 
          priority />
      </Preview>
    </Container>
  )
}
