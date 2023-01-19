import { paths } from 'routes/paths'
import { ActionIcon, Group, Paper, Text, Title } from '@mantine/core'
import { usePrevious } from '@mantine/hooks'
import { IconX } from '@tabler/icons'
import { NotFound } from 'components'
import { useDeleteTodoMutation, useTodoQuery } from 'queries'
import { useNavigate, useParams } from 'react-router-dom'

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
  const { data, isLoading } = useTodoQuery(id ?? '')

  if (!id) {
    return <Title>TODO를 선택해주세요</Title>
  }

  if (isLoading) {
    return <Title>로딩중...</Title>
  }
  if (!data) {
    return <NotFound text='존재하지 않는 글입니다' />
  }

  return <TodoContent id={id} />
}
