import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from 'markdown-it-shikiji'
import LinkAttributes from 'markdown-it-link-attributes'
import VueDevTools from 'vite-plugin-vue-devtools'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/vue-macros/vue-macros
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
        vueJsx: VueJsx(),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: 'src/typed-router.d.ts',
      extensions: ['.vue', '.md', '.tsx', '.jsx'],
      // list of glob files to exclude from the routes generation
      // e.g. ['**/__*'] will exclude all files and folders starting with `__`
      // e.g. ['**/__*/**/*'] will exclude all files within folders starting with `__`
      // e.g. ['**/*.component.vue'] will exclude components ending with `.component.vue`
      exclude: [
        '**/_*',
        '**/__*',
        '**/_*/**/*',
        '**/__*/**/*',
        '**/*.component.vue',
        '**/components/*.vue',
      ],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        // '@vueuse/core',
        '@vueuse/head',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink', 'RouterLink'],
        },
      ],
      dirs: [
        // 'src/composables',
        // 'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        md.use(await Shiki({
          defaultColor: 'light',
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        }))
      },
    }),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
  ],

  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://1.1.1.1:1111',
        // rewrite: (path) => path.replace(new RegExp('/api/'), ''),
      },
    },
  },
})
