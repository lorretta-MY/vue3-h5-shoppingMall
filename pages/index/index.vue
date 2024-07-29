<template>
	<view class="home-page">
		<swiper :indicator-dots="true" :autoplay="true" circular class="home-swiper">
			<swiper-item v-for="pic in pictures" :key="pic.id">
				<image :src="pic.url" @tap="previewImg(pic.url)"></image>
			</swiper-item>
		</swiper>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pictures: [
					{
						id: '1',
						url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg"
					},
					{
						id: '2',
						url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg"
					},
					{
						id: '3',
						url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg"
					},
					{
						id: '4',
						url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg"
					},
					{
						id: '5',
						url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			previewImg(url){
				console.log(url)
				uni.previewImage({
					urls:this.pictures.map(v=>v.url),
					current:url
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		width: 100%;
		height: 250px;
		image{
			width: 100%;
			height: 500px;
		}
	}
</style>