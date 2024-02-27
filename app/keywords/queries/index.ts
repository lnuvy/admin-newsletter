import { useQuery } from "@tanstack/react-query"
import adminApi from "@/app/_api/admin"
import adminQueryKey from "@/app/_api/query-key/admin"

export const useKeywordGroup = () => {
  return useQuery({
    queryKey: adminQueryKey.keywordGroup.list(),
    queryFn: () => adminApi.getAdminKeywordGroup(),
  })
}
