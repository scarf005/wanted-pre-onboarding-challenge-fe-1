import { TodoPreview } from 'components'
import { SimpleGrid, Skeleton, Stack, Textarea, Title } from '@mantine/core'
import { getTodoById, getTodos } from 'api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const todoQuery = (id: string) => ({
  queryKey: ['todos', id],
  queryFn: () => getTodoById(id),
})

export const Editor = () => {
  
}

export const Content = () => {
  const location = useLocation()
  const id = location.pathname.split('/').at(-1) as string

  const { data: todo, isSuccess } = useQuery(todoQuery(id))

  if (!isSuccess) {
    return <Skeleton height="80vh" />
  }

  return (
    <Stack>
      <Title>{todo.title}</Title>
      <Textarea />
    </Stack>
  )
}

export const Home = () => {
  return (
    <SimpleGrid cols={2}>
      <TodoPreview />
      <Content />
    </SimpleGrid>
  )
}
