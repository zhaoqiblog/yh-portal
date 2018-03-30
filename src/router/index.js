import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/template/index'

import module from './moduleRouter/module'
Vue.use(Router)


const router =  new Router({
	mode:"hash",
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {requireAuth: true},
      component: Index
    },
    ...module,
  ]
})

router.beforeEach((to,froms,next)=>{
//	console.log(to)
	if(to.meta.requireAuth){
//		console.log("需要登陆")//判断该路由是否需要登录权限
		if(sessionStorage.token){		//需要登录权限的路由，通过store.state.token获取当前的token是否存在
//			console.log("有token，：")
			next();   //进行管道中的下一个钩子  ， 若是next（false）：则中断当前的导航，当浏览器的url变了（可能是用户手动后退）那么url的地址会重新from到路由对应的地址
		}else{
			console.log("token，未登陆")
//			 next({
//		        path: '/',
//		        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//		    })
			next()
		}
	}else{
		console.log("不需要登陆")
		next()   //next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航
	}
})

export default router
