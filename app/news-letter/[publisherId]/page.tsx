import React from "react"
import { putPublisher } from "@/app/_actions"
import newsLetterApi from "@/app/_api/news-letter"
import WidthWrapper from "@/app/_components/layout/width-wrapper"
import { NextPageProps } from "@/app/_types/next"
import { dateFormat } from "@/app/_utils/date-format"
import DetailTemplates from "./detail-templates"

interface PublisherDetailPageParams {
  publisherId: string
}

const PublisherDetailPage = async ({ params, searchParams }: NextPageProps<PublisherDetailPageParams>) => {
  const { publisherId } = params

  const publisher = await newsLetterApi.getAdminPublisher(publisherId)

  const keywords = await newsLetterApi.getAdminPublisherKeyword(publisherId)

  return (
    <WidthWrapper>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">
          {publisher?.name}
          <span className="ml-2 text-[16px]">{dateFormat(publisher?.created_at)}</span>
        </h1>
      </div>

      <div className="h-12" />

      <DetailTemplates action={putPublisher} initialData={publisher} />
    </WidthWrapper>
  )
}

export default PublisherDetailPage
