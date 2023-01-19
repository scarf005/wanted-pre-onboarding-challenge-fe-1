import { useMutation } from '@tanstack/react-query'
import { createTodo } from '../api'
import { queryClient } from 'queryClient'

export const useCreateTodoMutation = () =>
  useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })
