import { useMutation, useQuery } from 'react-query'
import { createTodo, getTodos } from 'api'
import { Button, Stack, Text } from '@mantine/core'
import { queryClient } from 'App'
import { ErrorResponse, TodoResponse } from 'types'
import { redirect, useNavigate } from 'react-router-dom'

export const Todo = () => {
  const { data, isError } = useQuery('todos', getTodos)

  const mutation = useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  })

  if (isError) {
    return (
      <Text>
        로그인해주세요
        <Button onClick={() => redirect('/auth')}>로그인하기</Button>
      </Text>
    )
  }

  return (
    <>
      <Stack>
        TODO입니다
        {data?.map((todo) => (
          <Text key={todo.id}>
            {todo.title} {todo.content}
          </Text>
        ))}
      </Stack>
      <div>
        {mutation.isLoading ? (
          'Adding todo...'
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error as string}</div>
            ) : null}

            {mutation.isSuccess ? <div>Todo added!</div> : null}

            <button
              onClick={() => {
                mutation.mutate({ title: 'Do Laundry', content: 'foo' })
              }}
            >
              Create Todo
            </button>
          </>
        )}
      </div>
    </>
  )
}
