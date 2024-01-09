<script setup lang="ts">
import TopMenus from './TopMenus.vue'
import HeaderRight from './HeaderRight.vue'
import { APP_NAME } from '@/constants'
</script>

<template>
  <div
    style="height: var(--header-height); min-height: var(--header-height);"
    border-b="~ solid gray-200"
    flex items-center justify-between px-6 space-x-6
  >
    <div>
      {{ APP_NAME }}
    </div>
    <div flex-1>
      <TopMenus />
    </div>
    <div>
      <HeaderRight />
    </div>
  </div>
</template>
