"use client"

import { useQuery } from "@tanstack/react-query"
import React from "react"
import WidthWrapper from "../_components/layout/width-wrapper"
import { Button } from "../_components/ui/button"
import { useRouter } from "next/navigation"

const NewsLettersPage = () => {
  // const {} = useQuery({})

  const router = useRouter()

  return (
    <WidthWrapper>
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold">
          리스트 관리 <span className="text-[#2141E5]">{100}</span>
        </h1>

        <Button className="" onClick={() => router.push("/news-letter/create")}>
          등록
        </Button>
      </div>

      <div className="h-12" />

      <div className="flex flex-col gap-3">
        {[...new Array(10)].map((_, index) => (
          <div key={index} className="flex gap-2 items-center">
            <div className="px-5 py-4 flex bg-[#E0E5F7] w-full items-center">
              <p className="text-[18px] font-semibold w-10">{100 - index}</p>

              <div className="size-12 bg-white ml-2">
                {/* 여기 이미지 */}
                {/* <Image /> */}
              </div>

              <div className="flex flex-col gap-1 ml-4">
                <div className="flex gap-1 items-center">
                  <p className="text-[18px] font-semibold">아티클명</p>
                  <span className="text-[14px] font-medium text-[#A2ABC7]">퍼블리셔 명</span>
                </div>
                <p className="text-[16px]">디스크립션란</p>
              </div>
            </div>

            {/* edit, delete */}
            <Button className="bg-[#637BF4] !h-full">연필</Button>
            <Button className="bg-[#6D768E] !h-full">삭제</Button>
          </div>
        ))}
      </div>
    </WidthWrapper>
  )
}

export default NewsLettersPage
