<script setup lang="tsx">
import PageContainer from '@/components/PageContainer.vue'

const value = ref('vue3 ref ')

defineRender(
  <PageContainer>
    <div>
      jsx:
      {value.value}
    </div>
    <RouterLink to="/a/x/s">404</RouterLink>
  </PageContainer>,
)
</script>
