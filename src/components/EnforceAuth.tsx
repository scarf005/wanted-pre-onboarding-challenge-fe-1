import { redirect, useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { Button } from '@mantine/core'
import { paths } from 'routes/paths'
import { isSignedIn } from 'utils'

export const EnforceAuth = ({
  children,
}: { children: JSX.Element }): JSX.Element => {
  const navigate = useNavigate()
  return isSignedIn() ? (
    children
  ) : (
    <Button onClick={() => navigate(paths.login)}>로그인해 주세요</Button>
  )
}
