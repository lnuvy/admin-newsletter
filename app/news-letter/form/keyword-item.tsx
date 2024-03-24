"use client"

import React, { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import keywordApi from "@/app/_api/keyword"
import { AdminKeywordGroupResponse, AdminKeywordResponse } from "@/app/_api/keyword.type"
import { FormField, FormItem } from "@/app/_components/ui/form"
import { Label } from "@/app/_components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { useInitialDataContext } from "../[publisherId]/context/initial-data-context"

interface KeywordItemProps {
  keywordGroup: AdminKeywordGroupResponse
}

const KeywordItem = (props: KeywordItemProps) => {
  const { keywordGroup } = props

  const [data, setData] = useState<AdminKeywordResponse[]>([])

  const { control, watch } = useFormContext()
  const fetchData = async () => {
    const keywordList = await keywordApi.getAdminKeyword(keywordGroup.id)
    setData(keywordList)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const { keyword } = useInitialDataContext()

  return (
    <FormField
      key={keywordGroup.id}
      name={keywordGroup.name}
      control={control}
      render={({ field }) => {
        const currentKeyword = keyword?.find((keyword) => keyword.keyword_group_id === keywordGroup.id)
        return (
          <FormItem className="flex items-center gap-2">
            <Label className="min-w-[150px] text-[18px] font-semibold">{keywordGroup.name}</Label>
            <Select onValueChange={field.onChange} defaultValue={`${currentKeyword?.id}`}>
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
        )
      }}
    />
  )
}

export default KeywordItem
