"use client"

import React, { useEffect, useState } from "react"
import keywordApi from "@/app/_api/keyword"
import { AdminKeywordResponse } from "@/app/_api/keyword.type"
import { FormField, FormItem } from "@/app/_components/ui/form"
import { Label } from "@/app/_components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"

interface KeywordItemProps {
  keyword: AdminKeywordResponse
}

const KeywordItem = (props: KeywordItemProps) => {
  const { keyword } = props

  const [data, setData] = useState<AdminKeywordResponse[]>([])

  const fetchData = async () => {
    const keywordList = await keywordApi.getAdminKeyword(keyword.id)
    setData(keywordList)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <FormField
      key={keyword.id}
      name={keyword.name}
      render={() => (
        <FormItem className="flex items-center gap-2">
          <Label className="min-w-[150px] text-[18px] font-semibold">{keyword.name}</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent className="flex-1">
              {data?.map((item) => {
                return (
                  <SelectItem key={item.id} value={`${item.id}`}>
                    {item.name}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}

export default KeywordItem
