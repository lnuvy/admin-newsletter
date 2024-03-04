import React from "react"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import keywordKey from "@/app/_api/fetch-key/keyword"
import keywordApi from "@/app/_api/keyword"
import WidthWrapper from "@/app/_components/layout/width-wrapper"
import { Button } from "@/app/_components/ui/button"
import { Switch } from "@/app/_components/ui/switch"
import { NextPageProps } from "@/app/_types/next"
import KeywordEditable from "./keyword-editable"

interface KeywordDetailPageParams {
  groupId: string
}

const KeywordDetailPage = async ({ params, searchParams: _searchParams }: NextPageProps<KeywordDetailPageParams>) => {
  const { groupId: _groupId } = params
  const groupId = Number(_groupId)

  const keywords = await keywordApi.getAdminKeyword(groupId)

  const list = await keywordApi.getAdminKeywordGroup()
  const current = list.find((item) => item.id === groupId)

  // 키워드 그룹삭제
  const deleteKeywordGroup = async () => {
    "use server"
    await keywordApi.deleteAdminKeywordGroup(groupId)
    revalidateTag(keywordKey.list())
    revalidatePath(`/keyword/${groupId}`)
    redirect("/keywords")
  }

  // 키워드 추가
  const createKeyword = async (formData: FormData) => {
    "use server"
    const payload = {
      name: formData.get("keyword_name") as string,
      is_enabled: formData.get("is_enabled") === "on" ? true : false,
    }

    await keywordApi.postAdminKeyword({ groupId, payload })

    revalidateTag(keywordKey.detail(groupId))
  }

  // 키워드 수정
  const putKeyword = async (id: number, formData: FormData) => {
    "use server"
    const payload = {
      name: formData.get("keyword_name") as string,
      is_enabled: formData.get("is_enabled") === "on" ? true : false,
    }

    await keywordApi.putAdminKeyword({ groupId, keywordId: id, payload })

    revalidateTag(keywordKey.detail(groupId))
  }

  // 키워드 삭제
  const deleteKeyword = async (id: number) => {
    "use server"
    await keywordApi.deleteAdminKeyword({ groupId, keywordId: id })
    revalidateTag(keywordKey.detail(groupId))
  }

  return (
    <WidthWrapper>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">
          {current?.name} 수정
          {/* <span className="text-[#2141E5]">{groupList?.length}</span> */}
        </h1>

        <form action={deleteKeywordGroup} method="delete">
          <input type="hidden" name="groupId" value={groupId} />
          <Button variant="destructive" className="" onClick={deleteKeywordGroup}>
            삭제
          </Button>
        </form>
      </div>

      <div className="h-12" />

      {keywords?.map((keyword) => {
        return (
          <KeywordEditable key={keyword.id} keyword={keyword} deleteAction={deleteKeyword} putAction={putKeyword} />
        )
      })}

      <div className="h-12" />

      {/* 추가 */}

      <form action={createKeyword} className="flex flex-wrap items-center gap-4">
        <input type="text" name="keyword_name" className="h-[40px] w-[300px] rounded-md border border-gray-300 px-4" />

        <div className="flex gap-2">
          <Switch name="is_enabled" defaultChecked />
          <p className="text-sm">키워드 활성화</p>
        </div>
        <button type="submit" className="h-[40px] w-[100px] rounded-md bg-[#637BF4] text-white">
          추가
        </button>
      </form>
    </WidthWrapper>
  )
}

export default KeywordDetailPage
