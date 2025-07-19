import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as='strong'> Welcome to Ignite Call</Heading>
         <Text>
          We need some information to create your profile! Oh, and you can edit this information later.
         </Text>

         <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as='form'>
        <label>
          <Text size='sm'>Username</Text>
          <TextInput prefix='ignite.com/' placeholder='your-username' />
        </label>

        <label>
          <Text size='sm'>Full name</Text>
          <TextInput prefix='ignite.com/' placeholder='Your username' />
        </label>

        <Button type='submit'>
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}