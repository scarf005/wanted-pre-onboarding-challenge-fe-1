import { Button } from '@mantine/core'
import { TodoFormProvider, useTodoform } from '../hooks'
import { InputContextField } from './InputField'
import { TodoInput } from 'types'
import { cloneElement } from 'react'

type Props = {
  button: JSX.Element
  onSubmit: (v: TodoInput) => void
}
export const TodoForm = ({ button, onSubmit }: Props) => {
  const form = useTodoform({
    initialValues: {
      title: '',
      content: '',
    },
  })

  return (
    <TodoFormProvider form={form}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <InputContextField />
        {cloneElement(button, { type: 'submit' })}
      </form>
    </TodoFormProvider>
  )
}
