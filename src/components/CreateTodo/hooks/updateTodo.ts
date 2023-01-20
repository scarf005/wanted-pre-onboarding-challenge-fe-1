import { useMutation } from '@tanstack/react-query'
import { updateTodo } from '../api'
import { queryClient } from 'queryClient'

export const useUpdateTodoMutation = () =>
  useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })
