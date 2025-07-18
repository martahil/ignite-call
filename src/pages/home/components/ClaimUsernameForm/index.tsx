import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import z from 'zod'

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as='form' onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput 
        size='sm'
        prefix='ignite.com/'
        placeholder='your-username'
        {...register('username')}
      />
      <Button
        size='sm'
        type='submit'
      >
        Schedule
        <ArrowRight />
      </Button>
    </Form>
  )
}