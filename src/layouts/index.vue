<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import Header from './Header.vue'
import LeftMenus from './LeftMenus.vue'

const route = useRoute()
console.log(route.path, route.fullPath, route.name, route.query, route.meta, route.params)

const pathname = ref(location.pathname)
watch(
  () => route.path,
  (newValue) => {
    pathname.value = newValue
    console.log('pathname: %s', pathname.value)
  },
)
console.log('pathname: %s', pathname.value)
</script>

<template>
  <div h-screen w-screen flex flex-col overflow-hidden>
    <RouterView v-if="pathname === '/login'" />
    <template v-else>
      <Header />
      <div w-full flex flex-1 overflow-hidden>
        <LeftMenus />
        <div w-full flex-1>
          <RouterView />
        </div>
      </div>
    </template>
  </div>
</template>
