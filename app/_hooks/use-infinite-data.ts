import { useRef } from "react"
import { QueryKey, useInfiniteQuery } from "@tanstack/react-query"
import { UseIntersectionObserverProps, useIntersectionObserver } from "./use-intersection-observer"

interface InfiniteDataFunction<TArguments extends object, TResponse> {
  (args: TArguments & { pageParam: number }): Promise<TResponse>
  params?: any
}

interface UseInfiniteDataProps<T> {
  queryKey: QueryKey
  queryFn: InfiniteDataFunction<any, T>
  refOptions?: Partial<Omit<UseIntersectionObserverProps, "onIntersect" | "enabled">>
}

export const useInfiniteData = <T>({ queryKey, queryFn, refOptions }: UseInfiniteDataProps<T>) => {
  const observerRef = useRef(null)

  const infiniteQuery = useInfiniteQuery<T>({
    queryKey,
    queryFn,
    // why ?
    getNextPageParam: (lastPage: any, allPages: any) => {
      if (lastPage.length < 10) return undefined
      return allPages.length
    },
    initialPageParam: 0,
  })

  const { data, hasNextPage, fetchNextPage } = infiniteQuery

  // observer Options
  const observerDefaultOptions: UseIntersectionObserverProps = {
    root: null,
    target: observerRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  }

  useIntersectionObserver({
    ...observerDefaultOptions,
    ...refOptions,
  })

  const dataList = data?.pages?.flatMap((page: any) => page) ?? []

  const totalCount = 0

  return { ...infiniteQuery, data: dataList, observerRef, totalCount }
}
