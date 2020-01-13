
import  Vue  from  'vue' 
import  App  from  './App'

import router from './router/index.js'
import store from './store'
/*  eslint-disable  no-new  */
new  Vue({
el:  '#app',
router,
store,
render:  h  =>  h(App)
})