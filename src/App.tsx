import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Sign, TodoPreview } from 'routes'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useAtomValue } from 'jotai'
import { tokenAtom } from 'atom'
import { EnforceAuth } from 'EnforceAuth'
import { SimpleGrid } from '@mantine/core'
export const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <EnforceAuth>
        <SimpleGrid cols={2}>
          <TodoPreview />
        </SimpleGrid>
      </EnforceAuth>
    ),
  },
  {
    path: '/auth',
    element: <Sign />,
  },
])

export const App = () => {
  const token = useAtomValue(tokenAtom)
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
