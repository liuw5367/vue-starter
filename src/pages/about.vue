<script setup lang="ts">
// 使用 definePage
// 或者使用 <route></route>
definePage({
  alias: ['/a/1', '/a/2'],
  meta: {
    a: 'value',
  },
})
</script>

<template>
  <PageContainer>
    This is an about page
  </PageContainer>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": false
  }
}
</route>
