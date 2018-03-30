<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
	import http from './service'
	import {mapState,mapActions} from 'vuex'
export default {
  name: 'App',
  computed:mapState({
//  data: state => state.shop.supplement,
    userGruop: state => state.user.userGruop
  }),
  
  created(){
//	http.get()
		const obj={userNo:'',currentPage:1,pageSize:10}
//		const geiNavObj={channel:1,groupCode:JSON.parse(sessionStorage.userGroup)[1].code,userNo:''}
		this.$store.dispatch({type:"updateUserGroup",data:obj})
//		console.log(this.userGruop)
//		console.log(JSON.parse(sessionStorage.userGroup))
		
  }
}
</script>

<style lang="less">
	@import 'css/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eef6f8;
  /*margin-top: 60px;*/
}
*{margin: 0;padding: 0;}
/*.bgc{background-color: #ffffff;}*/
.bgc{background-color: @bg-color;}
.active-color{color:@active-color}
</style>
