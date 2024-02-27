import { AdminNewsLetterResponse } from "./admin.type"
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
  getAdminPublisher: async (params: any) => {
    const { data } = await api.get<AdminNewsLetterResponse>("/admin/publisher", { params })
    return data
  },
}

export default adminApi
