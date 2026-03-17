import { router } from './router'
import { store } from './store'

//白名单
const whiteList = ['/login']

//路由前置守卫
router.beforeEach(async (to, from, next) => {
  //存在token进入主页
  if (store.getters.token) {
    //如果已经登录不允许进入login
    if (to.path === '/login') {
      next('/')
    } else {
      next() //放行
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) next()
    else {
      next('/login')
    }
  }
})
