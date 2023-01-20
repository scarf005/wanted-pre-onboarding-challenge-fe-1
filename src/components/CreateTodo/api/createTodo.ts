import { TodoInput, TodoResponse } from 'types'
import { api } from 'api'

type CreateTodoParam = TodoInput
export const createTodo = (json: CreateTodoParam) =>
  api().post('todos', { json }).json<TodoResponse>()
