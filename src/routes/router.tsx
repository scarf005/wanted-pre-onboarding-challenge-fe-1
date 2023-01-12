import { createBrowserRouter } from 'react-router-dom'
import { Home, Sign } from 'routes'
import { paths } from './paths'
import { AppShell, Button, Group, Header, Title } from '@mantine/core'
import { AuthButton, EnforceAuth } from 'components'
import { UnAuthorizedOnly } from 'components/UnAuthorizedOnly'

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
    element: (
      <UnAuthorizedOnly>
        <Sign />
      </UnAuthorizedOnly>
    ),
  },
  {
    path: paths.login,
    element: (
      <UnAuthorizedOnly>
        <Sign />
      </UnAuthorizedOnly>
    ),
  },
])
