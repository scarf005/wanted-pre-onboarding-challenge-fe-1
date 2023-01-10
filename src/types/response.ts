import { Todo } from './todos'

type ApiResponse<T> = { data: T }

export type TodosResponse = ApiResponse<Todo[]>

export type TodoResponse = ApiResponse<Todo>

export type AuthResponse = {
  message: string
  token: string
}

export type ErrorResponse = { details: string }
