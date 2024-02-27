import { useQuery } from "@tanstack/react-query"
import adminQueryKey from "@/app/_api/query-key/admin"

export const useKeywordGroup = () => {
  return useQuery({
    queryKey: adminQueryKey.keywordGroup.list(),
    queryFn: () => {
      return fetch("/api/keyword-group").then((res) => res.json())
    },
  })
}
