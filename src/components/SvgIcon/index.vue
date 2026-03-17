<template>
  <!-- 展示内部和外部图标-->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup>
  import { defineProps, computed } from 'vue'
  import { isExternal as external } from '@/utils/validate'
  //接受参数
  const props = defineProps({
    //icon图标
    icon: {
      type: String,
      required: true,
    },
    //类名
    className: {
      type: String,
      default: '',
    },
  })
  //是否为外部路径
  const isExternal = computed(() => external(props.icon))
  //是否为外部图标
  const styleExternalIcon = computed(() => ({
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
  }))
  //内部图标
  const iconName = computed(() => `#icon-${props.icon}`)
  console.log(props)
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
  }
</style>
