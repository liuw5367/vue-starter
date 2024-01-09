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
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
import { viteMockServe } from 'vite-plugin-mock'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    chunkSizeWarningLimit: 2048,
    // minify: 'terser',
    // terserOptions: { compress: { drop_console: true, drop_debugger: true } },
  },
  esbuild: {
    drop: command === 'build' ? ['debugger', 'console'] : [],
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
      dts: 'src/types/typed-router.d.ts',
      extensions: ['.vue', '.md', '.tsx', '.jsx'],
      // list of glob files to exclude from the routes generation
      // e.g. ['**/__*'] will exclude all files and folders starting with `__`
      // e.g. ['**/__*/**/*'] will exclude all files within folders starting with `__`
      // e.g. ['**/*.component.vue'] will exclude components ending with `.component.vue`
      exclude: [
        '**/_*',
        '**/_*/**/*',
        '**/*.component.vue',
        '**/components/*.vue',
      ],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: [
        'vue',
        // '@vueuse/core',
        '@vueuse/head',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink', 'RouterLink'],
          '@vueuse/router': ['useRouteParams', 'useRouteQuery', 'useRouteHash'],
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
      dts: 'src/types/components.d.ts',
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
        IconsResolver(),
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
          defaultColor: false,
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        }))
      },
    }),

    // 同 presetIcons，需安装需要图标库
    // https://iconify.design/
    // https://icon-sets.iconify.design/
    // 本项目已安装 @iconify-json/carbon 用作示例
    // https://github.com/unplugin/unplugin-icons
    Icons({
      scale: 1.2, // Scale of icons against 1em
      // defaultStyle: '', // Style apply to icons
      // defaultClass: '', // Class names apply to icons
    }),

    // https://github.com/jpkleemans/vite-svg-loader
    // svgLoader(),
    // https://github.com/Jevon617/unplugin-svg-component
    UnpluginSvgComponent({
      iconDir: 'src/assets',
      dts: true,
      dtsDir: 'src/types',
      componentStyle: 'width: 1em; height: 1em; fill:currentColor; scale: 1.2',
    }),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    // https://github.com/vbenjs/vite-plugin-mock
    viteMockServe({
      mockPath: 'src/mocks',
      enable: command !== 'build',
    }),
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
}))
