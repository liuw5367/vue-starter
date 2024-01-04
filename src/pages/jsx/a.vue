<script setup lang="tsx">
import PageContainer from '@/components/PageContainer.vue'

const value = ref('vue3 ref ')

defineRender(
  <PageContainer>
    <span>
      jsx: b,
      {value.value}
    </span>
  </PageContainer>,
)
</script>
