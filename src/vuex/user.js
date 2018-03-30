import http from '../service/index'
export default {
	state:{
		user:{},//当前登录账户信息
		userGroup:[], //用户组列表
	},
	mutations:{
		updateUser(state,payload){
			state.user=payload.data
		},
		updateUserGroup(state,payload){			
			state.userGroup = payload.data;
//			console.log(payload)
		},	
	},
	actions:{
		updateUserGroup({commit},data){
			http.get("/api/sys/group/v1/protected/list",data,(res)=>{
				sessionStorage.setItem("userGroup",JSON.stringify(res.data.content))
				commit({type:'updateUserGroup',data:res.data.content})
			})
		}
	}
}
