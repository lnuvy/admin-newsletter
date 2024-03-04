import api, { METHOD } from "./fetch"
import { AdminKeywordGroupResponse } from "./keyword.type"

const keywordApi = {
  /**
   * keyword-group 목록 가져오기
   */
  getAdminKeywordGroup: async () => {
    const data = await api(`/admin/keyword-group`)
    return data as AdminKeywordGroupResponse[]
  },

  /**
   * keyword-group 추가
   */
  postAdminKeywordGroup: async (payload: { name: string; is_enabled: boolean }) => {
    const data = await fetch(`/admin/keyword-group`, {
      method: "POST",
      body: JSON.stringify(payload),
      // next: { tags: ["keyword-group"] },
    })
    return await data.json()
    // return data.json()
  },

  /**
   * keyword-group 의 정보를 삭제
   */
  deleteAdminKeywordGroup: async (id: number) => {
    const { data } = await api(`/admin/keyword-group/${id}`, {
      method: METHOD.DELETE,
    })
    return data
  },

  /**
   * keyword-group 의 이름, 활성화 수정
   */
  putAdminKeywordGroup: async (id: number, payload: { name: string; is_enabled: boolean }) => {
    const { data } = await api(`/admin/keyword-group/${id}`, {
      method: METHOD.PUT,
      data: payload,
    })
    return data
  },
}

export default keywordApi
