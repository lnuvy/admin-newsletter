import Link from "next/link"
import { Card } from "./_components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E0E5F7]">
      <div className="flex w-full max-w-[1024px] flex-col gap-4">
        <Link href="/keywords">
          <Card className="w-full cursor-pointer p-10 hover:bg-gray-100">키워드 관리</Card>
        </Link>

        <Link href="/news-letters">
          <Card className="w-full cursor-pointer p-10 hover:bg-gray-100">뉴스레터 관리</Card>
        </Link>
      </div>
    </div>
  )
}
