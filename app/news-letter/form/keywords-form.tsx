"use client"

import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { AdminKeywordResponse } from "@/app/_api/keyword.type"
import newsLetterApi from "@/app/_api/news-letter"
import KeywordItem from "./keyword-item"

/**
 * 키워드 퍼블리셔 객체에 연결하는 폼
 */
const KeywordsForm = () => {
  const [data, setData] = useState<AdminKeywordResponse[]>([])
  const { publisherId } = useParams()

  const fetchData = async () => {
    const keywords = await newsLetterApi.getAdminPublisherKeyword(publisherId as string)
    setData(keywords)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return <></>

  return (
    <div className="">
      {data?.map((keyword: AdminKeywordResponse) => {
        return <KeywordItem key={keyword.id} keyword={keyword} />
      })}
    </div>
  )
}

export default KeywordsForm
