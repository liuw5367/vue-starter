<script setup lang="ts">
import { useCounterStore } from '@/stores'

const counter = useCounterStore()

function updateCount() {
  const counter = useCounterStore()
  counter.$patch({ count: counter.count + 10 })
  counter.increment()
}
</script>

<template>
  <PageContainer>
    <div space-y-4>
      <div>value: {{ counter.count }}</div>
      <a-button @click="updateCount">
        update
      </a-button>
    </div>
  </PageContainer>
</template>
