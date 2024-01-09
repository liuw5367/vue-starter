<script setup lang="ts">
import Child from './child.vue'
import Child2 from './child2.vue'

const childValue = ref('parent')
function onChildValueUpdate(value: string) {
  childValue.value = value
  console.log('from child: %s', value)
}

provide('parent', 'parent')

const location = ref('North Pole')
function updateLocation(value: string) {
  location.value = `South Pole: ${value}`
}

provide('location', {
  location,
  updateLocation,
})
</script>

<template>
  <PageContainer class="space-y-4">
    <Child :value="childValue" @update="onChildValueUpdate" />
    <Child2 :value="childValue" @update="onChildValueUpdate" />
  </PageContainer>
</template>
