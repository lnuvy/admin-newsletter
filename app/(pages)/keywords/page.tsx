import React from "react"
import dayjs from "dayjs"
import { revalidateTag } from "next/cache"
import Link from "next/link"
import keywordKey from "@/app/_api/fetch-key/keyword"
import keywordApi from "@/app/_api/keyword"
import { Button } from "@/app/_components/ui/button"

import { cn } from "@/app/_lib/utils"
import WidthWrapper from "../../_components/layout/width-wrapper"

const KeywordsPage = async () => {
  const groupList = await keywordApi.getAdminKeywordGroup()

  // 키워드 그룹삭제
  const deleteKeywordGroup = async (formData: FormData) => {
    "use server"

    const groupId = Number(formData.get("groupId"))
    await keywordApi.deleteAdminKeywordGroup(groupId)
    revalidateTag(keywordKey.list())
  }

  return (
    <WidthWrapper>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">
          키워드 관리 <span className="text-[#2141E5]">{groupList?.length}</span>
        </h1>

        <Link href="/keyword/create">
          <Button className="">등록</Button>
        </Link>
      </div>

      <div className="h-12" />
      {groupList?.map((group) => {
        return (
          <div key={group.id} className="grid grid-cols-4 items-center gap-2 border-b border-gray-200 py-2">
            <Link href={`/keyword/${group.id}`}>
              <p className="text-lg hover:underline">{group.name}</p>
            </Link>

            <div
              className={cn("w-fit px-1.5 py-[2px] text-sm", {
                "bg-green-200": group.is_enabled,
                "bg-red-200": !group.is_enabled,
              })}
            >
              {group.is_enabled ? "활성화" : "비활성화"}
            </div>

            <div className="">등록일: {dayjs(group.created_at).format("YYYY.MM.DD")}</div>

            <div className="flex gap-2">
              <Button variant="outline" className="">
                수정
              </Button>

              <form action={deleteKeywordGroup}>
                <input type="hidden" name="groupId" value={group.id} />
                <Button type="submit" variant="destructive" className="">
                  삭제
                </Button>
              </form>
            </div>
          </div>
        )
      })}
    </WidthWrapper>
  )
}

export default KeywordsPage
