<script lang="ts" setup>
import { h, ref } from 'vue'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'

const current = ref<string[]>(['mail'])
const items = ref<MenuProps['items']>([
  {
    key: 'mail',
    icon: () => h(MailOutlined),
    label: 'home',
    title: 'home',
  },
  {
    key: 'app',
    icon: () => h(AppstoreOutlined),
    label: h(RouterLink, { to: '/login' }, 'login'),
    title: 'login',
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: 'Three - Submenu',
    title: 'Three - Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'antdv',
    label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'antdv'),
    title: 'antdv',
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
