import SvgIcon from '@/components/SvgIcon/index.vue'

const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
export default (app: any) => {
  app.component('svg-icon', SvgIcon)
}
