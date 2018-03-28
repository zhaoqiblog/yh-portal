<template>
	<div class="app">
			<header class="headers">
				<div class="header-content">
					<div><img src="../assets/logo.png"/></div>
					<div class="header-right">
						<span class="input-wrap">
							<input type="text" name="" id="" value="" placeholder="请输入关键字..."/>
						</span>
						<span class="person-info" @click="goDetails">
							<img src="../assets/person.png"/> 
							<span class="username">张晓明<img src="../assets/arrow-bottom.png"/></span>							
						</span>
					</div>
				</div>
				
			</header>
		<div class="body-content-wrap clearfix">
			<div class="content-body-left bgc fl">
				ajkhsf 
				<!--<Button type="primary">sdgfsdg</Button>-->
				<Icon type="ionic"></Icon>
			</div>
			<div class="clearfix fl">
				<div class="clearfix">
					<div class="portal-notice bgc fl bd-color com-height p-left-width">
						<Tabs value="notice">
					        <TabPane label="通知" name="notice">
					        	<ul>
					        		<List class="list-common" v-for="e,index in noticeList" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        </TabPane>
					        <TabPane label="公告" name="announcement">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        </TabPane>
					    </Tabs>
					</div>
					<div class="portal-agency fl bgc bd-color com-height p-right-width">
						<Tabs value="agency">
					        <TabPane label="待办" name="agency">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" left="clock" :text="e.title+e.author" :dates='e.date' diresption="skjdhfkjsh" :key="index"></List>
					        	</ul>
					        	
					        </TabPane>
					        <TabPane label="待阅" name="read">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" left="clock" :text="e.title+e.author" :dates='e.date' diresption="skjdhfkjsh" :key="index"></List>
					        	</ul>
					        </TabPane>
					    </Tabs>
					</div>
				</div>
				<div class="clearfix">
					<div class="portal-information bgc fl bd-color com-height p-left-width">
						<Tabs value="news">
					        <TabPane label="新闻资讯" name="news">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        	
					        </TabPane>
					        <TabPane label="订阅资讯" name="subscription">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        </TabPane>
					        <TabPane label="项目资讯" name="project">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        </TabPane>
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
					        		<!--<li class="clearfix">
					        			<div class="fl app-logo"><img src="../assets/downloadApp2.png"/></div>
					        			<div class="fl">永辉微店</div>
					        			<div class="fr download-logo">
					        				<i class="apple logo"></i>
					        				<i class="android logo"></i>
					        				<i class="wechat logo"></i>
					        				<i class="weibo logo"></i>
					        			</div>
					        		</li>
					        		<li class="clearfix">
					        			<div class="fl app-logo"><img src="../assets/downloadApp3.png"/></div>
					        			<div class="fl">永辉传媒</div>
					        			<div class="fr download-logo">
					        				<i class="apple logo"></i>
					        				<i class="android logo"></i>
					        				<i class="wechat logo"></i>
					        				<i class="weibo logo"></i>
					        			</div>
					        		</li>-->
					        	</ul>
					        	<div class="more-info"><a href="#" class="active-color">查看更多 &gt; </a></div>
					        <!--</TabPane>-->
					    <!--</Tabs>-->
					</div>
				</div>
				<div class="clearfix">
					<div class="portal-loopimg bgc fl">
						<Carousel autoplay loop  :height="278" radius-dot arrow="never">
							<CarouselItem><div class="demo-carousel">1</div></CarouselItem>
							<CarouselItem><div class="demo-carousel">2</div></CarouselItem>
							<CarouselItem><div class="demo-carousel">3</div></CarouselItem>
							<CarouselItem><div class="demo-carousel">4</div></CarouselItem>
						</Carousel>
					</div>
					<div class="portal-event bgc p-right-width fl com-height">
						<Tabs value="Promotions">
					        <TabPane label="促销活动" name="Promotions">
					        	<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        </TabPane>
					        <TabPane label="最新上架" name="newGoods">
								<ul>
					        		<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        	</ul>
					        </TabPane>
					    </Tabs>
					</div>
				</div>
				<div class="clearfix">
					<div class="portal-other bgc fl com-height p-left-width">
						<Tabs value="commondata">
					        <TabPane label="常用资料" name="commondata">
					        	<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        </TabPane>
					        <TabPane label="标准规范" name="standard">
					        	<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        </TabPane>
					        <TabPane label="财务专栏" name="financial">
					        	<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        </TabPane>
					        <TabPane label="HR政策" name="hr">
					        	<List class="list-common" v-for="e,index in initData" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        </TabPane>
					    </Tabs>
					</div>
					<div class="portal-newKnowledge bgc p-right-width fl com-height">
						<Tabs value="newKnowledge">
					        <TabPane label="最新知识" name="newKnowledge">
					        	<List class="list-common" v-for="e,index in initData" :left="e.area" :text="e.title+e.author" :dates='e.date' :key="index"></List>
					        </TabPane>
					    </Tabs>
					</div>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
	import List from '../components/list'
	import {Icon,Tabs,TabPane,Carousel,CarouselItem } from 'iview'
	import {mapGetters,mapState } from 'vuex'
	import http from '../service'
	
//	const TabPane=Tabs.TabPane
	export default {
		components:{List,Icon,Tabs,TabPane,Carousel,CarouselItem },
		computed: {
			...mapState({
				noticeList:state=>state.indexs.noticeList,
//				inventoryToConfirm:state=>state.backCount.inventoryToConfirm,
			})
		  },
		  created(){
		  	this.$store.dispatch('updateNoticeList',this.initData)
			http.get("/upm/api/v1/public/user/80467269",(res)=>{
				console.log(res)
				http.get("/api/shop-goods/v1/protected/query/className",{className:res.data.costName,costCenterNum:res.data.costNumber},(res1)=>{
					console.log(res1)
				})
			})
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
//					{title:'新员工入职审批',author:'高小阳',description:'市场部/华东区/销售经理',date:'2018-02-26',area:'江苏'},
				],
				initImgdata:[
					{title:'永辉超市',imgs:require('../assets/downloadApp1.png'),imgCode:require('../assets/downloadApp1-code.png'),isShow:false},
					{title:'永辉微店',imgs:require('../assets/downloadApp2.png'),imgCode:require('../assets/downloadApp1-code.png'),isShow:false},
					{title:'永辉传媒',imgs:require('../assets/downloadApp3.png'),imgCode:require('../assets/downloadApp1-code.png'),isShow:false},
				]
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
			}
		}
	}
</script>

<style lang="less">
	@bd-color: #e2e9ea;
	#app{
	.headers{height: 86px;background: #0d1a53;
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	    color: #59779f; opacity:1; 
	}
	
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	    color: #59779f;opacity:1;
	}
	
	input:-ms-input-placeholder{
	    color: #59779f;opacity:1;
	}
	
	input::-webkit-input-placeholder{
	    color: #59779f;opacity:1;
	}
		.header-content{
			width: 990px;margin: 0 auto;display: flex;justify-content:space-between;align-items: center;height:100%;
			input{
				/*background-color: #16285c;*/
				width: 260px;border: none;border-radius: 16px;height: 32px;font-size: 14px;color: #59779F;padding-left: 16px;
			    background: url(../assets/search.png) 246px  center no-repeat #182b62;
			}
			.header-right{display: flex;align-items: center;
				.person-info{margin-left: 20px;display: flex;align-items: center;justify-content: space-between;
				cursor:pointer;
					>img{width: 15px;margin-right: 6px;}
				}
			}


			.username{
				color: #fff;opacity: 0.5;font-size: 14px;
				img{margin-left: 5px;}
			}
		}
	}
	.body-content-wrap{
		width: 990px;margin: 0 auto;
		.content-body-left{width: 118px;height: 100%;}
		.portal-agency{margin: 10px 0 10px 0;}
		.portal-information{margin: 0 10px 10px 10px;}
		.com-height{height: 278px;padding: 3px 20px;}
		.portal-loopimg{margin: 0px 0 0 10px;width: 528px;}
		.portal-newKnowledge{margin: 10px 0;}
		.portal-other{margin: 10px;}
		.p-left-width{width: 518px;}
		.p-right-width{width: 328px;}
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
		border-radius: 5px;margin:10px;
	}
}
</style>