import axios from "axios"
import qs from "qs"

axios.defaults.baseURL="https://hr.yh-test.com/mas-api/restful/inventory/"
axios.defaults.timeout=6000 //最长请求时间 ms
axios.defaults.withCredentials=true //默认跨域
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

//请求拦截器 ：请求发起之前进行操作
axios.interceptors.request.use((config)=>{
	if(sessionStorage.getItem("token")){
		config.headers.Authorization="bearer " +`${sessionStorage.getItem('token')}`
	}else{
		
	}
	return config;
},(err)=>{
	return Promise.reject(err)
})

//响应拦截器
axios.interceptors.response.use((res)=>{
	return res;
	if(res.status!==200){
		return Promise.reject(res)
	}else{
		return Promise.resolve(res)
	}
},(err)=>{
	console.log("请求出错，请查看")
	return Promise.reject(err)
})

const http={
	get:(url,params,callback=null)=>{
//		let obj ={params:params}
		let options ={method:'get',url:url/*,data;params*/};
		if(callback){
			options.params=params;
		}else{
			callback=params;  //没有回调函数的情况 
		}
		axios(options).then((res)=>{
			callback(res.data)
		},(err)=>{
			console.log('请求出错，请重试！');
			console.log(err);
		})
	},
	post:(url,params,callback=null)=>{
		let options ={method:'post',url:url,data:params};
		axios(options).then((res)=>{
			callback(res.data)
		},(err)=>{
			console.log('请求出错，请重试！');
			console.log(err);
		})
	},
	put:(url,params,callback=null)=>{
		
	}
}

export default http;


