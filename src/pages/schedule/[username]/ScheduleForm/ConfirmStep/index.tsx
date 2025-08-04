import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() {

  }

  return (
    <ConfirmForm as='form' onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          September, 18th 2022
        </Text>
        <Text>
          <Clock />
          18:00
        </Text>
      </FormHeader>

      <label>
        <Text size='sm'>Full Name</Text>
        <TextInput placeholder='Your name' />
      </label>

      <label>
        <Text size='sm'>Email Address</Text>
        <TextInput type='email' placeholder='johndoe@example.com' />
      </label>

      <label>
        <Text size='sm'>Notes</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type='button' variant='tertiary'>Cancel</Button>
        <Button type='submit'>Confirm</Button>
      </FormActions>
    </ConfirmForm>
  )
}