import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import indexs from './index'
import user from './user'

export default new Vuex.Store({
	modules:{
		indexs,
		user
	}
})
