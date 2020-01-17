import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import axios from './plugins/axios'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false

//Como é apenas um, pode ser registrado aqui (pt-br)
Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	router,
	store,

	render: h => h(App),
}).$mount('#app')
