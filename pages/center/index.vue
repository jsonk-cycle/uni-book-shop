<template>
	<view>
		个人中心
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			//如果没有taken跳转到登录页面
			if(!this.$u.utils.isLogin()) return 
			
			//请求数据,当没有登录的时候下面的代码不运行
			console.log(111)
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
