// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    markdown: false,
    ignores: ['src/types/svg-component-global.d.ts', 'src/types/svg-component.d.ts'],
  },
  {
    rules: {
      'no-console': 'warn',

      'curly': ['error', 'all'],
      'style/max-statements-per-line': ['error', { max: 2 }],

      'no-unused-vars': 'off',
      'ts/no-unused-vars': 'off',
      // 自动删除未使用的 import 引用
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
)
