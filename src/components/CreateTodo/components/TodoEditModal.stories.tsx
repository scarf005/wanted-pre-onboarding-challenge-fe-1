import { Button, Group, Modal, TextInput, Textarea } from '@mantine/core'
import { useState } from 'react'
import { TodoForm } from './TodoForm'

export const TodoEditModal = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='새 TODO 추가하기'
      >
        <TodoForm
          button={<Button>추가하기</Button>}
          onSubmit={(v) => alert(`sent ${JSON.stringify(v)}`)}
        />
      </Modal>

      <Group position='right'>
        <Button onClick={() => setOpened(true)}>새 TODO 추가하기</Button>
      </Group>
    </>
  )
}
