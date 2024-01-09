<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

const model = ref('')

const computedValue = computed(() => props.value + model.value)

const injectValue = inject('parent')
const { location, updateLocation } = inject('location') as {
  location: string
  updateLocation: (v: string) => void
}
</script>

<template>
  <div space-y-4>
    <div>
      <span>bind: </span>
      <input :value="value" @input="emit('update', ($event.target as HTMLInputElement).value)">
    </div>
    <div>
      <span>model: </span>
      <input v-model="model" @input="console.log(($event.target as HTMLInputElement).value)">
    </div>
    <div>
      <span>computed: </span>
      <input :value="computedValue">
    </div>
    <div>
      <span>inject: </span>
      <input :value="injectValue">
    </div>
    <div>
      <span>inject2: </span>
      <input :value="location" @input="updateLocation(($event.target as HTMLInputElement).value)">
    </div>
  </div>
</template>
