import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Sign } from 'routes'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useAtomValue } from 'jotai'
import { tokenAtom } from 'atom'
import { EnforceAuth } from 'components'
import { AppShell, Header, Navbar, Text, Title } from '@mantine/core'
import { Home } from 'routes'
export const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <EnforceAuth>
        <Home />
      </EnforceAuth>
    ),
  },
  {
    path: '/auth/create',
    element: <Sign />,
  },
  {
    path: '/auth/login',
    element: <Sign />,
  },
])

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppShell
        padding='md'
        header={
          <Header height={40}>
            <Title>TODO</Title>
          </Header>
        }
      >
        <RouterProvider router={router} />
      </AppShell>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
