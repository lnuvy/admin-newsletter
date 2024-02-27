"use client"

import React from "react"
import { useRouter } from "next/navigation"
import WidthWrapper from "../_components/layout/width-wrapper"
import { Button } from "../_components/ui/button"

const NewsLettersPage = () => {
  const router = useRouter()
  // const {} = useQuery({
  //   queryKey: "",
  //   queryFn: () => {},
  // })

  return (
    <WidthWrapper>
      <div className="flex items-center justify-between">
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
          <div key={index} className="flex items-center gap-2">
            <div className="flex w-full items-center bg-[#E0E5F7] px-5 py-4">
              <p className="w-10 text-[18px] font-semibold">{100 - index}</p>

              <div className="ml-2 size-12 bg-white">
                {/* 여기 이미지 */}
                {/* <Image /> */}
              </div>

              <div className="ml-4 flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <p className="text-[18px] font-semibold">아티클명</p>
                  <span className="text-[14px] font-medium text-[#A2ABC7]">퍼블리셔 명</span>
                </div>
                <p className="text-[16px]">디스크립션란</p>
              </div>
            </div>

            {/* edit, delete */}
            <Button className="!h-full bg-[#637BF4]">연필</Button>
            <Button className="!h-full bg-[#6D768E]">삭제</Button>
          </div>
        ))}
      </div>
    </WidthWrapper>
  )
}

export default NewsLettersPage
