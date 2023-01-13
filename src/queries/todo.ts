import { QueryClient, useMutation } from '@tanstack/react-query'
import { createTodo, updateTodo } from 'api'
import { TodoInput } from 'types'

export const queryClient = new QueryClient()

export const useCreateTodoMutation = () =>
  useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

export const useUpdateTodoMutation = () =>
  useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })
