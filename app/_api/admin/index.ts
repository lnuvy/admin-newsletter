import { AdminNewsLetterResponse, AdminPublisherPayload } from "./admin.type"
import api from ".."

const adminApi = {
  /**
   * keyword-group 목록 가져오기
   */
  getAdminKeywordGroup: async () => {
    const { data } = await api.get("/admin/keyword-group")
    return data
  },

  /**
   * keyword-group 추가
   */
  postAdminKeywordGroup: async (payload: { name: string; is_enabled: boolean }) => {
    const { data } = await api.post("/admin/keyword-group", payload)
    return data
  },

  /**
   * keyword-group 의 정보를 삭제
   */
  deleteAdminKeywordGroup: async (id: number) => {
    const { data } = await api.delete(`/admin/keyword-group/${id}`)
    return data
  },

  /**
   * keyword-group 의 이름, 활성화 수정
   */
  putAdminKeywordGroup: async (id: number, payload: { name: string; is_enabled: boolean }) => {
    const { data } = await api.put(`/admin/keyword-group/${id}`, payload)
    return data
  },

  /** ------------------------------------------------------------------------------
   * 
   * publisher
   * 
   ------------------------------------------------------------------------------ */
  /**
   * publisher 목록 가져오기
   */
  getAdminPublisherList: async (params: any) => {
    const { data } = await api.get<AdminNewsLetterResponse>("/admin/publisher", { params })
    return data
  },

  /**
   * publisher 추가
   */
  postAdminPublisher: async (payload: AdminPublisherPayload) => {
    const { data } = await api.post("/admin/publisher", payload)
    return data
  },

  /**
   * publisher 정보 가져오기
   */
  getAdminPublisher: async (id: string) => {
    const { data } = await api.get<AdminNewsLetterResponse>(`/admin/publisher/${id}`)
    return data
  },

  /**
   * publisher 정보 삭제
   */
  deleteAdminPublisher: async (id: number) => {
    const { data } = await api.delete(`/admin/publisher/${id}`)
    return data
  },

  /**
   * publisher 정보 수정
   */
  putAdminPublisher: async (id: number, payload: AdminPublisherPayload) => {
    const { data } = await api.put(`/admin/publisher/${id}`, payload)
    return data
  },

  /**
   * publisher 의 keyword 가져오기
   */
  getAdminPublisherKeyword: async (id: number) => {
    const { data } = await api.get(`/admin/publisher/${id}/keyword`)
    return data
  },

  /**
   * publisher 에 keyword 추가
   */
  postAdminPublisherKeyword: async (id: number, payload: { keyword_group_id: number; keyword_id: number }) => {
    const { data } = await api.post(`/admin/publisher/${id}/keyword`, payload)
    return data
  },

  /**
   * publisher 에 keyword 삭제
   */
  deleteAdminPublisherKeyword: async (id: number, keywordId: number) => {
    const { data } = await api.delete(`/admin/publisher/${id}/keyword/${keywordId}`)
    return data
  },
}

export default adminApi
