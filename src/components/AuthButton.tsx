import { useNavigate } from 'react-router-dom'
import { paths } from '../routes/paths'
import { Button } from '@mantine/core'
import { isSignedIn } from 'utils'

export const AuthButton = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(paths.login)
  }

  return isSignedIn() ? (
    <Button variant="subtle" onClick={handleLogout}>
      ๋ก๊ทธ์์
    </Button>
  ) : (
    <Button variant="subtle">login</Button>
  )
}
