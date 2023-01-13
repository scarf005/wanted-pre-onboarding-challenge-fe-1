import { truncate } from '../utils/truncate'
import { TodoItem } from './TodoItem'
import { todoSkeletons } from './TodoSkeleton'
import { Stack, Text } from '@mantine/core'
import { useGetTodosQuery } from 'queries'
import { match } from 'ts-pattern'
import { Todo } from 'types'

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
  const { data: todos, status } = useGetTodosQuery()

  const content = match(status)
    .with('loading', () => todoSkeletons)
    .with('error', () => <Text>조금 뒤 새로고침해주세요</Text>)
    .otherwise(todoList(todos!))

  return <Stack>{content}</Stack>
}
