<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { APP_NAME } from '@/constants'

useTitle(APP_NAME)
</script>

<template>
  <RouterView />
</template>
