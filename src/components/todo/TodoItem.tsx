import { truncate } from '../../utils/truncate'
import { ActionIcon, NavLink } from '@mantine/core'
import { IconChevronRight, IconX } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { Todo } from 'types'

type Props = { todo: Todo }
export const TodoItem = ({ todo }: Props) => {
  const { id, title, content, updatedAt, createdAt } = todo
  const navigate = useNavigate()

  return (
    <NavLink
      onClick={() => navigate(`/todos/${id}`)}
      label={title}
      description={`${truncate(content)}`}
      rightSection={<IconChevronRight size={12} stroke={1.5} />}
    />
  )
}
