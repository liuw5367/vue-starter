import { isEmpty as isEmptyLodash } from 'lodash'

export function isEmpty(value: unknown): boolean {
  if (value == null) {
    return true
  }

  if (value === '') {
    return true
  }

  if (value === 0) {
    return false
  }

  return isEmptyLodash(value)
}

export function isNotEmpty(value: unknown): boolean {
  return !isEmpty(value)
}

export function isLogin(): boolean {
  return isNotEmpty(localStorage.getItem('access-token'))
}

export function clearCacheOnLogout() {
  localStorage.removeItem('access-token')
}
