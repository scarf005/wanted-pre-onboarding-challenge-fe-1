import { createBrowserRouter } from 'react-router-dom'
import { Home, Sign } from 'routes'
import { paths } from './paths'
import { AppShell, Group, Header, Title } from '@mantine/core'
import { AuthButton, EnforceAuth } from 'components'

export const AppShelled = ({ foo }: { foo: JSX.Element }) => (
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
    <EnforceAuth>{foo}</EnforceAuth>
  </AppShell>
)

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <AppShelled foo={<Home />} />,
  },
  {
    path: paths.todoItem,
    element: <AppShelled foo={<Home />} />,
  },
  {
    path: paths.signIn,
    element: <Sign />,
  },
  {
    path: paths.login,
    element: <Sign />,
  },
])
