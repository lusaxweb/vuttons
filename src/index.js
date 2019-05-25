import * as vsComponents from './buttons'
import './style/vuttons.styl'
// import './fonts/font/flaticon.css'

const install = (Vue, options) => {

  Object.values(vsComponents).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

// export { default as Vutton } from './buttons/Vutton'
