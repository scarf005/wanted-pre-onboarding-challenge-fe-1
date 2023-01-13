import ky, { Options } from 'ky'
import { HttpMethod } from 'ky/distribution/types/options'
import { Todo, TodoId, TodoInput, TodoResponse, TodosResponse } from 'types'
import { tokenRepository } from 'utils'

export const url = import.meta.env.VITE_API_URL

type ReplaceType<T, K extends keyof T, NewType> = {
  [P in keyof T]: P extends K ? NewType : T[P]
}

type StrictMethodOptions = ReplaceType<Options, 'method', HttpMethod>

const api = ky.extend({
  prefixUrl: url,
  method: 'get',
  headers: {
    Authorization: tokenRepository.value,
  },
})

export const getTodos = () =>
  api
    .get('todos')
    .json<TodosResponse>()
    .then((res) => res.data)

type GetTodoByIdParam = TodoId
export const getTodoById = ({ id }: GetTodoByIdParam) =>
  api
    .get(`todos/${id}`)
    .json<TodoResponse>()
    .then((res) => res.data)

type CreateTodoParam = TodoInput
export const createTodo = (json: CreateTodoParam) =>
  api.post('todos', { json }).json<TodoResponse>()

type UpdateTodoParam = TodoId & TodoInput
export const updateTodo = ({ id, content, title }: UpdateTodoParam) =>
  api
    .put(`todos/${id}`, { json: { content, title } })
    .json<TodoResponse>()

type DeleteTodoParam = TodoId
export const deleteTodo = ({ id }: DeleteTodoParam) =>
  api.delete(`todos/${id}`).json<TodoResponse>()
