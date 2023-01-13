import { paths } from './paths'
import { AppShell, Group, Header, Title } from '@mantine/core'
import { AuthButton, EnforceAuth as SignedInOnly } from 'components'
import { UnAuthorizedOnly as SignedOutOnly } from 'components/UnAuthorizedOnly'
import { createBrowserRouter } from 'react-router-dom'
import { Home, Sign } from 'routes'

export const AppShelled = ({ element }: { element: JSX.Element }) => (
  <AppShell
    padding='md'
    header={
      <Header height={40}>
        <Group position='apart'>
          <Title>TODO</Title>
          <AuthButton />
        </Group>
      </Header>
    }
  >
    <SignedInOnly>{element}</SignedInOnly>
  </AppShell>
)

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <AppShelled element={<Home />} />,
  },
  {
    path: paths.todoItem,
    element: <AppShelled element={<Home />} />,
  },
  {
    path: paths.signIn,
    element: <SignedOutOnly element={<Sign />} />,
  },
  {
    path: paths.login,
    element: <SignedOutOnly element={<Sign />} />,
  },
])
