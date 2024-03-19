"use client"

import { AdminNewsLetterResponse } from "@/app/_api/news-letter.type"
import { createDynamicContext } from "@/app/_context/create-dynamic-context"

interface InitialDataContextProps {
  publisher: AdminNewsLetterResponse
  keyword: any
}

const { ContextProvider, useContext } = createDynamicContext<InitialDataContextProps>()

export const useInitialDataContext = useContext
export const InitialDataContextProvider = ContextProvider
