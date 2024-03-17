"use client"

import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useParams } from "next/navigation"
import { AdminNewsLetterResponse } from "@/app/_api/news-letter.type"
import ClientForm from "@/app/_components/helpers/client-form"
import { Button } from "@/app/_components/ui/button"
import PublisherForm from "../form/publisher-form"

interface DetailTemplatesProps {
  action: any
  initialData: AdminNewsLetterResponse
}

const DetailTemplates = (props: DetailTemplatesProps) => {
  const { action, initialData } = props

  const { publisherId } = useParams()

  const methods = useForm({
    defaultValues: {
      ...initialData,
      is_enabled: initialData.is_enabled == 1 ? true : false,
    },
  })

  return (
    <FormProvider {...methods}>
      <ClientForm
        action={action}
        successCb={() => {
          toast.success("수정되었습니다.")
        }}
      >
        <input type="hidden" name="publisherId" value={publisherId as string} />
        <PublisherForm isEdit />
        <div className="h-10" />
        <div className="flex justify-end">
          <Button type="submit" className="w-[300px]" size={"lg"}>
            수정하기
          </Button>
        </div>
      </ClientForm>
    </FormProvider>
  )
}

export default DetailTemplates
