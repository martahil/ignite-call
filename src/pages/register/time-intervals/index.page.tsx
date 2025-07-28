import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { IntervalBox, IntervalDay, IntervalInputs, IntervalItem, IntervalContainer } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  

  return (
    <Container>
      <Header>
        <Heading as='strong'>Almost there!</Heading>
        <Text>
          Set the time range you're available on each day of the week.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as='form'>
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Monday</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size='sm'
                type='time'
                step={60}
              />
              <TextInput
                size='sm'
                type='time'
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Tuesday</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size='sm'
                type='time'
                step={60}
              />
              <TextInput
                size='sm'
                type='time'
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>

        <Button type='submit'>
          Next step
          <ArrowRight />
        </Button>      
      </IntervalBox>
    </Container>
  )
}