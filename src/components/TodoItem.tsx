import { NavLink } from '@mantine/core'
import { Todo } from 'types'
import { useNavigate } from 'react-router-dom'
import { truncate } from '../utils/truncate'

type Props = { todo: Todo }
export const TodoItem = ({ todo }: Props) => {
  const { id, title, content, updatedAt, createdAt } = todo
  const navigate = useNavigate()

  return (
    <NavLink
      onClick={() => navigate(`/todos/${id}`)}
      label={title}
      description={`${truncate(content)}`}
    />
  )
}
