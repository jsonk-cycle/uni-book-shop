<template>
	<view>
		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
		<view class="u-text-center" u-m-t-20>
			<u-tabs :list="sortList" bar-width='100' item-width='160' :current="currentSort" @change="changeSort"></u-tabs>
			
			<u-row gutter="16" class="u-skeleton">
						<u-col span="6" v-for="goods in goodsList.length !== 0 ? goodsList : [{},{},{},{}]">

							<goods-card :goods="goods"></goods-card>

						</u-col>					
			</u-row>
			<!-- loging显示效果 -->
			<!-- <u-loading mode="circle" :show="true"></u-loading> -->
			<!--引用组件-->
				<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortList: [
					{name: '默认'},
					{name: '销量'}, 
					{name: '推荐'},
					{name: '最新'}
					],
					currentSort:0,
					slides:[],
					goodsList:[],
					page:1,
					loading:false
					}
					},
		onLoad() {
			// this.$u.api.userInfo()
			this.getData()
			// this.$u.api.index().then(res=>{
			// 	console.log(res)
			// 	// console.log(1111)
			// 	this.slides = res.slides
			// 	this.goods = res.goods
			// })
			
			
		
		// 	this.$u.get('/api/index').then(res=>{
		// 		console.log(res)
		// 	})
		// 	console.log(11111);
		// },
		// await必须使用在async中,让异步变为同步代码
		// const res = await this.$u.get('/api/index')
		// console.log(res);
		// console.log(222);
		// try{
		// 	const res = await this.$u.post('/api/auth/login')
		// }catch(e){
		// 	//TODO handle the exception
		// }
		// console.log(1111);
		// console.log(res);
		// const res = await this.$u.patch('/api/orders/{order}/confirm')
		// console.log(res);
		
		// 集中管理api首页
		// const res = await this.$u.api.index()
		// console.log(res)
		},
		methods: {
			changeSort(index){
				this.currentSort = index
				//重置商品数据和分页
				this.goodsList = []
				this.page = 1
				this.getData()
			},
			//获取数据
			async getData(){
				//显示骨架屏幕
				this.loading = true
				const params = {
					page:this.page
				}
				//增加排序的条件
				if(this.currentSort == 1) params.sales = 1
				if(this.currentSort == 2) params.recommend = 1
				if(this.currentSort == 3) params.new = 1
				const res = await this.$u.api.index(params)
				//骨架屏幕消失
				this.loading = false
				this.slides=res.slides
				this.goodsList=[...this.goodsList,...res.goods.data]
			}
		},
		onReachBottom(){
			//重新请求参数
			this.page = this.page+1,
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	
	
</style>
