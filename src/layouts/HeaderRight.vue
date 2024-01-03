<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores'

const { user } = useUserStore()
</script>

<template>
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
</template>
