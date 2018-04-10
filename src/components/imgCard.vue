<template>
	<router-link to="/detail">
		<div class="imgCard">
			<img :src="imgSrc"/>
			<p class="bd-color">{{title}}</p>
		</div>
	</router-link>
</template>

<script>
	export default{
		props:['imgSrc','title']
//		props:{
//			left:{type:String,default:'none'}, //可选：none：列表左侧没有数据，clock：左侧图标，text：左侧文字
//			dates:[String],//none：右侧不显示日期，date：显示日期
//			text:[String],  //显示内容,黑体字
//			diresption:[String], //显示的描述信息,灰体字
//			newsId:[String],
//		},
	}
</script>

<style lang="less">
	.imgCard{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 8px;
		img{width: 100%;}
		p{text-align: left;color: #000000;line-height: 1.2;height: 50px;overflow: hidden;text-overflow: ellipsis;padding: 10px;width: 100%;}
	}
</style>