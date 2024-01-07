<script setup lang="ts">
import { useRouteParams, useRouteQuery } from '@vueuse/router'

const userId1 = useRouteParams('userId')
const userId2 = useRouteParams('userId', '-1') // or with a default value
const userId3 = useRouteParams('page', '1', { transform: Number }) // or transforming value

console.log('route params: ', userId1.value, userId2.value, userId3.value)

const search1 = useRouteQuery('search1')
const search2 = useRouteQuery('search2', 'foo') // or with a default value
const page3 = useRouteQuery('page', '1', { transform: Number }) // or transforming value

console.log('route query:', search1.value, search2.value, page3.value) // route.query.search
search1.value = 'foobar' // router.replace({ query: { search: 'foobar' } })

// const searchHash = useRouteHash()
// console.log(searchHash.value) // route.hash
// searchHash.value = 'foobar' // router.replace({ hash: 'foobar' })

fetch('/api/list').then(console.log)
</script>

<template>
  <PageContainer container-class="pl-10">
    <div flex items-center space-x-4>
      <!-- svg -->
      <SvgIcon name="community" class="text-$color-primary !h-8 !w-8" />
    </div>
    <div flex items-center space-x-4>
      <!-- unocss presetIcons -->
      <div class="i-carbon-accessibility h-8 w-8 text-$color-primary" />
      <div class="i-carbon-chat-bot" />
      <div class="i-carbon-chat-bot" />
      <div class="i-carbon-accessibility" />
      <div class="i-carbon-chat" />
    </div>
    <div flex items-center space-x-4>
      <!-- unplugin-icons -->
      <i-carbon-accessibility class="h-8 w-8 text-$color-primary" />
      <i-carbon-chat-bot />
      <!-- unplugin-icons -->
      <ICarbonChatBot />
      <ICarbonAccessibility />
      <ICarbonChat />
    </div>
    <TheWelcome />
  </PageContainer>
</template>
