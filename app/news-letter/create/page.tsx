"use client"

import WidthWrapper from "@/app/_components/layout/width-wrapper"
import { Button } from "@/app/_components/ui/button"
import { Checkbox } from "@/app/_components/ui/checkbox"
import { Form, FormField, FormItem } from "@/app/_components/ui/form"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import React from "react"
import { useForm } from "react-hook-form"

const NewsLetterCreatePage = () => {
  const methods = useForm()

  return (
    <WidthWrapper>
      <h1 className="text-[30px] font-bold">뉴스레터 등록하기</h1>

      <div className="h-12" />

      <Form {...methods}>
        <form className="flex flex-col gap-4">
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-center">
                <Label className="min-w-[150px] text-[18px] font-semibold">
                  뉴스레터명 <span className="text-[#2141E5]">*</span>
                </Label>
                <Input className="w-[400px]" placeholder="뉴스레터명을 입력해주세요" {...field} />
              </FormItem>
            )}
          />

          <FormField
            name="publisher"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-center">
                <Label className="min-w-[150px] text-[18px] font-semibold">
                  발행인 <span className="text-[#2141E5]">*</span>
                </Label>
                <Input className="w-[400px]" placeholder="발행인을 입력해주세요" {...field} />
              </FormItem>
            )}
          />

          <FormField
            name="publisher"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-center">
                <Label className="min-w-[150px] text-[18px] font-semibold">
                  소개글 <span className="text-[#2141E5]">*</span>
                </Label>
                <Input className="" placeholder="소개글을 입력해 주세요(띄어쓰기 포함 53자 이내)" {...field} />
              </FormItem>
            )}
          />

          <div className="h-10" />

          <div className="flex justify-between gap-10">
            <FormField
              name="thumbnail"
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <Label className="min-w-[150px] text-[18px] font-semibold">메인 이미지</Label>

                  <Label htmlFor="thumbnail" className="">
                    <div className="w-[250px] aspect-video bg-gray-100 rounded-[12px]"></div>
                  </Label>
                  <Input id="thumbnail" type="file" className="hidden" placeholder="썸네일을 입력해주세요" {...field} />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4 w-full">
              <FormField
                name="period"
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center">
                    <Label className="min-w-[150px] text-[18px] font-semibold">발행 주기</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent className="flex-1">
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                name="branch"
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center">
                    <Label className="min-w-[150px] text-[18px] font-semibold">분야 키워드</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent className="flex-1">
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                name="career"
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center">
                    <Label className="min-w-[150px] text-[18px] font-semibold">직무 키워드</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent className="flex-1">
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                name="purpose"
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center">
                    <Label className="min-w-[150px] text-[18px] font-semibold">목적 키워드</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                      <SelectContent className="flex-1">
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            name="fee"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-center">
                <Label className="min-w-[150px] text-[18px] font-semibold">구독비</Label>

                <FormField
                  name="items"
                  render={() => {
                    return (
                      <FormItem className="flex gap-2 items-center">
                        <Checkbox {...field} />
                        <Label className="text-[18px] font-semibold">무료</Label>
                      </FormItem>
                    )
                  }}
                />
                <FormField
                  // key={item.id}
                  // control={form.control}
                  name="items"
                  render={() => {
                    return (
                      <FormItem className="flex gap-2 items-center">
                        <Checkbox {...field} />
                        <Label className="text-[18px] font-semibold">유료</Label>
                      </FormItem>
                    )
                  }}
                />
              </FormItem>
            )}
          />

          <FormField
            name="link"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-center">
                <Label className="min-w-[150px] text-[18px] font-semibold">구독하기 링크</Label>
                <Input className="" placeholder="URL을 입력해주세요" {...field} />
              </FormItem>
            )}
          />

          <div className="h-10" />
          <div className="flex justify-end">
            <Button type="submit" className="w-[300px]" size={"lg"}>
              등록하기
            </Button>
          </div>
        </form>
      </Form>
    </WidthWrapper>
  )
}

export default NewsLetterCreatePage
