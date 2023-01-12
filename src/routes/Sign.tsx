import { hasLength, useForm } from '@mantine/form'
import { AuthInput, ErrorResponse } from 'types'
import { isEmail } from '@mantine/form'
import {
  Button,
  Group,
  SimpleGrid,
  TextInput,
  PasswordInput,
} from '@mantine/core'
import { login, signUp } from 'api'
import { queryClient } from 'App'
import { tokenAtom } from 'atom'
import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { paths } from './paths'

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
  const setToken = useSetAtom(tokenAtom)
  const navigate = useNavigate()
  const loginMutation = useMutation(login, {
    onSuccess: (value) => {
      setToken(value.token)
      queryClient.invalidateQueries(['todos'])
      navigate(paths.root)
    },
    onError: (error: ErrorResponse) => {
      alert(error)
    },
  })
  const signUpMutation = useMutation(signUp, {
    onSuccess: (value) => {
      setToken(value.token)
      queryClient.invalidateQueries(['todos'])
      navigate(paths.root)
    },
    onError: (error: ErrorResponse) => {
      alert(error)
    },
  })

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
            <Button type="submit">로그인</Button>
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
            <Button type="submit">회원가입</Button>
          </Group>
        </form>
      </SimpleGrid>
    </>
  )
}
