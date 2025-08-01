import { Button, Heading, MultiStep, Text, TextArea } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()

  console.log(session)

  async function handleUpdateProfile(data: UpdateProfileData) {

  }

  return (
    <Container>
      <Header>
        <Heading as='strong'>Welcome to Ignite Call</Heading>
        <Text>
          We need some information to create your profile! Oh, and you can edit this information later.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <ProfileBox as='form' onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text>Profile Photo</Text>
        </label>

        <label>
          <Text size='sm'>About You</Text>
          <TextArea
            {...register('bio')}
          />
          <FormAnnotation size='sm'>
            Tell us a bit about yourself. This will be displayed on your personal page.
          </FormAnnotation>
        </label>

        <Button type='submit' disabled={isSubmitting}>
          Finish
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession( // unstable_getServerSession is deprecated
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  return {
    props: {
      session,
    }
  }
}
