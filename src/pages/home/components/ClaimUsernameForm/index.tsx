import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'phosphor-react'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username can only contain letters and hyphens.',
    })
    .transform((username) => username.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
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

      <FormAnnotation>
        <Text size='sm'>
          {errors.username ? errors.username?.message : 'Enter the username you want'}
        </Text>
      </FormAnnotation>
    </>
  )
}