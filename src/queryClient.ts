import { QueryCache, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => alert(`An error has occurred: ${JSON.stringify(error)}`),
  }),
})
