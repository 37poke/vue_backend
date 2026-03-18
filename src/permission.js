import router from './router/index.js'
import store from './store/index.js'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 检查是否已经获取了用户信息
      if (!store.getters.hasUserInfo) {
        try {
          await store.dispatch('user/getUserInfo')
          next() // 获取成功，放行
        } catch (error) {
          // 获取失败（Token失效等），清除Token并跳回登录
          await store.dispatch('user/logout')
          next('/login')
        }
      } else {
        next() // 已有用户信息，放行
      }
    }
  } else {
    // 没有token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      console.log(store.getters)
      next('/login')
    }
  }
})
