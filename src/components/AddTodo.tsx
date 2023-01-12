import { useMutation } from '@tanstack/react-query'
import { createTodo } from 'api'
import { queryClient } from 'App'

const AddTodo = () => {
  const mutation = useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  return (
    <div>
      {mutation.isLoading ? (
        'Loading...'
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
  )
}
