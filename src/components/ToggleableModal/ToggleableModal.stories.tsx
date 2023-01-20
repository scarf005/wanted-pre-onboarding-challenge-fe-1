import { TodoForm } from 'components/CreateTodo/components/TodoForm'
import { ToggleableModal } from './ToggleableModal'
import { Button, Group } from '@mantine/core'

export const TodoEditModalStory = () => (
  <ToggleableModal
    modalProps={{ title: '새 TODO 추가하기' }}
    button={<Button>새 TODO 추가하기</Button>}
  >
    <TodoForm
      button={<Button>제출</Button>}
      onSubmit={(v) => alert(`sent ${JSON.stringify(v)}`)}
    />
  </ToggleableModal>
)
