import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { ConfirmForm, FormActions, FormHeader, FormError } from './styles'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm as='form' onSubmit={handleSubmit(handleConfirmScheduling)}>
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
        <TextInput placeholder='Your name' {...register('name')} />
        {errors.name && <FormError size='sm'>{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size='sm'>Email Address</Text>
        <TextInput
          type='email'
          placeholder='johndoe@example.com'
          {...register('email')}
        />
        {errors.email && (
          <FormError size='sm'>{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size='sm'>Notes</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type='button' variant='tertiary'>Cancel</Button>
        <Button type='submit' disabled={isSubmitting}>Confirm</Button>
      </FormActions>
    </ConfirmForm>
  )
}