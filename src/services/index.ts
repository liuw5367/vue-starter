export interface ApiResponse<T = any> {
  success?: boolean

  code?: string | number
  message?: string
  data: T
}

export interface PageRequest {
  pageNum: number
  pageSize: number

  sort?: any
}

export interface PageBody<T = any> {
  current: number
  total: number
  size: number

  list: T[]
}
