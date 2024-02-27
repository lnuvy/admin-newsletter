"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
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

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 1,
        },
      },
    }),
  )
  const [isAllow, setIsAllow] = useState(
    window?.localStorage?.getItem(LOCAL_STORAGE_KEY.ACCESS_ALLOW) === "0224" || false,
  )

  return (
    <Provider value={null}>
      <QueryClientProvider client={client}>
        <ProtectedContextProvider isAllow={isAllow} setIsAllow={setIsAllow}>
          <div className="flex min-h-screen items-center justify-center">
            <ProtectedScreen>{children}</ProtectedScreen>
          </div>
        </ProtectedContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default RootContext
