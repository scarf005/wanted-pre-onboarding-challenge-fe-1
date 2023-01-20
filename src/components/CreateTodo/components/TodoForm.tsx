import { TodoFormProvider, todoFormOptions, useTodoform } from '../hooks'
import { InputContextField } from './InputField'
import { Button } from '@mantine/core'
import { isNotEmpty } from '@mantine/form'
import { cloneElement } from 'react'
import { TodoInput } from 'types'

type Props = {
  button: JSX.Element
  onSubmit: (v: TodoInput) => void
}
export const TodoForm = ({ button, onSubmit }: Props) => {
  const form = useTodoform(todoFormOptions)
  const ButtonImpl = () =>
    cloneElement(button, { type: 'submit', disabled: !form.isValid() })

  return (
    <TodoFormProvider form={form}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <InputContextField />
        <ButtonImpl />
      </form>
    </TodoFormProvider>
  )
}
