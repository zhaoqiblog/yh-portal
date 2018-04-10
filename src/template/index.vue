<template>
	<div class="app">
		<Headers></Headers>
		<div class="body-content-wrap clearfix">
			<div class="clearfix" v-if="indexAllList.length>0">
				<!--<div class="clearfix">-->
				<!--portal-notice bgc  fl bd-color com-height common-board-->
				<div :class="item.data.type!=='banner' ? classObj : classObj1" v-for="item,index in indexAllList">
					<Tabs v-if="item.data.type!=='banner'" @on-click="clickTabs">
						<TabPane :label="e.text" :key='e.id' :name="e.id" v-for="e,index1 in item.children">
							<ul>
								<List class="list-common" v-for="child,index2 in e.data.cmsArticles" v-if="index2<8" :id="child.id" :left="child.summary" :text="child.title" :dates='child.createDate' :key="index2"></List>
							</ul>
							<router-link :to="'/more/'+e.id">
								<div class="more-info">
									<a href="#" class="active-color">查看更多 &gt; </a>
								</div>
							</router-link>
						</TabPane>
					</Tabs>
					<div id="clearfix fl" v-if="item.data.type=='banner'">
						<div class="portal-loopimg bgc fl bd-color-right bd-color">
							<Carousel autoplay loop :height="278" radius-dot arrow="never">
								<CarouselItem v-for="imgs,index in item.children[0].data.cmsBanners" :key="index">
									<div class="demo-carousel"><img :src="imgs.imageUrl"/></div>
								</CarouselItem>
								<!--<CarouselItem><div class="demo-carousel">2</div></CarouselItem>
									<CarouselItem><div class="demo-carousel">3</div></CarouselItem>
									<CarouselItem><div class="demo-carousel">4</div></CarouselItem>-->
							</Carousel>
						</div>
						<div class="portal-event bgc p-right-width fl com-height bd-color bd-color-left">
							<Tabs>
								<TabPane v-for="imgRight,index in item.children" v-if="index>0" :label="imgRight.text" :name="imgRight.id" :key="imgRight.id">
									<ul>
										<List class="list-common" v-for="right,index in imgRight.data.cmsArticles" :left="right.summary" :text="right.title" :dates='right.createDate' :key="right.id"></List>
									</ul>
									<router-link :to="'/more/'+imgRight.id">
										<div class="more-info">
											<a href="#" class="active-color">查看更多 &gt; </a>
										</div>
									</router-link>
								</TabPane>
							</Tabs>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import List from '../components/list'
	import Headers from '../components/Header'
	import { Icon, Tabs, TabPane, Carousel, CarouselItem } from 'iview'
	import { mapGetters, mapState, mapActions } from 'vuex'
	import http from '../service'

	//	const TabPane=Tabs.TabPane
	export default {
		components: {
			List,
			Headers,
			Icon,
			Tabs,
			TabPane,
			Carousel,
			CarouselItem
		},
		computed: {
			...mapState({
				userGruop: state => state.user.userGruop,
				indexAllList: state => state.indexs.indexAllList,
				user: state => state.user.user
				//				inventoryToConfirm:state=>state.backCount.inventoryToConfirm,
			})
		},
		created() {
			this.pageObj.channel = this.user.channel;
			this.pageObj.groupCode = this.user.groupCode
			const geiNavObj = {
				channel: this.user.channel,
				groupCode: this.user.groupCode,
				userNo: this.user.userNo
			};
			let swipeId=""
			http.get("/api/cms/column/v1/protected/show", geiNavObj, (res) => {
				const allCard = res.data.map(e => {
					return e
				})
				this.allData = allCard;
				this.$store.dispatch('setIndexAllList', {
					data: allCard
				})
				//筛选代办待阅或者第一项没有数据的，重新去请求
				this.allData.forEach((e, index) => {
					e.children.forEach((d, index1) => {
						if(index1 == 0 && d.data.cmsArticles < 1) {
							if(d.data.code == "todo" || d.data.code == "toread") {
								this.pageObj.columnInfoId = d.id
								this.getNewsList(this.pageObj, (resData) => {
//									console.log(resData)
								})
							}else if(d.data.code='banners'){
								//获取轮播图id
								swipeId=d.id;
							}
						}
					})
				})
				//首页模块信息
				this.$store.dispatch('setIndexAllList', {
					data: allCard
				})
				//					获取默认显示的列表信息
				const getImgObj = {
					currentPage: 1,
					pageSize: 8,
					channel: this.user.channel,
					columnInfoId: swipeId,
					groupCode: this.user.groupCode
				}
				
				//请求轮播图
				this.getNewsList(getImgObj,(resData)=>{
//					console.log(resData)
				})
				
				this.$store.dispatch('setIndexAllList', {
					data: allCard
				})
				
			})

		},
		mounted() {
		},
		data() {
			return {
				allData: [], //初始所有data，按模块区分
				allSameLevel: [], //平级所有的列表
				classObj: {
					'portal-notice': true,
					'bgc': true,
					'fl': true,
					'bd-color': true,
					'com-height': true,
					'common-board': true
				},
				classObj1: {
					'portal-notice': true,
					'bgc': true,
					'fl': true,
					'bd-color': false,
					'com-height': false,
					'common-board': false,
					'mar': true
				},
				
				initImgdata: [{
						title: '永辉超市',
						imgs: require('../assets/downloadApp1.png'),
						imgCode: require('../assets/downloadApp1-code.png'),
						isShow: false
					},
					{
						title: '永辉微店',
						imgs: require('../assets/downloadApp2.png'),
						imgCode: require('../assets/downloadApp1-code.png'),
						isShow: false
					},
					{
						title: '永辉传媒',
						imgs: require('../assets/downloadApp3.png'),
						imgCode: require('../assets/downloadApp1-code.png'),
						isShow: false
					},
				],
				pageObj: {
					currentPage: 1,
					pageSize: 8,
					channel: "",
					columnInfoId: "",
					groupCode: ""
				},
			}
		},
		methods: {
			getNewsList(data, callback = null) {
				http.gets("/api/cms/article/v1/protected/list", data).then((res) => {
					let obj = {}
					if(res.data){
						obj = res.data
						obj.totalElements = Number(obj.totalElements)
					}
					callback(obj)
				})
			},
			goDetails() {
				this.$router.push({
					path: 'detail'
				})
			},
			clickTabs(name) {
//				console.log(name)
				this.pageObj.columnInfoId = name;
				this.pageObj.currentPage = 1;
//				console.log(this.indexAllList,this.allData)
				let allLists = this.indexAllList
				this.getNewsList(this.pageObj,(res)=>{
					allLists.forEach((e,index)=>{
						e.children.forEach((am,index)=>{
							if(am.id==name){
								am.data.cmsArticles=res.content;
							}
						})
					})
				})
			},
			goMore() {
				this.$router.push({
					name: 'more'
				})
			}
		}
	}
</script>

<style lang="less">
	@bd-color: #e2e9ea;
	.app {
		.more-info {
			text-align: right;
		}
	}
	
	#app {
		.portal-nav {
			width: 1000px;
			position: absolute;
			top: 65px;
			left: 50%;
			margin-left: -500px;
			z-index: 6;
			padding: 0 15px;
			box-shadow: 0px 5px 12px #d8dcdd;
			border-top: none;
			.nav-link {
				margin: 10px 13px;
				p {
					text-align: center;
				}
			}
		}
		.body-content-wrap {
			width: 1000px;
			margin: 0 auto;
			.mar {
				margin-top: 10px;
			}
			.common-board {
				margin-top: 10px;
				border-radius: 5px;
				height: 278px;
			}
			.common-board:nth-child(odd) {
				margin-left: 0;
				width: 518px;
			}
			.common-board:nth-child(even) {
				margin-left: 10px;
				width: 470px;
			}
			.common-board:nth-child(1) {
				width: 470px;
			}
			.common-board:nth-child(2) {
				width: 518px;
				margin: 10px 0 0 10px
			}
			.content-body-left {
				width: 118px;
				height: 100%;
			}
			.portal-agency {
				margin: 10px 0 10px 0;
			}
			.portal-information {
				margin: 0 10px 10px 0;
			}
			.com-height {
				height: 278px;
				padding: 3px 20px;
			}
			.portal-loopimg {
				margin: 0;
				width: 528px;
				box-sizing: border-box;
				height: 278px;
				border-right: none;
			}
			.portal-event {
				border-left: none;
			}
			.portal-newKnowledge {
				margin: 10px 0;
			}
			.portal-other {
				margin: 10px 10px 10px 0;
			}
			.p-left-width {
				width: 518px;
			}
			.p-right-width {
				width: 470px;
			}
			.list-common {
				line-height: 2.2;
			}
			.portal-download {
				h6 {
					text-align: left;
					border-bottom: 1px solid #e2e9ea;
					color: #53d3c8;
					span {
						display: inline-block;
						padding: 8px 0px;
						/*border-bottom: 2px solid #53d3c8;*/
						/*:after{
						content:'';display: block;width: 100px;border-bottom: 2px solid #42B983;
					}*/
					}
					span:after {
						content: '';
						display: block;
						border-bottom: 2px solid #53d3c8;
						width: calc(auto+5);
						position: relative;
						top: 9px;
						left: 0px;
					}
				}
				.ivu-tabs-bar {
					margin-bottom: 5px;
				}
				li {
					padding: 10px 0;
					line-height: 48px;
					border-bottom: 1px solid @bd-color;
					/*font-weight:600;*/
					/*position:relative;*/
					.app-logo {
						height: 48px;
						margin-right: 15px;
					}
					.download-logo {
						position: relative;
						>img {
							position: absolute;
							top: -140px;
							left: -54px;
						}
						.logo {
							display: inline-block;
							height: 17px;
							margin-left: 10px;
						}
						.apple {
							width: 13px;
							background: url(../assets/apple-normal.png) center center no-repeat
						}
						.android {
							width: 15px;
							background: url(../assets/android-normal.png) center center no-repeat
						}
						.wechat {
							width: 20px;
							background: url(../assets/wechat-normal.png) center center no-repeat
						}
						.weibo {
							width: 20px;
							background: url(../assets/weibo-normal.png) center center no-repeat
						}
						/*:hover{background: url(../assets/apple-active.png) center center no-repeat;}*/
					}
				}
				.more-info {
					line-height: 2;
					text-align: right;
				}
				ul {
					/*li:nth-child(1){padding-top: 0px;}*/
				}
			}
		}
		.portal-notice {
			border-radius: 5px;
		}
		.swiper-loop {
			.bd-color-left {
				border-left: none;
			}
			.bd-color-right {
				border-right: none;
			}
		}
	}
	
	/*
	 辉信联保人互评=>2个独立功能（1/2集群）方案是否可以 
	 * */
</style>