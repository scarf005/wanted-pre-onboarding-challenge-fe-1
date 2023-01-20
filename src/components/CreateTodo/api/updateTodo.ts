import { TodoId, TodoInput, TodoResponse } from 'types'
import { api } from 'api'

type UpdateTodoParam = TodoId & TodoInput
export const updateTodo = ({ id, content, title }: UpdateTodoParam) =>
  api().put(`todos/${id}`, { json: { content, title } }).json<TodoResponse>()
