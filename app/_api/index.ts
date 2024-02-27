import axios, { AxiosResponse } from "axios"

export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
}

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
})

api.interceptors.request.use(
  async (config) => {
    // const accessToken = await getAccessToken()

    // if (accessToken !== undefined) {
    //   config.headers.Authorization = `Bearer ${accessToken}`
    // }

    return config
  },
  async (error) => {
    return await Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    if (error.response === undefined) return await Promise.reject(error)

    // if (error.response.status === 401) {
    // }

    // if (error.response.status === 403 && !originalConfig._retry) {
    //   const isClient = typeof window === "object"

    //   if (isClient) {
    //     deleteBrowserCookie()
    //     originalConfig._retry = true
    //     return axios(error.config)
    //   } else {
    // return NextResponse.rewrite(`/`, {})
    //   }

    return await Promise.reject(error)
  },
)

export default api
