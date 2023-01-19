import { TextInput, Textarea } from '@mantine/core'
import { useTodoFormContext } from '../hooks'

export const InputContextField = () => {
  const form = useTodoFormContext()

  return (
    <>
      <TextInput label='제목' {...form.getInputProps('title')} />
      <Textarea label='내용' {...form.getInputProps('content')} />
    </>
  )
}
