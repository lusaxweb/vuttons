import Vuttons from '../../src'
// import Vuttons from '../../dist/vuttons.common.js'
// import '../../dist/vuttons.css'
import './fonts/font/flaticon.css'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuttons)
}
