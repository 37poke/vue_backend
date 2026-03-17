import { login } from '@/api/sys'
import md5 from 'md5'
import TOKEN from '@/constant/index.js'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN),
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            resolve()
            console.log(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}
