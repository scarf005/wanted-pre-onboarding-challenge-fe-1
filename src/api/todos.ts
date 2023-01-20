import { TodoId, TodoResponse, TodosResponse } from 'types'
import { api } from './api'

export const getTodos = () =>
  api()
    .get('todos')
    .json<TodosResponse>()
    .then((res) => res.data)

type GetTodoByIdParam = TodoId
export const getTodoById = ({ id }: GetTodoByIdParam) =>
  api()
    .get(`todos/${id}`)
    .json<TodoResponse>()
    .then((res) => res.data)

type DeleteTodoParam = TodoId
export const deleteTodo = ({ id }: DeleteTodoParam) =>
  api().delete(`todos/${id}`).json<TodoResponse>()
