import { Modal } from '@mantine/core'
import {
  ComponentProps,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from 'react'

type ModalProps = { title: ReactNode } & Omit<
  ComponentProps<typeof Modal>,
  'opened' | 'onClose' | 'title'
>

type Submittable<T> = ReactElement<{ onSubmit: (v: T) => void }>

type Props<T> = {
  /** additional props including mandatory title for Mantine Modal. */
  modalProps: ModalProps
  /** button to open the modal. it must accept `prop` as parameter. */
  button: ReactElement
  /** modal content to render. it will close the modal after `onSubmit`. */
  children: Submittable<T>
}

export const ToggleableModal = <T,>({
  modalProps,
  button,
  children,
}: Props<T>) => {
  const [opened, setOpened] = useState(false)
  const ButtonImpl = () =>
    cloneElement(button, { onClick: () => setOpened(true) })
  const FormImpl = () =>
    cloneElement(children, {
      onSubmit: (value: T) => {
        children.props.onSubmit(value)
        setOpened(false)
      },
    })

  return (
    <>
      <Modal {...modalProps} opened={opened} onClose={() => setOpened(false)}>
        <FormImpl />
      </Modal>
      <ButtonImpl />
    </>
  )
}
