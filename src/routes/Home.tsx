import { SimpleGrid } from '@mantine/core'
import { TodoPreview } from 'components'
import { Content } from '../components/todo/Content'

export const Home = () => {
  return (
    <>
      <SimpleGrid cols={2}>
        <TodoPreview />
        <Content />
      </SimpleGrid>
    </>
  )
}
