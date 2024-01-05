<script setup lang="ts">
import type { StyleValue } from 'vue'

defineProps<{
  containerClass?: any
  style?: StyleValue
}>()
</script>

<template>
  <div id="page-container" h-full w-full overflow-auto p-6 :style="style" :class="containerClass">
    <slot />
  </div>
</template>
