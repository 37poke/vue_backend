import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app: any) => {
  // 2. 给 app 参数指定类型
  app.use(ElementPlus, { locale })
}
