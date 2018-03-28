<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
