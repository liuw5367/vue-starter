<script setup lang="tsx">
import PageContainer from '@/components/PageContainer.vue'

const value = ref('use defineRender')

defineRender(
  <PageContainer>
    <div>
      <span>jsx: </span>
      <span>{value.value}</span>
    </div>
  </PageContainer>,
)
</script>
