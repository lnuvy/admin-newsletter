import api, { METHOD } from "./fetch"
import newsLetterKey from "./fetch-key/news-letter"
import { AdminNewsLetterResponse, AdminPublisherPayload } from "./news-letter.type"

const newsLetterApi = {
  /** ------------------------------------------------------------------------------
   * 
   * publisher
   * 
   ------------------------------------------------------------------------------ */
  /**
   * publisher 목록 가져오기
   */
  getAdminPublisherList: async (params: any) => {
    const queryString = new URLSearchParams(params).toString()
    const data = await api(`/admin/publisher?${queryString}`, {
      next: { tags: [newsLetterKey.publisher()] },
    })
    return data as AdminNewsLetterResponse[]
  },

  /**
   * publisher 추가
   */
  postAdminPublisher: async (payload: AdminPublisherPayload) => {
    const { data } = await api("/admin/publisher", {
      method: METHOD.POST,
      data: payload,
    })
    return data
  },

  /**
   * publisher 정보 가져오기
   */
  getAdminPublisher: async (id: string) => {
    const { data } = await api(`/admin/publisher/${id}`)
    return data as AdminNewsLetterResponse
  },

  /**
   * publisher 정보 삭제
   */
  deleteAdminPublisher: async (id: number) => {
    const { data } = await api(`/admin/publisher/${id}`, {
      method: METHOD.DELETE,
    })
    return data
  },

  /**
   * publisher 정보 수정
   */
  putAdminPublisher: async (id: number, payload: AdminPublisherPayload) => {
    const { data } = await api(`/admin/publisher/${id}`, {
      method: METHOD.PUT,
      data: payload,
    })
    return data
  },

  /**
   * publisher 의 keyword 가져오기
   */
  getAdminPublisherKeyword: async (id: number) => {
    const { data } = await api(`/admin/publisher/${id}/keyword`)
    return data
  },

  /**
   * publisher 에 keyword 추가
   */
  postAdminPublisherKeyword: async (id: number, payload: { keyword_group_id: number; keyword_id: number }) => {
    const { data } = await api(`/admin/publisher/${id}/keyword`, {
      method: METHOD.POST,
      data: payload,
    })
    return data
  },

  /**
   * publisher 에 keyword 삭제
   */
  deleteAdminPublisherKeyword: async (id: number, keywordId: number) => {
    const { data } = await api(`/admin/publisher/${id}/keyword/${keywordId}`, {
      method: METHOD.DELETE,
    })
    return data
  },
}

export default newsLetterApi
