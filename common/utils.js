const install = (vue,vm) => {
	// 是否登录
	const isLogin = ()=>{
		const token = vm.vuex_token
		if(!token){
			//来自哪个页面
			const currentpage = getCurrentPages().pop()
			//获取页面路径，和请求参数
			const {options,route} = currentPage
			const optionsKeys = Object.keys(options)
			let params = ''
			if(optionsKeys.length !== 0){
				params = optionsKeys.reduce((pre,current)=>{
					return `${pre}${current}=${options[current]}&`
				},"?").slice(0,-1)
			}
			//缓存当前页，用于登录或者注册之后的跳转
			uni.setStorageSync('back_url',route + params)
			// console.log(currentpage.route);
			vm.$u.toast('请登录')
			setTimeout(()=>{
				vm.$u.route({
					type:"redirect",
					url:'pages/auth/login',
				})
			},1500)
			return false
		}
		return true
	}
	vm.$u.utils = {
		//
		isLogin
	}
}

//其他工具


export default{
	install
}