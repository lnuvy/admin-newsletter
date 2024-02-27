"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useKeywordGroup } from "./queries"
import WidthWrapper from "../_components/layout/width-wrapper"
import { Button } from "../_components/ui/button"

const KeywordsPage = () => {
  const router = useRouter()

  const { data: groupList } = useKeywordGroup()

  return (
    <WidthWrapper>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">
          키워드 관리 <span className="text-[#2141E5]">{groupList.length}</span>
        </h1>

        <Button className="" onClick={() => router.push("/news-letter/create")}>
          등록
        </Button>
      </div>

      {JSON.stringify(groupList)}
    </WidthWrapper>
  )
}

export default KeywordsPage
