import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  {
    rules: {
      'vue/multi-word-component-names': ['warn', { ignores: ['Index'] }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  eslintConfigPrettier,
)
