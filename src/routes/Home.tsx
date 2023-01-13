import { Paper, SimpleGrid, Text, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { getTodoById, getTodos } from 'api'
import { TodoPreview } from 'components'
import { useLocation } from 'react-router-dom'

const todoQuery = (id: string) => ({
  queryKey: ['todos', id],
  queryFn: () => getTodoById({ id }),
})

export const TodoContent = ({ id }: { id: string }) => {
  const { data: todo, isSuccess } = useQuery(todoQuery(id))

  if (!isSuccess) {
    return null
  }

  return (
    <>
      <Title>{todo.title}</Title>
      <Text>{todo.content}</Text>
      {/* <TodoTextArea initial={todo.content} /> */}
    </>
  )
}

export const Content = () => {
  const location = useLocation()
  const id = location.pathname.split('/').at(-1) as string

  const detail =
    id !== '' ? <TodoContent id={id} /> : <Title>TODO를 선택해주세요</Title>

  return <Paper>{detail}</Paper>
}

export const Home = () => {
  return (
    <SimpleGrid cols={2}>
      <TodoPreview />
      <Content />
    </SimpleGrid>
  )
}
