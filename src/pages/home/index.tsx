import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo 
        title='Make your schedule simple | Ignite Call'
        description='Connect your calendar and let people book appointments during your available time.'
      />

      <Container>
        <Hero>
          <Heading as='h1' size='4xl'>Easy scheduling</Heading>
          <Text size='xl'>
            Connect your calendar and let people book appointments during your available time.
          </Text>

          <ClaimUsernameForm />
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
    </>
  )
}
