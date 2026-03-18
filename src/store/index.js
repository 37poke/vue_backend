import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import theme from './modules/theme'
import app from './modules/app'
export default createStore({
  getters,
  modules: {
    user,
    theme,
    app,
  },
})
