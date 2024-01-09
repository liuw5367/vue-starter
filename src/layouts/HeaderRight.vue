<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { useColorMode } from '@vueuse/core'
import { useUserStore } from '@/stores'
import { toggleDark } from '@/composables'

const version = __APP_VERSION__
const { user } = useUserStore()

const colorMode = useColorMode()
watch(colorMode, () => {
  console.log('colorMode: %s', colorMode.value)
})
console.log('colorMode: %s', colorMode.value)
</script>

<template>
  <div flex items-center space-x-4>
    <div>
      v{{ version }}
    </div>
    <div my-4 flex items-center space-x-4>
      <div icon-btn cursor-pointer @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </div>

      <div icon-btn flex cursor-pointer title="Auto" @click="colorMode = 'auto'">
        <div i="carbon-window-auto" /> Auto
      </div>
    </div>

    <a-dropdown>
      <a flex items-center space-x-2 @click.prevent>
        <span>{{ user?.name || '用户名' }}</span>
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
