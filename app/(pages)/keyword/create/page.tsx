import React from "react"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import keywordApi from "@/app/_api/keyword"
import keywordQueryKey from "@/app/_api/query-key/keyword"
import WidthWrapper from "@/app/_components/layout/width-wrapper"
import { Switch } from "@/app/_components/ui/switch"
import getQueryClient from "@/app/_utils/query-client"

const KeywordCreatePage = async () => {
  const queryClient = getQueryClient()

  const data = await keywordApi.getAdminKeywordGroup()

  await queryClient.prefetchQuery({
    queryKey: keywordQueryKey.list(),
    queryFn: () => data,
  })

  const createKeyword = async (formData: FormData) => {
    "use server"

    const payload = {
      name: formData.get("groupName"),
      is_enabled: formData.get("is_enabled") === "on" ? true : false,
    }

    const res = await fetch(`http://localhost:3600/admin/keyword-group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    const data = await res.json()

    queryClient.setQueryData(keywordQueryKey.list(), () => {
      return data
    })
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WidthWrapper>
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] font-bold">키워드그룹 추가</h1>
        </div>

        <div className="h-12" />

        <form action={createKeyword} className="flex flex-wrap items-center gap-4">
          <input type="text" name="groupName" className="h-[40px] w-[300px] rounded-md border border-gray-300 px-4" />

          <div className="flex gap-2">
            <Switch name="is_enabled" />
            <p className="text-sm">키워드그룹 활성화</p>
          </div>
          <button type="submit" className="h-[40px] w-[100px] rounded-md bg-[#637BF4] text-white">
            추가
          </button>
        </form>

        {/* <TestForm createKeyword={createKeyword} /> */}
      </WidthWrapper>
    </HydrationBoundary>
  )
}

export default KeywordCreatePage
