import { Paper, SimpleGrid, Text, Title } from '@mantine/core'
import { usePrevious } from '@mantine/hooks'
import { TodoPreview } from 'components'
import { useGetTodoQuery } from 'queries'
import { useLocation } from 'react-router-dom'

type Props = { id: string }
export const TodoContent = ({ id }: Props) => {
  const { data, isSuccess } = useGetTodoQuery(id)
  const previous = usePrevious(data)
  const todo = isSuccess ? data : previous

  return (
    <>
      <Title>{todo?.title}</Title>
      <Text>{todo?.content}</Text>
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
