import { redirect, useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { Button } from '@mantine/core'
import { paths } from 'routes/paths'
import { isSignedIn } from 'utils'

type ValueOf<T> = T[keyof T]

type Props = {
  path?: ValueOf<typeof paths>
  element: JSX.Element
}

export const RequireNoAuth = ({
  path = paths.root,
  element,
}: Props): JSX.Element => {
  const navigate = useNavigate()

  if (isSignedIn()) {
    navigate(path)
  }
  return element
}
