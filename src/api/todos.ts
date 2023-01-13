import ky, { Options } from 'ky'
import { HttpMethod } from 'ky/distribution/types/options'
import { Todo, TodoId, TodoInput, TodoResponse, TodosResponse } from 'types'
import { tokenRepository } from 'utils'

export const url = import.meta.env.VITE_API_URL

type ReplaceType<T, K extends keyof T, NewType> = {
  [P in keyof T]: P extends K ? NewType : T[P]
}

type StrictMethodOptions = ReplaceType<Options, 'method', HttpMethod>

const options = {
  method: 'get',
  headers: {
    Authorization: tokenRepository.value,
  },
} satisfies StrictMethodOptions

export const getTodos = () =>
  ky
    .get(`${url}/todos`, options)
    .json<TodosResponse>()
    .then((res) => res.data)

type GetTodoByIdParam = TodoId
export const getTodoById = ({ id }: GetTodoByIdParam) =>
  ky
    .get(`${url}/todos/${id}`, options)
    .json<TodoResponse>()
    .then((res) => res.data)

type CreateTodoParam = TodoInput
export const createTodo = (json: CreateTodoParam) =>
  ky.post(`${url}/todos`, { ...options, json }).json<TodoResponse>()

type UpdateTodoParam = TodoId & TodoInput
export const updateTodo = ({ id, content, title }: UpdateTodoParam) =>
  ky
    .put(`${url}/todos/${id}`, { ...options, json: { content, title } })
    .json<TodoResponse>()

type DeleteTodoParam = TodoId
export const deleteTodo = ({ id }: DeleteTodoParam) =>
  ky.delete(`${url}/todos/${id}`, options).json<TodoResponse>()
