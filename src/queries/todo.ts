import {
  QueryCache,
  QueryClient,
  useMutation,
  useQuery,
} from '@tanstack/react-query'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from 'api'
import { Todo } from 'types'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      alert(`An error has occurred: ${JSON.stringify(error)}`),
  }),
})

export const useTodosQuery = <T>(select?: (data: Todo[]) => T) =>
  useQuery({ queryKey: ['todos'], queryFn: getTodos, select })

export const useTodosCount = () => useTodosQuery((data) => data.length)

export const useTodoQuery = (id: string) =>
  useTodosQuery((data) => data.find((todo) => todo.id === id))

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
