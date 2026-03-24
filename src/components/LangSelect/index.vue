<template>
  <el-dropdown trigger="hover" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip :content="$t('msg.navBar.lang')" :effect="effect">
        <svg-icon id="guide-lang" icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
  import { useI18n } from 'vue-i18n'
  import { defineProps, computed } from 'vue'
  import { useStore } from 'vuex'
  import { ElMessage } from 'element-plus'
  import { onMounted } from 'vue'
  // 在 script setup 里

  onMounted(() => {
    console.log('语言切换组件已挂载')
    console.log('当前语言状态:', language.value)
  })

  defineProps({
    effect: {
      type: String,
      default: 'dark',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['dark', 'light'].indexOf(value) !== -1
      },
    },
  })

  const store = useStore()
  const language = computed(() => store.getters.language)

  // 切换语言的方法
  const i18n = useI18n()
  //处理语言状态
  const handleSetLanguage = (lang) => {
    i18n.locale.value = lang
    store.commit('app/setLanguage', lang)
    ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
  }
</script>
