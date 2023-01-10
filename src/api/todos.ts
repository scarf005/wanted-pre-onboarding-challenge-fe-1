import ky, { Options } from 'ky'
import { HttpMethod } from 'ky/distribution/types/options'
import { TodoInput, TodoResponse, TodosResponse } from 'types'

export const url = import.meta.env.VITE_API_URL

type ReplaceType<T, K extends keyof T, NewType> = {
  [P in keyof T]: P extends K ? NewType : T[P]
}

type StrictMethodOptions = ReplaceType<Options, 'method', HttpMethod>

const options = {
  method: 'get',
  headers: {
    Authorization: localStorage.getItem('token') ?? '',
  },
} satisfies StrictMethodOptions

export const getTodos = () =>
  ky
    .get(`${url}/todos`, options)
    .json<TodosResponse>()
    .then((res) => res.data)

export const getTodoById = (id: string) =>
  ky
    .get(`${url}/todos/${id}`, options)
    .json<TodoResponse>()
    .then((res) => res.data)

export const createTodo = (json: TodoInput) =>
  ky.post(`${url}/todos`, { ...options, json }).json<TodoResponse>()

export const updateTodo = (id: string, json: TodoInput) =>
  ky.put(`${url}/todos/${id}`, { ...options, json }).json<TodoResponse>()

export const deleteTodo = (id: string) =>
  ky.delete(`${url}/todos/${id}`, options).json<TodoResponse>()
