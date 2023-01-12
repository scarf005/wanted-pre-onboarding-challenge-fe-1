import { Group, Text, Title } from '@mantine/core'
import { Todo } from 'types'
import { truncate } from '../routes/TodoList'

export const TodoItem = ({ todo }: { todo: Todo }) => (
  <Group>
    <Title order={4}>{todo.title}</Title>
    <Text>{truncate(todo.content)}</Text>
  </Group>
)
