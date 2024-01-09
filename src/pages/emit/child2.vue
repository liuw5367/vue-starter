<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

const emit = defineEmits<{
  update: [value: string]
}>()

const model = ref('')

const computedValue = computed(() => props.value + model.value)
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
  </div>
</template>
