"use client"

import React from "react"
import { useQueryClient } from "@tanstack/react-query"
import keywordQueryKey from "@/app/_api/query-key/keyword"
import { Switch } from "@/app/_components/ui/switch"

const TestForm = (props: any) => {
  const queryClient = useQueryClient()

  const test = (result: any) => {
    queryClient.setQueryData(keywordQueryKey.list(), () => {
      return result
    })
  }

  return (
    <form
      action={async (form) => {
        const result = await props.createKeyword(form)
        test(result)
      }}
      className="flex flex-wrap items-center gap-4"
    >
      <input type="text" name="groupName" className="h-[40px] w-[300px] rounded-md border border-gray-300 px-4" />

      <div className="flex gap-2">
        <Switch name="is_enabled" />
        <p className="text-sm">키워드그룹 활성화</p>
      </div>
      <button type="submit" className="h-[40px] w-[100px] rounded-md bg-[#637BF4] text-white">
        추가
      </button>
    </form>
  )
}

export default TestForm
