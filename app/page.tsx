import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "./_components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E0E5F7]">
      <div className="max-w-[1024px] w-full flex flex-col gap-4">
        <Link href="/">
          <Card className="w-full p-10 hover:bg-gray-100 cursor-pointer">배너 관리</Card>
        </Link>

        <Link href="/news-letters">
          <Card className="w-full p-10 hover:bg-gray-100 cursor-pointer">뉴스레터 관리</Card>
        </Link>
      </div>
    </div>
  )
}
