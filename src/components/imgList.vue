<template>
	<div class="img-list-card">
		<img :src="imgSrc" />
		<div class="imgList-right">
			<dl>
				<dt>{{title}}</dt>
				<dd>{{description}}</dd>
			</dl>
			<div class="bottom-details">
				<span>来源&nbsp;&nbsp;{{froms}}</span>
				<span class="tipInfo tipInfo-dates"><i></i>&nbsp;{{dates}}</span>
				<span class="tipInfo tipInfo-see">
					<i></i>&nbsp;{{seeNumber}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			imgSrc:[String],
			title:[String],
			description:[String],
			froms:[String],
			dates:[String],
			seeNumber:[Number]
		}
	}
</script>

<style lang="less">
	.img-list-card{
		height: 140px;
		display: flex;
		align-items:flex-start;
		justify-content: space-between;text-align: left;
		img{width: 35.6%;margin-right: 2.8%;height: 100%;}
		.imgList-right{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-content: flex-start;
		}
		dt{line-height: 1;font-size: 20px;color:#000000;margin-bottom: 15px;font-weight: 700;}
		dd{line-height: 1.2;font-size: 14px;color: #727272;}
		.tipInfo{
			/*span{
				padding-top: 3px;
			}*/
			i{
				display: inline-block;width:12px;height:12px;font-size: 0;		
			}
			&.tipInfo-dates{
				i{
					background: url(../assets/imgList/dates1.png) center center no-repeat;background-size:cover;	
				}
			}
			&.tipInfo-see{
				i{
					width:16px;background: url(../assets/imgList/eye.png) center center no-repeat;background-size:cover;
				}
			}
		}
		.bottom-details{text-align: right;font-size: 12px;color: #999999;font-weight: 700;line-height: 1.5;
			>span{margin-left: 20px;}
		}
	}
</style>