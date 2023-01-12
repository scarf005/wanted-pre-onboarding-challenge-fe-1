import { TodoPreview } from 'components'
import { SimpleGrid, Stack, Textarea, Title } from '@mantine/core'
import { getTodos } from 'api'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Editor = () => {
  const { data: todos, status } = useQuery('todos', getTodos)
  const location = useLocation()

  // const [text, setText] = useState()

  return (
    <Stack>
      <Title>{location.pathname}</Title>
      <Textarea />
    </Stack>
  )
}

export const Home = () => {
  return (
    <SimpleGrid cols={2}>
      <TodoPreview />
      <Editor />
    </SimpleGrid>
  )
}
