<template>
	<div class="details">
		<Headers />
		<!--<p class="detail-">永辉门户&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻资讯&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻详情</p>-->
		<div class="details-wrap">
			<Breadcrumb separator=">">
		        <BreadcrumbItem to="/">永辉门户</BreadcrumbItem>
		        <BreadcrumbItem :to="'/more/'+$route.query.pid">{{$route.query.txt}}</BreadcrumbItem>
		        <BreadcrumbItem>{{$route.query.txt}}详情</BreadcrumbItem>
		    </Breadcrumb>
		    <div class="content-wrap clearfix bgc">
		    	<div class="artical-left fl">
		    		<div class="details-content">
		    			<h3>{{allData.title}}</h3>
		    			<div class="contents">
		    				<p class="sumery">{{allData.createDate}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阅读&nbsp;&nbsp;{{allData.viewCount}}</p>
		    				<p class="content">{{allData.content}}</p>
		    			</div>
	    				
	    			</div>
		    		<div class="next-prev">		    			
		    			<div>上一篇：已经是第一篇</div>
		    			<div>下一篇：[测试才一片]啊金峰说爱神的箭，处危机恶化，进可攻</div>
		    		</div>
		    		<div class="relate-artic-wrap">
		    			<h5>相关文章</h5>
		    			<div class="relate-artic">
		    				<ImgCard 
		    					imgSrc="http://a.hiphotos.baidu.com/image/h%3D300/sign=b89c2ef84a34970a5873162fa5cbd1c0/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" 
		    					title="测试图片card模块显示与否jfs">
		    				</ImgCard>
		    				<ImgCard 
		    					imgSrc="http://a.hiphotos.baidu.com/image/h%3D300/sign=b89c2ef84a34970a5873162fa5cbd1c0/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" 
		    					title="测试图片card模块显示与否">
		    				</ImgCard>
		    				<ImgCard 
		    					imgSrc="http://a.hiphotos.baidu.com/image/h%3D300/sign=b89c2ef84a34970a5873162fa5cbd1c0/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" 
		    					title="测试图片card模块显示与否">
		    				</ImgCard>
		    				<ImgCard 
		    					imgSrc="http://a.hiphotos.baidu.com/image/h%3D300/sign=b89c2ef84a34970a5873162fa5cbd1c0/d043ad4bd11373f0924d8948af0f4bfbfaed04f2.jpg" 
		    					title="测试图片card模块显示与否">
		    				</ImgCard>
		    			</div>
		    		</div>
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
	import ImgCard from '../components/imgCard'
	import {Breadcrumb,BreadcrumbItem, } from 'iview'
	import http from '../service'
	export default {
		components:{Headers,Breadcrumb,BreadcrumbItem ,CommonRight,ImgCard},
		data(){
			return {
				text:'我是详情页',
//				imgSrc:""，
				allData:{},
			}
		},
		created(){
			const id = this.$route.query.id;
			http.get("/api/cms/article/v1/protected/"+id,(res)=>{
				
				if(res.success==true){
					console.log(res.data.content)
					this.allData=res.data
				}
			})
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
				
				.artical-left{
					width: 75%;padding:0px 70px 0 20px;
					.details-content{
						h3{font-size: 28px;}
						.contents{
							.sumery{color: #b6b6b6;text-align: left;font-size: 16px;}
							.content{text-align: left;}
						}
					}
					
					.next-prev{text-align: left;color: #35c0b4;}
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