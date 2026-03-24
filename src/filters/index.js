import dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'

const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}
// 加载相对时间插件
dayjs.extend(rt)
function relativeTime(val) {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  // 语言包
  return dayjs()
    .locale(store.getters.language === 'zh' ? 'zh-cn' : 'en')
    .to(dayjs(val))
}

// 语言包
import 'dayjs/locale/zh-cn'
import store from '@/store'
export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter,
    relativeTime,
  }
}
