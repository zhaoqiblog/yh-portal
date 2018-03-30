<template>
	<div class="details">
		<Headers />
		<!--<p class="detail-">永辉门户&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻资讯&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻详情</p>-->
		<div class="details-wrap">
			<Breadcrumb separator=">">
		        <BreadcrumbItem to="/">永辉门户</BreadcrumbItem>
		        <BreadcrumbItem to="/">新闻资讯</BreadcrumbItem>
		        <BreadcrumbItem>新闻详情</BreadcrumbItem>
		    </Breadcrumb>
		    <div class="content-wrap clearfix bgc">
		    	<div class="artical-left fl bd-color"></div>
		    	<CommonRight class="fr"/>
		    </div>
		</div>
		 
		<!--<p>{{text}}</p>-->
	</div>
</template>

<script>
	import Headers from '../components/Header'
	import CommonRight from '../components/commonLeft'
	import {Breadcrumb,BreadcrumbItem, } from 'iview'
	export default {
		components:{Headers,Breadcrumb,BreadcrumbItem ,CommonRight},
		data(){
			return {
				text:'我是详情页'
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
				height: 600px;padding-top: 50px;
				
				.artical-left{width: 75%;}
				/*.artical-right{
					width: 22.5%;margin-right: 2%;
					.commonStyles{
						p{font-weight:500;border-top: 2px solid @bd-top-color;font-size: 18px;color: #000000;line-height: 60px;border-bottom: 1px dashed #EEEEEE;}
					}
					li{color: #666666;}
					.new-latest-articals{
						
						ul{width: 90%;margin-left: 10%;}
						li{
							text-align: left;
							list-style-image: url(../assets/details/list-style.png);
							line-height: 1.5;
							padding-top: 20px;
						}
					}
					.category-contents{
						margin-bottom: 30px;
						li{border-bottom: 1px solid #eeeeee;line-height: 3;}
						li:nth-child(1){border-top: none;}
					}
				}*/
			}
		}
	}
</style>