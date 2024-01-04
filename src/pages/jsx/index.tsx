import { defineComponent, ref } from 'vue'
import PageContainer from '@/components/PageContainer.vue'

export default defineComponent({
  render() {
    const value = ref('vue3 ref ')

    return (
      <PageContainer>
        JSX Test:
        {value.value}
      </PageContainer>
    )
  },
})
