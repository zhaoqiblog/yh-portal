import http from '../service/index'
export default {
	state:{
		navList:{},
	},
	mutations:{
		updateNavList(state,payload){
			state.navList.push(payload.data)
		},
	},
	actions:{
		updateNavList({commit},data){
			http.get("/api/cms/column/v1/protected/show",data,(res)=>{
//				console.log(res)
				commit('navList',data)
			})
			
		}
	}
}
