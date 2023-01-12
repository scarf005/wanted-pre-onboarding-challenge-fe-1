import { redirect } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { isLoggedInAtom } from 'atom'
import { Button } from '@mantine/core'

export const EnforceAuth = ({
  children,
}: { children: JSX.Element }): JSX.Element =>
  useAtomValue(isLoggedInAtom) ? (
    children
  ) : (
    <Button onClick={() => redirect('/auth')}>로그인해 주세요</Button>
  )
