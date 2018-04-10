<template>
	<header class="headers">
				<div class="header-content">
					<div><img src="../assets/logo.png"/></div>
					<div class="header-right">
						<span class="input-wrap">
							<input type="text" name="" id="" value="" placeholder="请输入关键字..."/>
							<img src="../assets/search.png" alt="" />
						</span>
						<span class="person-info">
							<img src="../assets/person.png"/> 
							<span class="username">张晓明<img src="../assets/arrow-bottom.png"/></span>							
						</span>
						<div :class="isApplicationShow ? 'more-web active':'more-web'" @mouseover="showApplication" @mouseout="hideApplication">
							<div class="portal-nav bgc bd-color" v-if="isApplicationShow">
								<div class="clearfix">
									<div class="nav-link fl">
										<img src="../assets/web-01.png"/>
										<p>办公OA</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-02.png"/>
										<p>IHR</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-03.png"/>
										<p>库存系统</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-04.png"/>
										<p>下载专区</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-05.png"/>
										<p>投诉建议</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-06.png"/>
										<p>财务系统</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-01.png"/>
										<p>办公OA</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-02.png"/>
										<p>IHR</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-03.png"/>
										<p>库存系统</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-04.png"/>
										<p>下载专区</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-05.png"/>
										<p>投诉建议</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-06.png"/>
										<p>财务系统</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-01.png"/>
										<p>办公OA</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-02.png"/>
										<p>IHR</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-03.png"/>
										<p>库存系统</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-04.png"/>
										<p>下载专区</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-05.png"/>
										<p>投诉建议</p>
									</div>
									<div class="nav-link fl">
										<img src="../assets/web-06.png"/>
										<p>财务系统</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>				
			</header>
</template>

<script>
	export default{
		data(){
			return {
				isApplicationShow:false,
			}
		},
		methods:{
			showApplication(){
				this.isApplicationShow=true;
			},
			hideApplication(){
				this.isApplicationShow=false;
			},
		}
	}
</script>

<style lang="less">
	.headers{height: 65px;background: #0d1a53;
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
			width: 1000px;margin: 0 auto;display: flex;justify-content:space-between;align-items: center;height:100%;
			>div{
				>img{margin-left: 30px;}
			}
			.input-wrap{
			    	margin: 0 160px 0 200px;
			    	position: relative;
			    	display: inline-block;
				input{
					/*background-color: #16285c;*/
					width: 260px;border: none;border-radius: 16px;height: 32px;font-size: 14px;color: #59779F;padding-left: 16px;
				    /*background: url(../assets/search.png) 240px  center no-repeat #182b62;*/
				   background-color: #182B62;
				}
				img{position: absolute;top: 8px;left: 234px;cursor: pointer;}
			}
			.header-right{display: flex;align-items: center;
				.person-info{margin-left: 20px;display: flex;align-items: center;justify-content: space-between;
				cursor:pointer;
					>img{width: 15px;margin-right: 6px;}
				}
			}

			.more-web{
				display: inline-block;width: 70px;height: 65px;background: url(../assets/more-dian.png) center center no-repeat;cursor: pointer;
				&.active{background: url(../assets/more-dian.png) center center no-repeat #FFFFFF}
			}
			.username{
				color: #fff;opacity: 0.5;font-size: 14px;
				img{margin-left: 5px;}
			}
		}
	}
</style>