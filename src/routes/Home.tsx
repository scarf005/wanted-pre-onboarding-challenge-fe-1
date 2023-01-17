import { paths } from './paths'
import {
  ActionIcon,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import { usePrevious } from '@mantine/hooks'
import { IconX } from '@tabler/icons'
import { TodoPreview } from 'components'
import { useDeleteTodoMutation, useTodoQuery } from 'queries'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

type Props = { id: string }
export const TodoContent = ({ id }: Props) => {
  const { data, isSuccess } = useTodoQuery(id)
  const { mutate: deletion, isSuccess: isDeletionSuccess } =
    useDeleteTodoMutation()
  const navigate = useNavigate()

  const previous = usePrevious(data)
  const todo = isSuccess ? data : previous

  if (isDeletionSuccess) {
    navigate(paths.root)
  }

  return (
    <Paper>
      <Group position='apart'>
        <Title>{todo?.title}</Title>
        <ActionIcon onClick={() => deletion({ id })}>
          <IconX size={12} />
        </ActionIcon>
      </Group>
      <Text>{todo?.content}</Text>
    </Paper>
  )
}

export const Content = () => {
  const { id } = useParams()

  const detail = id ? (
    <TodoContent id={id} />
  ) : (
    <Title>TODO를 선택해주세요</Title>
  )

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
