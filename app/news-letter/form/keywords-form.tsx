"use client"

import React, { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { AdminKeywordResponse } from "@/app/_api/keyword.type"
import KeywordItem from "./keyword-item"

interface KeywordsFormProps {
  initialData: AdminKeywordResponse[]
}

/**
 * 키워드 퍼블리셔 객체에 연결하는 폼
 */
const KeywordsForm = (props: KeywordsFormProps) => {
  const { initialData } = props
  const [data] = useState<AdminKeywordResponse[]>(initialData)

  const defaultValues = data.reduce((acc, keyword) => {
    return {
      ...acc,
      [keyword.name]: keyword.id,
    }
  }, {})

  const methods = useForm({
    defaultValues,
  })

  if (!data) return <></>

  return (
    <FormProvider {...methods}>
      <div className="">
        {data?.map((keyword: AdminKeywordResponse) => {
          return <KeywordItem key={keyword.id} keyword={keyword} />
        })}
      </div>
    </FormProvider>
  )
}

export default KeywordsForm
