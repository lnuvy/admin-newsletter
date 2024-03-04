import { useQuery } from "@tanstack/react-query"
import keywordApi from "@/app/_api/keyword"
import keywordQueryKey from "@/app/_api/query-key/keyword"

export const useKeywordGroupQuery = () => {
  return useQuery({
    queryKey: keywordQueryKey.list(),
    queryFn: () => keywordApi.getAdminKeywordGroup(),
  })
}
