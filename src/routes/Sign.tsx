import { hasLength, useForm } from '@mantine/form'
import { AuthInput, ErrorResponse } from 'types'
import { isEmail } from '@mantine/form'
import {
  Box,
  Button,
  Group,
  SimpleGrid,
  TextInput,
  filterProps,
} from '@mantine/core'
import { login, signUp } from 'api'
import { queryClient } from 'App'
import { tokenAtom } from 'atom'
import { useMutation } from 'react-query'
import { useAtomValue, useSetAtom } from 'jotai'

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

  const loginMutation = useMutation(login, {
    onSuccess: (value) => {
      setToken(value.token)
      queryClient.invalidateQueries('todos')
    },
    onError: (error: ErrorResponse) => {
      console.error(error.details)
    },
  })
  const signUpMutation = useMutation(signUp, {
    onSuccess: (value) => {
      setToken(value.token)
      queryClient.invalidateQueries('todos')
    },
    onError: (error: ErrorResponse) => {
      console.error(error.details)
    },
  })

  return (
    <SimpleGrid cols={2}>
      <form
        onSubmit={form.onSubmit((values) => {
          loginMutation.mutate(values)
        })}
      >
        <TextInput
          label="email"
          placeholder='example@gmail.com'
          withAsterisk
          {...form.getInputProps('email')}
        />
        <TextInput
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
        <TextInput
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
  )
}
