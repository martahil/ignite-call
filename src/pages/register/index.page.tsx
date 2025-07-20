import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { ArrowRight } from 'phosphor-react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '../../lib/axios'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username can only contain letters and hyphens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: 'martahil',
    },
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Header>
        <Heading as='strong'> Welcome to Ignite Call</Heading>
        <Text>
          We need some information to create your profile! Oh, and you can edit this information later.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as='form' onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size='sm'>Username</Text>
          <TextInput
            prefix='ignite.com/'
            placeholder='your-username'
            {...register('username')}
          />

          {errors.username && (
            <FormError size='sm'>
              {errors.username.message}
            </FormError>
          )}
        </label>

        <label>
          <Text size='sm'>Full name</Text>
          <TextInput
            placeholder='Your name'
            {...register('name')}
          />

          {errors.name && (
            <FormError size='sm'>
              {errors.name.message}
            </FormError>
          )}
        </label>

        <Button type='submit' disabled={isSubmitting}>
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}