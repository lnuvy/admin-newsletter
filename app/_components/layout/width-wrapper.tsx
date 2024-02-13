import React, { PropsWithChildren } from "react"

const WidthWrapper = (props: PropsWithChildren) => {
  const { children } = props
  return <div className="my-7 w-full max-w-[1200px] bg-white px-14 py-20">{children}</div>
}

export default WidthWrapper
