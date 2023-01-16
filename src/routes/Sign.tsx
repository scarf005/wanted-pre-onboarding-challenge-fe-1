import {
  Button,
  Group,
  PasswordInput,
  SimpleGrid,
  TextInput,
} from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'
import { isEmail } from '@mantine/form'
import { useLoginMutation, useSignUpMutation } from 'queries'
import { AuthInput, ErrorResponse } from 'types'

const PASSWORD_LENGTH = 8 as const

export const Sign = () => {
  const form = useForm<AuthInput>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('올바른 이메일 형식을 입력해주세요'),
      password: hasLength(
        { min: PASSWORD_LENGTH },
        `비밀번호는 ${PASSWORD_LENGTH}글자 이상이어야 합니다`,
      ),
    },
  })
  const loginMutation = useLoginMutation()
  const signUpMutation = useSignUpMutation()

  const isInvalid = !(form.isValid() && form.isTouched())

  return (
    <>
      <SimpleGrid cols={2}>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log('로그인')
            loginMutation.mutate(values)
          })}
        >
          <TextInput
            label="email"
            placeholder='example@gmail.com'
            withAsterisk
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="password"
            placeholder='password'
            withAsterisk
            {...form.getInputProps('password')}
          />
          <Group position="center" mt="md">
            <Button type="submit" disabled={isInvalid}>
              로그인
            </Button>
          </Group>
        </form>
        <form
          onSubmit={form.onSubmit((values) => {
            signUpMutation.mutate(values)
          })}
        >
          <TextInput
            label="email"
            placeholder='example@gmail.com'
            withAsterisk
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="password"
            placeholder='password'
            withAsterisk
            {...form.getInputProps('password')}
          />
          <Group position="center" mt="md">
            <Button type="submit" disabled={isInvalid}>
              회원가입
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </>
  )
}
