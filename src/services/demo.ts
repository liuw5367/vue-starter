import type { PageBody, PageRequest } from '.'
import { request } from '@/utils/HttpClient'

export interface ListItem {
  id: string
  name: string
  age: number
  birth: string
  email: string
}

export function queryList(params: PageRequest) {
  return request<PageBody<ListItem>>('/list', {
    method: 'GET',
    params,
  })
}
