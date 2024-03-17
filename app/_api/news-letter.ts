import api, { METHOD } from "./fetch"
import newsLetterKey from "./fetch-key/news-letter"
import { AdminKeywordResponse } from "./keyword.type"
import { AdminNewsLetterResponse, AdminPublisherParams, AdminPublisherPayload } from "./news-letter.type"
import { queryString } from "../_utils/query-string"

const newsLetterApi = {
  /** ------------------------------------------------------------------------------
   * 
   * publisher
   * 
   ------------------------------------------------------------------------------ */
  /**
   * publisher 목록 가져오기
   */
  getAdminPublisherList: async (params: AdminPublisherParams) => {
    const data = await api(`/admin/publisher?${queryString(params)}`, {
      next: { tags: [newsLetterKey.publisher()] },
    })
    return data as AdminNewsLetterResponse[]
  },

  /**
   * publisher 추가
   */
  postAdminPublisher: async (payload: AdminPublisherPayload) => {
    const data = await api("/admin/publisher", {
      method: METHOD.POST,
      data: payload,
    })
    return data
  },

  /**
   * publisher 정보 가져오기
   */
  getAdminPublisher: async (id: string) => {
    const data = await api(`/admin/publisher/${id}`, {
      next: { tags: [newsLetterKey.publisherDetail(id)] },
    })
    return data as AdminNewsLetterResponse
  },

  /**
   * publisher 정보 삭제
   */
  deleteAdminPublisher: async (id: string) => {
    const data = await api(`/admin/publisher/${id}`, {
      method: METHOD.DELETE,
    })
    return data
  },

  /**
   * publisher 정보 수정
   */
  putAdminPublisher: async (id: string, payload: AdminPublisherPayload) => {
    const data = await api(`/admin/publisher/${id}`, {
      method: METHOD.PUT,
      data: payload,
    })
    return data
  },

  /**
   * publisher 의 keyword 가져오기
   */
  getAdminPublisherKeyword: async (id: string) => {
    const data = await api(`/admin/publisher/${id}/keyword`)
    return data as AdminKeywordResponse[]
  },

  /**
   * publisher 에 keyword 추가
   */
  postAdminPublisherKeyword: async (id: string, payload: { keyword_group_id: number; keyword_id: number }) => {
    const data = await api(`/admin/publisher/${id}/keyword`, {
      method: METHOD.POST,
      data: payload,
    })
    return data
  },

  /**
   * publisher 에 keyword 삭제
   */
  deleteAdminPublisherKeyword: async (id: string, keywordId: number) => {
    const data = await api(`/admin/publisher/${id}/keyword/${keywordId}`, {
      method: METHOD.DELETE,
    })
    return data
  },

  /** ------------------------------------------------------------------------------
   * 
   * 아티클
   * 
   ------------------------------------------------------------------------------ */
  /**
   * article 목록 가져오기
   */
  getAdminArticleList: async (params: AdminPublisherParams) => {
    const data = await api(`/admin/article?${queryString(params)}`, {
      next: { tags: [newsLetterKey.article()] },
    })
    return data as AdminNewsLetterResponse[]
  },

  /**
   * article 추가
   */
  postAdminArticle: async (payload: AdminPublisherPayload) => {
    const data = await api("/admin/article", {
      method: METHOD.POST,
      data: payload,
    })
    return data
  },

  /**
   * article 정보 가져오기
   */
  getAdminArticle: async (id: string) => {
    const data = await api(`/admin/article/${id}`)
    return data as AdminNewsLetterResponse
  },
}

export default newsLetterApi
