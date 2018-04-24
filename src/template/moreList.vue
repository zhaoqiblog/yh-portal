<template>
	<div class="details">
		<Headers />
		<!--<p class="detail-">永辉门户&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻资讯&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻详情</p>-->
		<div class="details-wrap more-list-wrap">
			<Breadcrumb separator=">">
		        <BreadcrumbItem to="/">永辉门户</BreadcrumbItem>
		        <BreadcrumbItem :to="{name:'more',query:{id:$route.query.id,name:$route.query.name}}">{{$route.query.name}}</BreadcrumbItem>
		    </Breadcrumb>
		    <div class="content-wrap clearfix bgc">
		    	<div class="artical-left fl">
		    		<!--http://oa.yonghui.cn/oaapp/km/smissive/km_smissive_main/kmSmissiveMain.do?method=view&fdId=16285317a47d65dc1725ad6432eb5167-->
		    		<!--<iframe src="http://oa.yonghui.cn/oaapp/sys/attachment/sys_att_main/sysAttMain.do?method=view&viewer=htmlviewer&fdId=162854a62eba0b90d8d1d644eb6b8d9e&filekey=toHTML-Aspose_page-1-svg&pageNum=1" width="750" height="900"></iframe>-->
		    		<!--<iframe src="//cdn.mozilla.net/pdfjs/helloworld.pdf" width="700" height="900"></iframe>-->
		    		<div>
			    		<ImgList v-for="(item,index) in listObj.content" :key="item.id"
			    			:imgSrc="item.coverImageUrl"
			    			:title="item.title"
			    			:description="item.summary"
			    			froms="网站"
			    			dates="2018-02-23"
			    			:seeNumber='12'
			    		/>
			    		
			    		<!--<ImgList 
			    			imgSrc="http://a.hiphotos.baidu.com/image/h%3D300/sign=b89c2ef84a34970a5873162fa5cbd1c0/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" 
			    			title="标题标题标题"
			    			description="上看到回复，时刻提防，萨卢克地方，啊就反弹，啊u认识呀啊看到啥啊是大家开会，啊科技时代就"
			    			froms="网站"
			    			dates="2018-02-23"
			    			:seeNumber='12'
			    		/>-->
		    		</div>
		    		<div v-if="listObj.totalElements<1" class="no-more">暂无更多数据!</div>
		    		<Page v-if="listObj.totalElements" :total="listObj.totalElements" :page-size="6" @on-change="changePage"></Page>
		    	</div>
		    	
		    	<CommonRight class="fr"/>
		    </div>
		</div>
		 
		<!--<p>{{text}}</p>-->
	</div>
</template>

<script>
	import Headers from '../components/Header'
	import CommonRight from '../components/commonLeft'
	import ImgList from '../components/imgList'
	import {Breadcrumb,BreadcrumbItem,Page } from 'iview'
	import {mapState,mapActions} from 'vuex'
	import http from '../service'
	export default {
		components:{Headers,Breadcrumb,BreadcrumbItem ,CommonRight,ImgList,Page},
		data(){
			return {
				text:'我是详情页',
				listObj:{},
				pageObj:{}
//				imgSrc:""
			}
		},
		computed:{
			...mapState({
				user:state=>state.user.user,
			})
		},
		created(){
			this.pageObj={currentPage:1,pageSize:6,channel:this.user.channel,columnInfoId:this.$route.query.id,groupCode:this.user.groupCode}
			this.getNewsList(this.pageObj)
		},
		methods:{
			changePage(index){
				console.log(index)
				this.pageObj.currentPage=index;
				this.getNewsList(this.pageObj)
				
			},
			getNewsList(data){
				http.get("/api/cms/article/v1/protected/list",data,(res)=>{
					this.listObj=res.data;
					this.listObj.totalElements=Number(this.listObj.totalElements)
				})
			}
		}
	}
</script>

<style lang="less">
	
	#app{
		.details-wrap{
			width: 1000px;margin:0 auto;line-height:2.5;
			.ivu-breadcrumb{text-align: left;}
			.content-wrap{
				padding-top: 50px;
				.artical-left{
					width: 75%;padding:0px 50px 0 30px;
					.img-list-card{padding: 20px 0;border-bottom: 1px dashed #CCCCCC;}
					.img-list-card:nth-last-child{border-bottom: none;}
					.next-prev{text-align: left;color: #35c0b4;}
					.no-more{font-size: 14px;color: blue;}
					.img-list-card:nth-last-child(1){padding: 20px 0;border-bottom: none;}
					.img-list-card:nth-child(1){padding-top: 0;}
					.ivu-page{
						text-align: left;
						.ivu-page-item-active{
							background-color: #f3f3f3;border-color: #CCCCCC;
							a{color: #999999;}
						}
					}
				}
				.relate-artic-wrap{
					text-align: left;
					h5{font-size: 24px;border-left: 2px solid #33cccc;line-height: 1.2;font-weight: 400;padding-left: 10px;margin-bottom: 10px;margin-top: 70px;}
				.relate-artic{
					border-top: 1px dashed #CCCCCC;padding-top: 25px;
					display: flex;
					align-content: center;
					justify-content: space-between;
					.imgCard{width: 160px;}
				}
				}
			}
		}
	}
</style>