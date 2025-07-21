import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { api } from '../../lib/axios'
import { ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  const session = useSession()
  // async function handleRegister() {

  // }

  return (
    <Container>
      <Header>
        <Heading as='strong'>Connect your calendar!</Heading>
        <Text>
          Connect your calendar to automatically check for busy times and new events as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>
            Google Calendar
          </Text>
          <Button variant='secondary' size='sm' onClick={() => signIn('google')}>
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>

        {/* <pre>
          <Text>{JSON.stringify(session.data)}</Text>
        </pre> */}

        <Button type='submit'>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}