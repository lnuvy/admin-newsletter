"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import adminApi from "@/app/_api/admin"
import WidthWrapper from "@/app/_components/layout/width-wrapper"

const PublisherDetailPage = () => {
  const { publisherId } = useParams()
  const { data } = useQuery({
    queryKey: ["detail", publisherId],
    queryFn: () => adminApi.getAdminPublisher(publisherId as string),
  })

  return (
    <WidthWrapper>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">{data?.name}</h1>
      </div>

      {JSON.stringify(data)}
    </WidthWrapper>
  )
}

export default PublisherDetailPage
