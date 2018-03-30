<template>
	<div class="artical-right">
		<div class="category-contents commonStyles">
			<p>分类目录</p>
			<ul>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
				<li>永辉新闻</li>
			</ul>
		</div>
		<div class="new-latest-articals commonStyles">
			<p>最新文章</p>
			<ul>
				<li>宽士大夫，啊善林科技。啊流口水。啊科技时代个</li>
				<li>宽士大夫，啊善林科技。啊流口水。啊科技时代个</li>
				<li>宽士大夫，啊善林科技。啊流口水。啊科技时代个</li>
				<li>宽士大夫，啊善林科技。啊流口水。啊科技时代个</li>
				<li>宽士大夫，啊善林科技。啊流口水。啊科技时代个</li>
				<li>宽士大夫，啊善林科技。啊流口水。啊科技时代个</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		}
	}
</script>

<style lang="less">
	@bd-top-color:#53d3c8;
.artical-right{
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
			/*border-bottom: 1px dashed #EEEEEE;*/
			line-height: 1.5;
			padding-top: 20px;
		}
	}
	.category-contents{
		margin-bottom: 30px;
		li{border-bottom: 1px solid #eeeeee;line-height: 3;}
		li:nth-child(1){border-top: none;}
	}
}
</style>