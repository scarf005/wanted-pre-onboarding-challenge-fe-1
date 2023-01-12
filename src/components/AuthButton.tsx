import { useNavigate } from 'react-router-dom'
import { paths } from '../routes/paths'
import { Button } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { isLoggedInAtom } from 'atom'

export const AuthButton = () => {
  const isLoggedIn = useAtomValue(isLoggedInAtom)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(paths.login)
  }

  return isLoggedIn ? (
    <Button variant="subtle" onClick={handleLogout}>
      로그아웃
    </Button>
  ) : (
    <Button variant="subtle">login</Button>
  )
}
