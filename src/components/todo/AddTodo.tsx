import { useCreateTodoMutation } from 'queries'

const AddTodo = () => {
  const { isLoading, isError, isSuccess, error, mutate } =
    useCreateTodoMutation()
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {isError ? <div>An error occurred: {error as string}</div> : null}

          {isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutate({ title: 'Do Laundry', content: 'foo' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
