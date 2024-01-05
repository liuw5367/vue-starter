import PageContainer from '@/components/PageContainer.vue'

export default defineComponent({
  render() {
    const value = ref('use defineComponent')

    return (
      <PageContainer>
        <div>
          <span>jsx: </span>
          <span>{value.value}</span>
        </div>
      </PageContainer>
    )
  },
})
