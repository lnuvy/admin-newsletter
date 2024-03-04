import React from "react"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import Link from "next/link"
import keywordApi from "@/app/_api/keyword"
import keywordQueryKey from "@/app/_api/query-key/keyword"
import { Button } from "@/app/_components/ui/button"
import getQueryClient from "@/app/_utils/query-client"
import ClientTemplate from "./client-template"
import WidthWrapper from "../../_components/layout/width-wrapper"

const KeywordsPage = async () => {
  const queryClient = getQueryClient()

  const data = await keywordApi.getAdminKeywordGroup()

  await queryClient.prefetchQuery({
    queryKey: keywordQueryKey.list(),
    queryFn: () => data,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <WidthWrapper>
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] font-bold">
            키워드 관리 <span className="text-[#2141E5]">{data?.length}</span>
          </h1>

          <Link href="/keyword/create">
            <Button className="">등록</Button>
          </Link>
        </div>

        <div className="h-12" />
        <ClientTemplate />
      </WidthWrapper>
    </HydrationBoundary>
  )
}

export default KeywordsPage
