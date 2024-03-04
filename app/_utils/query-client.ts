import { cache } from "react"
import { QueryClient } from "@tanstack/react-query"

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchOnWindowFocus: false,
        },
      },
    }),
)

export default getQueryClient
