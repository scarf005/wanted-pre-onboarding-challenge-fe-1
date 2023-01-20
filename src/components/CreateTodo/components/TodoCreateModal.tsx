import { useCreateTodoMutation } from '../hooks'
import { TodoForm } from './TodoForm'
import { ActionIcon, Button, Tooltip } from '@mantine/core'
import { IconPencilPlus } from '@tabler/icons'
import { ToggleableModal } from 'components/ToggleableModal'
import { ComponentProps } from 'react'

const CreateButton = (props: ComponentProps<typeof ActionIcon>) => (
  <Tooltip label="새 TODO 추가하기">
    <ActionIcon {...props}>
      <IconPencilPlus />
    </ActionIcon>
  </Tooltip>
)

export const TodoCreateModal = () => {
  const { mutate } = useCreateTodoMutation()
  return (
    <ToggleableModal
      modalProps={{
        title: '새 TODO 추가하기',
        size: '50vw',
      }}
      button={<CreateButton />}
    >
      <TodoForm button={<Button>제출</Button>} onSubmit={mutate} />
    </ToggleableModal>
  )
}
