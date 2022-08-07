<template>
	<view>
		<!-- 昵称
		邮箱
		密码
		确认密码
		注册按钮 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				email:'',
				password:'',
				password_confirmation:''
			}
		},
		methods: {
			//执行注册
			async submit(){
				//表单验证
				//准备提交数据
				const params = {
					name:this.name,
					email:this.emali,
					password:this.password,
					password_confirmation:this.password_confirmation,
					
					
				}
				//请求api执行注册
				const res = this.$u.api.authRegister(params)
				//注册成功后重定向到登录
			}
		}
	}
</script>

<style>

</style>
