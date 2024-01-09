<script setup lang="ts">
import type { TableColumnsType } from 'ant-design-vue'
import type { ListItem } from '@/services/demo'
import { queryList } from '@/services/demo'
import type { TablePagination, TableSorter } from '@/types'

const dataSource = ref<ListItem[]>([])
const pagination = ref<TablePagination>({ total: 0, current: 1, pageSize: 10 })
const sorter = ref<TableSorter>()
const loading = ref(true)

function setPagination(value: TablePagination) {
  pagination.value = { ...pagination.value, ...value }
}
function setSorter(value: TableSorter) {
  sorter.value = { ...sorter.value, ...value }
}

const columns = ref<TableColumnsType>([
  { title: 'name', dataIndex: 'name' },
  { title: 'age', dataIndex: 'age' },
  { title: 'email', dataIndex: 'email' },
])

function handleTableChange(page: any, x: any, sorter: any) {
  const { current, pageSize, total } = page
  setPagination({ ...pagination, current, pageSize, total })
  const { field, order } = sorter || {}
  const newSorter = { field, order }
  setSorter(newSorter)
  requestData(current, pageSize, newSorter)
}

async function requestData(
  pageNum = pagination.value.current,
  pageSize = pagination.value.pageSize,
  sort = sorter.value,
) {
  loading.value = true
  const response = await queryList({ pageNum, pageSize, sort })
  loading.value = false

  if (response.success) {
    const data = response.data
    dataSource.value = data.list
    setPagination({
      current: data.current,
      pageSize: data.size,
      total: data.total,
    })
  }
}

requestData()
</script>

<template>
  <PageContainer>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="loading"
      bordered
      @change="handleTableChange"
    />
  </PageContainer>
</template>
