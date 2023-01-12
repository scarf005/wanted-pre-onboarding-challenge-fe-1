import { TodoPreview } from 'components'
import { SimpleGrid, Stack, Textarea, Title } from '@mantine/core'

export const Home = () => {
  return (
    <SimpleGrid cols={2}>
      <TodoPreview />
      <Stack>
        <Title>foo</Title>
        <Textarea />
      </Stack>
    </SimpleGrid>
  )
}
