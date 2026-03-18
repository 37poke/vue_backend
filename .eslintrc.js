module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // Vue3 基础规则
    'eslint:recommended', // ESLint 推荐规则
    '@vue/typescript/recommended', // TS 推荐规则
    'plugin:prettier/recommended', // 必须放在最后！这会同时启用 config 和 plugin
  ],
  parserOptions: {
    ecmaVersion: 2020,
    // 解决你之前遇到的 TS 版本不支持警告
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // 自定义规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 针对 Vue 的特性规则
    'vue/multi-word-component-names': 'off', // 允许组件名为单个单词（如 Index.vue）

    // 强制使用 Prettier 的规则进行报错
    'prettier/prettier': 'warn',

    // TS 相关规则
    '@typescript-eslint/no-explicit-any': 'off', // 企业项目中某些场景下允许 any
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
