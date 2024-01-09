<script lang="ts" setup>
import { AntDesignOutlined, AppstoreOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons-vue'
import type { ItemType, MenuProps } from 'ant-design-vue'

const selectedKeys = ref<string[]>(['home'])
const openKeys = ref<string[]>(['One'])

const items: ItemType[] = reactive([
  {
    key: 'home',
    title: 'home',
    icon: h(HomeOutlined),
    label: h(RouterLink, { to: '/' }, () => 'home'),
  },

  {
    key: 'One',
    label: 'One',
    icon: h(AppstoreOutlined),
    children: [
      {
        key: 'function',
        type: 'group',
        label: 'function',
        children: [
          { key: 'list', label: h(RouterLink, { to: '/list' }, () => 'list') },
          { key: 'store', label: h(RouterLink, { to: '/store' }, () => 'store') },
          { key: 'markdown', label: h(RouterLink, { to: '/md' }, () => 'markdown') },
        ],
      },
      {
        key: 'jsx',
        type: 'group',
        label: 'jsx',
        children: [
          { key: 'jsx-a', label: h(RouterLink, { to: '/jsx/a' }, () => 'defineRender') },
          { key: 'jsx-b', label: h(RouterLink, { to: '/jsx/b' }, () => 'defineComponent') },
        ],
      },
      {
        key: 'submenu',
        label: 'submenu',
        children: [
          { key: 'about', label: h(RouterLink, { to: '/about' }, () => 'about') },
        ],
      },
    ],
  },

  { type: 'divider' },

  {
    key: 'others',
    type: 'group',
    label: 'Group',
    children: [
      {
        key: 'github',
        icon: h(GithubOutlined),
        label: h('a', { href: 'https://github.com/liuw5367/vue-starter', target: '_blank' }, 'vue-starter'),
      },
      {
        key: 'antdv',
        icon: h(AntDesignOutlined),
        label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'antdv'),
      },
    ],
  },
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
