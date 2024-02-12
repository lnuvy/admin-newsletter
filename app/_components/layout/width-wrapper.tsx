import React, { PropsWithChildren } from "react"

const WidthWrapper = (props: PropsWithChildren) => {
  const { children } = props
  return <div className="bg-white max-w-[1200px] w-full px-14 py-20 my-7">{children}</div>
}

export default WidthWrapper
