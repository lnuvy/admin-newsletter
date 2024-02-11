"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Dispatch, Profiler, ProfilerOnRenderCallback, SetStateAction, createContext, useEffect, useState } from "react"
import { createDynamicContext } from "./create-dynamic-context"
import ProtectedScreen from "../_components/layout/protected-screen"
import { LOCAL_STORAGE_KEY } from "../_constants/storage"

interface useProtectedContextProps {
  isAllow: boolean
  setIsAllow: Dispatch<SetStateAction<boolean>>
}

const { ContextProvider, useContext } = createDynamicContext<useProtectedContextProps>()
export const useProtectedContext = useContext
const ProtectedContextProvider = ContextProvider

/**
 * ClientSide에 종속되는 전역 컨텍스트 컨테이너입니다.
 */
const RootContext = ({ children }: React.PropsWithChildren): JSX.Element => {
  const { Provider } = createContext(null)

  const [isAllow, setIsAllow] = useState(localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_ALLOW) === "0224")

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  )

  return (
    <Provider value={null}>
      <QueryClientProvider client={client}>
        <ProtectedContextProvider isAllow={isAllow} setIsAllow={setIsAllow}>
          <ProtectedScreen>{children}</ProtectedScreen>
        </ProtectedContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default RootContext
