<template>
	<!--<div class="lists">-->
		<!--<ul>-->
			<router-link to="/detail">
				<li class="list-styles">
					<span class="lefts">
						<img src="../assets/list-clock.png" v-if="left=='clock'"/>
						<span v-if="left!=='clock'&&left!=='none'" class="left-text">[ {{left}} ]&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<span>{{text}}</span>
						<span v-if="diresption" class="description">{{diresption}}</span>
					</span>
					<span class="list-dates">{{dates}}</span>
				</li>
			</router-link>
		<!--</ul>-->
	<!--</div>-->
</template>

<script>
	export default{
//		data(){
//			return {
//				sss:'uuu'
//			}
//		},
		props:{
			left:{type:String,default:'none'}, //可选：none：列表左侧没有数据，clock：左侧图标，text：左侧文字
			dates:[String],//none：右侧不显示日期，date：显示日期
			text:[String],  //显示内容,黑体字
			diresption:[String], //显示的描述信息,灰体字
			newsId:[String],
		},
		methods:{
			goDetails(){
				
			}
		}
	}
</script>

<style lang="less">
	.list-styles{
		list-style: none;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		.lefts{
			display: flex;justify-content: flex-start;align-items: center;
			img{margin-right: 3px;width: 12px;}
			span{color: #444444;}
			.description{color: #88888888;margin-left: 5px;}
			.left-text{color: #c1a47a;}
			
		}	
		.list-dates{color: #b9b9b9;}
	}
</style>