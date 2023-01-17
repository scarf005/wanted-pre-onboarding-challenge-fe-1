import { paths } from './paths'
import { AppShell, Group, Header, Title } from '@mantine/core'
import { AuthButton, NotFound, RequireAuth } from 'components'
import { RequireNoAuth } from 'components'
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
    <RequireAuth>{element}</RequireAuth>
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
    element: (
      <RequireNoAuth>
        <Sign />
      </RequireNoAuth>
    ),
  },
  {
    path: paths.login,
    element: (
      <RequireNoAuth>
        <Sign />
      </RequireNoAuth>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
