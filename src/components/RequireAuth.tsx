import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { paths } from 'routes/paths'
import { isSignedIn } from 'utils'

export const RequireAuth = ({
  children,
}: { children: JSX.Element }): JSX.Element => {
  const navigate = useNavigate()
  return isSignedIn() ? (
    children
  ) : (
    <Button onClick={() => navigate(paths.login)}>로그인해 주세요</Button>
  )
}
