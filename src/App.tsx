import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Sign, Todo } from 'routes'
import { ReactQueryDevtools } from 'react-query/devtools'
import { atom, useAtomValue } from 'jotai'
import { tokenAtom } from 'atom'
export const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todo />,
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
      url: {import.meta.env.VITE_API_URL}
      token: {token}
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
