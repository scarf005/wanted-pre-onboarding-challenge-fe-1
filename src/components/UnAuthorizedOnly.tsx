import { redirect, useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { isLoggedInAtom } from 'atom'
import { Button } from '@mantine/core'
import { paths } from 'routes/paths'

type ValueOf<T> = T[keyof T]

type Props = {
  path: ValueOf<typeof paths>
  element: JSX.Element
}

export const UnAuthorizedOnly = ({
  path = paths.root,
  element,
}: Props): JSX.Element => {
  const navigate = useNavigate()

  if (useAtomValue(isLoggedInAtom)) {
    navigate(path)
  }
  return element
}
