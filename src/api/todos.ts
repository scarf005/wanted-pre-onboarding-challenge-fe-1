import { TodoId, TodoInput, TodoResponse, TodosResponse } from 'types'
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

type CreateTodoParam = TodoInput
export const createTodo = (json: CreateTodoParam) =>
  api().post('todos', { json }).json<TodoResponse>()

type UpdateTodoParam = TodoId & TodoInput
export const updateTodo = ({ id, content, title }: UpdateTodoParam) =>
  api().put(`todos/${id}`, { json: { content, title } }).json<TodoResponse>()

type DeleteTodoParam = TodoId
export const deleteTodo = ({ id }: DeleteTodoParam) =>
  api().delete(`todos/${id}`).json<TodoResponse>()
