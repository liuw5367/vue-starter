<script lang="ts" setup>
import type { VueElement } from 'vue'
import { HomeOutlined, MailOutlined } from '@ant-design/icons-vue'
import type { ItemType, MenuProps } from 'ant-design-vue'

const selectedKeys = ref<string[]>(['home'])
const openKeys = ref<string[]>(['sub1'])

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType
}

const items: ItemType[] = reactive([
  {
    key: 'home',
    title: 'home',
    icon: h(HomeOutlined),
    label: h(RouterLink, { to: '/' }, () => 'home'),
  },
  getItem('One', 'sub1', () => h(MailOutlined), [
    getItem('func', 'g1', null, [
      { key: '1', label: h(RouterLink, { to: '/store' }, () => 'store') },
      { key: '2', label: h(RouterLink, { to: '/md' }, () => 'markdown') },
    ], 'group'),
    getItem('JSX', 'g2', null, [
      { key: 'jsx-a', label: h(RouterLink, { to: '/jsx/a' }, () => 'defineComponent') },
      { key: 'jsx-b', label: h(RouterLink, { to: '/jsx/b' }, () => 'defineRender') },
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ], 'group'),
  ]),

  { type: 'divider' },

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
])

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

watch(openKeys, (val) => {
  console.log('openKeys', val)
})
</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    class="h-full w-64"
    mode="inline"
    :items="items"
    @click="handleClick"
  />
</template>
