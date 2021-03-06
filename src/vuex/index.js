export default {
	state:{
		noticeList:[], //首页通知
		announcement:[],	//公告
		agency:[],  	//待办
		read:[],		//待阅
		subscription:[], //订阅咨询
		project:[],//项目资讯
		news:[], //新闻资讯
		Promotions:[], //促销活动
		newGoods:[],//最新上架
		commondata:[], //常用资料
		standard:[],//标准规范
		financial:[], //财务专栏
		hr:[],//Hr政策
		newKnowledge:[], //最新知识
		indexAllList:{},	//首页所有模块列表
	},
	mutations:{
		addNoticeList(state,data){
			state.noticeList.push(data)
		},
		updateNoticeList(state,data){
			state.noticeList = data
		},
		setIndexAllList(state,payload){
			state.indexAllList = payload.data
		},
//		updateIndexAllList(state,payload){
//			state.indexAllList
//		}
	},
	actions:{
		addNoticeList({commit},data){
			commit('addNoticeList',data)
		},
		updateNoticeList({commit},data){
			commit('updateNoticeList',data)
		},
		setIndexAllList({commit},payload){
			commit({type:'setIndexAllList',data:payload.data})
		}
	}
}
