import { redirect } from 'react-router-dom'
import { atom, useAtomValue } from 'jotai'
import { tokenAtom } from 'atom'
import { Button } from '@mantine/core'

const isLoggedInAtom = atom((get) => get(tokenAtom) !== '')
export const EnforceAuth = ({
  children,
}: { children: JSX.Element }): JSX.Element =>
  useAtomValue(isLoggedInAtom) ? (
    children
  ) : (
    <Button onClick={() => redirect('/auth')}>로그인해 주세요</Button>
  )
