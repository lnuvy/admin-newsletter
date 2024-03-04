"use client"

import React from "react"
import { Button } from "@/app/_components/ui/button"
import { useKeywordGroupQuery } from "./queries"

const ClientTemplate = () => {
  const { data: groupList } = useKeywordGroupQuery()

  return (
    <div className="flex flex-wrap gap-4">
      {groupList?.map((group) => {
        return (
          <div key={group.id} className="flex gap-2">
            <Button>{group.name}</Button>
          </div>
        )
      })}
    </div>
  )
}

export default ClientTemplate
