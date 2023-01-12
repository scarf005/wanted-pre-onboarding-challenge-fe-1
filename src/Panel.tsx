import { TodoPreview } from 'routes'
import { SimpleGrid, Stack, Textarea, Title } from '@mantine/core'

export const Home = () => (
  <SimpleGrid cols={2}>
    <TodoPreview />
    <Stack>
      <Title>foo</Title>
      <Textarea>area</Textarea>
    </Stack>
  </SimpleGrid>
)
