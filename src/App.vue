<script setup lang="ts">
import { theme } from 'ant-design-vue'
import { APP_NAME } from '@/constants'
import { isDark } from '@/composables'

// useTitle(APP_NAME)

useHead({
  title: APP_NAME,
})
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }"
  >
    <RouterView />
  </a-config-provider>
</template>
