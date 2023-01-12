import { useQuery } from 'react-query'
import { getTodos } from 'api'
import { Button, Group, Skeleton, Stack, Text, Title } from '@mantine/core'
import { ErrorResponse, Todo, TodoResponse } from 'types'
import { redirect, useNavigate } from 'react-router-dom'
import { match } from 'ts-pattern'
import { naturals } from './TodoSkeleton'

const truncate = (s: string, length = 10) =>
  s.length <= length ? s : `${s.slice(0, length)}...`

const truncatedTodo = (todo: Todo): Todo => {
  const { title, content } = todo
  return { ...todo, title: truncate(title), content: truncate(content) }
}

const TodoItem = ({ todo }: { todo: Todo }) => (
  <Group>
    <Title order={4}>{todo.title}</Title>
    <Text>{truncate(todo.content)}</Text>
  </Group>
)

const todoList = (todos: Todo[]) => () =>
  (
    <>
      {todos.map(truncatedTodo).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )

export const TodoPreview = () => {
  const { data, status } = useQuery('todos', getTodos)

  const content = match(status)
    .with('loading', () => naturals(5).map((i) => <Skeleton key={i} />))
    .with('error', () => <Text>조금 뒤 새로고침해주세요</Text>)
    .otherwise(todoList(data!))

  return <Stack>{content}</Stack>
}
