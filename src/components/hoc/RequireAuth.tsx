import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { paths } from 'routes/paths'
import { isSignedIn } from 'utils'

type Props = {
  children: JSX.Element
}
export const RequireAuth = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  return isSignedIn() ? (
    children
  ) : (
    <Button onClick={() => navigate(paths.login)}>로그인해 주세요</Button>
  )
}
