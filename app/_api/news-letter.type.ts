export interface AdminNewsLetterResponse {
  id: string
  thumbnail: string
  name: string
  description: string
  subscriber: number
  url_subscribe: string
  publisher_main: string
  publisher_spec: string
  is_enabled: boolean
  created_at: string
}

export type AdminNewsLetterListResponse = AdminNewsLetterResponse[]

export interface AdminPublisherPayload {
  name: string
  description: string
  subscriber: number
  thumbnail: string
  url_subscribe: string
  publisher_main: string
  publisher_spec: string
  is_enabled: boolean
}
