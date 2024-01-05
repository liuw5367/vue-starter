import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  age: number
}

export const useUserStore = defineStore('user', () => {
  const user = ref<UserInfo>()

  function saveUserInfo(value: UserInfo) {
    user.value = value
  }

  return { user, saveUserInfo }
})
