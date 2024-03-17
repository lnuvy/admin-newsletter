export default function Layout({ children, keywordForm }: { children: React.ReactNode; keywordForm: React.ReactNode }) {
  return (
    <>
      {children}
      {keywordForm}
    </>
  )
}
