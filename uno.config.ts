import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    // https://unocss.dev/presets/icons
    presetIcons({
      scale: 1.2,
      // 1. 安装依赖依赖包 https://iconify.design/
      // @iconify-json/mdi for Material Design Icons
      // @iconify-json/tabler for Tabler
      // @iconify-json/carbon
      // 2. 使用 CDN
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
