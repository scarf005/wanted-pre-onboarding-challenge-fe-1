import { useNavigate } from 'react-router-dom'
import { paths } from '../routes/paths'
import { Button } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { isLoggedInAtom } from 'atom'

export const AuthButton = () => {
  const isLoggedIn = useAtomValue(isLoggedInAtom)
  const navigate = useNavigate()

  return isLoggedIn ? (
    <Button variant="subtle" onClick={() => navigate(paths.login)}>
      logout
    </Button>
  ) : (
    <Button variant="subtle">login</Button>
  )
}
