import {
  QueryCache,
  QueryClient,
  useMutation,
  useQuery,
} from '@tanstack/react-query'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from 'api'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      alert(`An error has occurred: ${JSON.stringify(error)}`),
  }),
})

export const useGetTodosQuery = () =>
  useQuery({ queryKey: ['todos'], queryFn: getTodos })

export const useGetTodoQuery = (id: string) =>
  useQuery({ queryKey: ['todos', id], queryFn: () => getTodoById({ id }) })

export const useCreateTodoMutation = () =>
  useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

export const useUpdateTodoMutation = () =>
  useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

export const useDeleteTodoMutation = () =>
  useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })
