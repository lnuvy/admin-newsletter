import WidthWrapper from "@/app/_components/layout/width-wrapper"

export default async function Layout({
  children,
  keywordForm,
}: {
  children: React.ReactNode
  keywordForm: React.ReactNode
}) {
  return (
    <WidthWrapper>
      {children}
      {keywordForm}
    </WidthWrapper>
  )
}
