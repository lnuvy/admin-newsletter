import adminApi from "@/app/_api/admin"
import { AdminNewsLetterResponse } from "@/app/_api/admin/admin.type"
import { useInfiniteData } from "@/app/_hooks/use-infinite-data"

export const usePublisherList = () => {
  return useInfiniteData<AdminNewsLetterResponse>({
    queryKey: [""],
    queryFn: ({ pageParam = 1 }) => adminApi.getAdminPublisherList({ page: pageParam }),
  })
}
