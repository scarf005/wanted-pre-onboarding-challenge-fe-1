import { createFormContext } from '@mantine/form'
import { TodoInput } from 'types'

export const [TodoFormProvider, useTodoFormContext, useTodoform] =
  createFormContext<TodoInput>()
