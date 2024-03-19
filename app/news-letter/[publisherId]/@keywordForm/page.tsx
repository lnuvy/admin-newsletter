import React from "react"
import newsLetterApi from "@/app/_api/news-letter"
import ClientForm from "@/app/_components/helpers/client-form"
import { NextPageProps } from "@/app/_types/next"
import KeywordsForm from "../../form/keywords-form"

const KeywordFormPage = async ({ params, searchParams }: NextPageProps<{ publisherId: string }>) => {
  const { publisherId } = params

  const keyword = await newsLetterApi.getAdminPublisherKeyword(publisherId as string)

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">
          키워드 관리
          <span className="ml-2 text-[16px]">{"테스트"}</span>
        </h1>
      </div>

      <div className="h-12" />

      <ClientForm
        action={async (formData) => {
          "use server"
          console.log("formData", formData)
        }}
      >
        <KeywordsForm initialData={keyword} />
      </ClientForm>
    </>
  )
}

export default KeywordFormPage
