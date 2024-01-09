import { defineStore } from 'pinia'

export interface MultiTabItem {
  path: string
  icon?: string
  /** 固定 */
  affix?: boolean
  loading?: boolean
}

export const useMultiTabStore = defineStore('multi-tab', () => {
  const activeKey = ref<string>()
  const cacheItems = ref<MultiTabItem[]>([])
  const cacheKeys = computed(() => cacheItems.value.map(v => v.path))
  const router = useRouter()

  function addTab(key: string) {
    if (key === '/') { return }

    if (key.startsWith('/redirect')) { return }

    const cached = cacheItems.value.find(v => v.path === key)

    if (cached) {
      if (cached.loading) { cached.loading = false }

      activeKey.value = key
      return
    }

    const item: MultiTabItem = {
      path: key,
    }
    cacheItems.value.push(item)
    activeKey.value = key

    router.push(key)
  }

  function refreshTab(key: string) {
    const item = cacheItems.value.find(v => v.path === key)
    if (!item) { return }

    item.loading = true

    router.replace(`/redirect/${encodeURIComponent(item.path)}`)
  }

  function switchTab(key: string) {
    if (activeKey.value === key) { return }

    const cached = cacheKeys.value.includes(key)
    if (!cached) { return }

    activeKey.value = key
    router.push(key)
  }

  function closeTab(key: string) {
    if (cacheItems.value.length === 1 && activeKey.value === key) {
      // message.error('不能关闭最后一个标签页')
      return
    }

    const index = cacheItems.value.findIndex(v => v.path === key)
    if (index === -1) {
      // message.error('当前页签不存在无法关闭')
      return
    }

    if (activeKey.value === key) {
      console.log('!!!!!!')
      const active = index === 0 ? cacheItems.value[index + 1].path : cacheItems.value[index - 1].path
      activeKey.value = active
      router.push(active)
    }

    cacheItems.value = cacheItems.value.filter(v => v.path !== key)
  }

  function closeToLeft(key: string) {
    const index = cacheItems.value.findIndex(v => v.path === key)
    cacheItems.value = cacheItems.value.slice(0, index)

    const activeItem = cacheItems.value.find(v => v.path === activeKey.value)
    if (!activeItem) {
      activeKey.value = key
    }
  }

  function closeToRight(key: string) {
    const index = cacheItems.value.findIndex(v => v.path === key)
    cacheItems.value = cacheItems.value.slice(index + 1)

    const activeItem = cacheItems.value.find(v => v.path === activeKey.value)
    if (!activeItem) {
      activeKey.value = key
    }
  }

  function closeOthers(key: string) {
    cacheItems.value = cacheItems.value.filter(v => v.path === key)

    activeKey.value = key
  }

  function closeAll() {
    cacheItems.value = []
    activeKey.value = undefined
    router.push('/')
  }

  return {
    activeKey,
    cacheItems,
    cacheKeys,

    addTab,
    refreshTab,
    switchTab,

    closeTab,
    closeToLeft,
    closeToRight,
    closeOthers,
    closeAll,
  }
})
