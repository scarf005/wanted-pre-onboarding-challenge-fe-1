import { createFormContext, isNotEmpty } from '@mantine/form'
import { TodoInput } from 'types'

export const [TodoFormProvider, useTodoFormContext, useTodoform] =
  createFormContext<TodoInput>()

type useFormType<T> = ReturnType<typeof createFormContext<T>>[2]
type useFormOption<T> = Parameters<useFormType<T>>[0]

export const todoFormOptions = {
  initialValues: {
    title: '',
    content: '',
  },
  validate: {
    title: isNotEmpty('제목을 입력해주세요'),
    content: isNotEmpty('내용을 입력해주세요'),
  },
  validateInputOnChange: true,
} satisfies useFormOption<TodoInput>
