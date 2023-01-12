import { useQuery } from 'react-query'
import { getTodos } from 'api'
import { Button, Skeleton, Stack, Text } from '@mantine/core'
import { ErrorResponse, Todo, TodoResponse } from 'types'
import { redirect, useNavigate } from 'react-router-dom'
import { match } from 'ts-pattern'
import { naturals, todoSkeletons } from './TodoSkeleton'
import { TodoItem } from './TodoItem'
import { truncate } from '../utils/truncate'

const truncatedTodo = (todo: Todo): Todo => {
  const { title, content } = todo
  return { ...todo, title: truncate(title), content: truncate(content) }
}

const todoList = (todos: Todo[]) => () =>
  (
    <>
      {todos.map(truncatedTodo).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )

export const TodoPreview = () => {
  const { data: todos, status } = useQuery('todos', getTodos)

  const content = match(status)
    .with('loading', () => todoSkeletons)
    .with('error', () => <Text>조금 뒤 새로고침해주세요</Text>)
    .otherwise(todoList(todos!))

  return <Stack>{content}</Stack>
}
