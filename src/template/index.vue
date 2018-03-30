<template>
	<div class="app">
		<Headers></Headers>
		<div class="body-content-wrap clearfix">
			<div class="clearfix" v-if="indexAllList.length>0">
				<!--<div class="clearfix">-->
					<div class="portal-notice bgc fl bd-color com-height">
						<Tabs>
					        <TabPane :label="e.text" :key='e.id' :name="e.data.code" v-for="e,index in indexAllList[0].children" >
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <!--<TabPane label="公告" name="announcement">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>-->
					    </Tabs>
					</div>
					<div class="portal-agency fl bgc bd-color com-height p-left-width">
						<Tabs>
					        <TabPane :label="e.text" :key='e.id' :name="e.data.code" v-for="e,index in indexAllList[1].children">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" left="clock" :text="e.title+e.author" :dates='e.date' diresption="skjdhfkjsh" :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <!--<TabPane label="待阅" name="read">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" left="clock" :text="e.title+e.author" :dates='e.date' diresption="skjdhfkjsh" :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>-->
					    </Tabs>
					</div>
				<!--</div>-->
				<!--<div class="clearfix">-->
					<div class="portal-information bgc fl bd-color com-height p-left-width">
						<Tabs>
					        <TabPane :label="e.text" :key='e.id' :name="e.data.code" v-for="e,index in indexAllList[2].children">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <!--<TabPane label="订阅资讯" name="subscription">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <TabPane label="项目资讯" name="project">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>-->
					    </Tabs>
					</div>
					<div class="portal-download bgc fl bd-color com-height p-right-width">
						<!--<Tabs value="download">-->
					        <!--<TabPane label="手机应用下载" name="download">-->
					        	<h6><span>&nbsp;手机应用下载&nbsp;&nbsp;</span></h6>
					        	<ul>
					        		<li class="clearfix" v-for="(e,index) in initImgdata" :key="index">
					        			<div class="fl app-logo"><img :src="e.imgs"/></div>
					        			<div class="fl">{{e.title}}</div>
					        			<div class="fr download-logo">
					        				<div>
						        				<i class="apple logo" id='e' @mouseover="showCode(index)" @mouseout="hideCode(index)"></i>
						        				<i class="android logo"></i>
						        				<i class="wechat logo"></i>
						        				<i class="weibo logo"></i>
					        				</div>
					        				<img v-if="e.isShow" :src="e.imgCode"/>
					        			</div>
					        		</li>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        <!--</TabPane>-->
					    <!--</Tabs>-->
					</div>
				<!--</div>-->
				<!--<div class="clearfix swiper-loop">-->
					<div class="portal-loopimg bgc fl bd-color-right bd-color">
						<Carousel autoplay loop  :height="278" radius-dot arrow="never">
							<CarouselItem><div class="demo-carousel">1</div></CarouselItem>
							<CarouselItem><div class="demo-carousel">2</div></CarouselItem>
							<CarouselItem><div class="demo-carousel">3</div></CarouselItem>
							<CarouselItem><div class="demo-carousel">4</div></CarouselItem>
						</Carousel>
					</div>
					<div class="portal-event bgc p-right-width fl com-height bd-color bd-color-left">
						<Tabs value="Promotions">
					        <TabPane label="促销活动" name="Promotions">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <TabPane label="最新上架" name="newGoods">
								<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					    </Tabs>
					</div>
				<!--</div>-->
				<!--<div class="clearfix">-->
					<div class="portal-other bgc fl com-height p-left-width bd-color">
						<Tabs value="commondata">
					        <TabPane label="常用资料" name="commondata">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <TabPane label="标准规范" name="standard">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <TabPane label="财务专栏" name="financial">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					        <TabPane label="HR政策" name="hr">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					    </Tabs>
					</div>
					<div class="portal-newKnowledge bgc p-right-width fl com-height bd-color">
						<Tabs value="newKnowledge">
					        <TabPane label="最新知识" name="newKnowledge">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	<router-link to="/more/notice"><div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div></router-link>
					        </TabPane>
					    </Tabs>
					</div>
				<!--</div>-->
			</div>			
		</div>
	</div>
</template>

<script>
	import List from '../components/list'
	import Headers from '../components/Header'
	import {Icon,Tabs,TabPane,Carousel,CarouselItem } from 'iview'
	import {mapGetters,mapState,mapActions } from 'vuex'
	import http from '../service'
	
//	const TabPane=Tabs.TabPane
	export default {
		components:{List,Headers,Icon,Tabs,TabPane,Carousel,CarouselItem },
		computed: {
			...mapState({
				noticeList:state=>state.indexs.noticeList,
				userGruop: state => state.user.userGruop,
				indexAllList:state=>state.indexs.indexAllList
//				inventoryToConfirm:state=>state.backCount.inventoryToConfirm,
			})
		  },
		  created(){
		  	const geiNavObj={channel:1,groupCode:'YH01',userNo:''}
			http.get("/api/cms/column/v1/protected/show",geiNavObj,(res)=>{
				
				this.$store.dispatch('updateIndexAllList',{data:res.data})
					console.log(this.indexAllList)			
			})
			
		  },
		  mounted(){
		  	this.$store.dispatch('updateNoticeList',this.initData)
		  },
		data(){
			return {
				initData:[
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
				],
				initImgdata:[
					{title:'永辉超市',imgs:require('../assets/downloadApp1.png'),imgCode:require('../assets/downloadApp1-code.png'),isShow:false},
					{title:'永辉微店',imgs:require('../assets/downloadApp2.png'),imgCode:require('../assets/downloadApp1-code.png'),isShow:false},
					{title:'永辉传媒',imgs:require('../assets/downloadApp3.png'),imgCode:require('../assets/downloadApp1-code.png'),isShow:false},
				],
				
			}
		},
		methods:{
			showCode(index){
				this.initImgdata.forEach(e=>{
					e.isShow=false;
				})
				this.initImgdata[index].isShow=true;
			},
			hideCode(index){
				this.initImgdata[index].isShow=false;
			},
			goDetails(){
				this.$router.push({path:'detail'})
			},
//			showApplication(){
//				this.isApplicationShow=true;
//			},
//			hideApplication(){
//				this.isApplicationShow=false;
//			},
			goMore(){
				this.$router.push({name:'more'})
			}
		}
	}
</script>

<style lang="less">
	@bd-color: #e2e9ea;
	.app{
		.more-info{text-align: right;}
	}
	#app{
	.portal-nav{
		width: 1000px;position: absolute;top: 65px;left: 50%;margin-left: -500px;z-index: 6;
		padding: 0 15px;box-shadow: 0px 5px 12px #d8dcdd;border-top: none;
		
		.nav-link{
			margin:10px 13px;
			p{text-align: center;}
		}
	}
	.body-content-wrap{
		width: 1000px;margin: 0 auto;
		.content-body-left{width: 118px;height: 100%;}
		.portal-agency{margin: 10px 0 10px 0;}
		.portal-information{margin: 0 10px 10px 0;}
		.com-height{height: 278px;padding: 3px 20px;}
		.portal-loopimg{margin: 0;width: 528px;box-sizing: border-box;height: 278px;border-right: none;}
		.portal-event{border-left: none;}
		.portal-newKnowledge{margin: 10px 0;}
		.portal-other{margin: 10px 10px 10px 0;}
		.p-left-width{width: 518px;}
		.p-right-width{width: 470px;}
		.list-common{line-height: 2.2;}
		.portal-download{
			h6{
				text-align:left;
				border-bottom: 1px solid #e2e9ea;
				color: #53d3c8;
				span{
					display:inline-block;padding: 8px 0px;
					/*border-bottom: 2px solid #53d3c8;*/
					/*:after{
						content:'';display: block;width: 100px;border-bottom: 2px solid #42B983;
					}*/
				}
				span:after{
					content:'';display: block;border-bottom: 2px solid #53d3c8;width: calc(auto+5);
					position: relative;top: 9px;left: 0px;
				}
			}
			.ivu-tabs-bar{margin-bottom: 5px;}
			li{
				padding: 10px 0;line-height: 48px;border-bottom: 1px solid @bd-color;/*font-weight:600;*/
				/*position:relative;*/
				.app-logo{height: 48px;margin-right: 15px;}
				.download-logo{
					position: relative;
					>img{position: absolute;top: -140px;left: -54px;}
					.logo{display: inline-block;height: 17px;margin-left: 10px;}
					.apple{width: 13px;background: url(../assets/apple-normal.png) center center no-repeat}
					.android{width: 15px;background: url(../assets/android-normal.png) center center no-repeat}
					.wechat{width: 20px;background: url(../assets/wechat-normal.png) center center no-repeat}
					.weibo{width: 20px;background: url(../assets/weibo-normal.png) center center no-repeat}
					/*:hover{background: url(../assets/apple-active.png) center center no-repeat;}*/
				}
			}
			.more-info{line-height: 2;text-align: right;}
			ul {
				/*li:nth-child(1){padding-top: 0px;}*/
			}
		}
	}
	.portal-notice{
		border-radius: 5px;margin:10px 10px 10px 0;width: 470px;
	}
	.swiper-loop{
		.bd-color-left{border-left: none;}
		.bd-color-right{border-right: none;}
	}
}
</style>