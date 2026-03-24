<template>
  <el-config-provider :locale="store.getters.language === 'en' ? en : zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { watchSwitchLang } from '@/utils/i18n'
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import en from 'element-plus/es/locale/lang/en'
  const store = useStore()

  /**
   * 监听 语言变化，重新获取个人信息
   */
  watchSwitchLang(() => {
    if (store.getters.token) {
      store.dispatch('user/getUserInfo')
    }
  })
</script>

<style lang="scss"></style>
