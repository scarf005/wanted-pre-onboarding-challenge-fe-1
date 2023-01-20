import { Content } from '../components/todo/Content'
import { Group, SimpleGrid, Stack, Title } from '@mantine/core'
import { TodoPreview } from 'components'
import { TodoCreateModal } from 'components/CreateTodo'

export const Home = () => {
  return (
    <SimpleGrid cols={2}>
      <Stack>
        <Group position='apart'>
          <Title order={2}>todos</Title>
          <TodoCreateModal />
        </Group>
        <TodoPreview />
      </Stack>
      <Content />
    </SimpleGrid>
  )
}
