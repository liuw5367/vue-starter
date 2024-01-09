<script lang="ts" setup>
import { AntDesignOutlined, AppstoreOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'

const current = ref<string[]>(['mail'])
const items = ref<MenuProps['items']>([
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
        label: 'function',
        children: [
          { key: 'list', label: h(RouterLink, { to: '/list' }, () => 'list') },
          { key: 'store', label: h(RouterLink, { to: '/store' }, () => 'store') },
          { key: 'markdown', label: h(RouterLink, { to: '/md' }, () => 'markdown') },
        ],
      },
      {
        key: 'jsx',
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

  {
    key: 'others',
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
</script>

<template>
  <a-menu
    v-model:selectedKeys="current"
    mode="horizontal"
    :items="items"
    class="border-none"
  />
</template>
