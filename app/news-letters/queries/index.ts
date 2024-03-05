import adminApi from "@/app/_api/admin"
import { AdminNewsLetterResponse } from "@/app/_api/admin/admin.type"
import { useInfiniteData } from "@/app/_hooks/use-infinite-data"

export const usePublisherList = (params: any) => {
  return useInfiniteData<AdminNewsLetterResponse>({
    queryKey: ["publisher-list", params],
    queryFn: ({ pageParam = 1 }) => {
      return adminApi.getAdminPublisherList({ page: pageParam, ...params })
    },
  })
}
