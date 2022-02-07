<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<div class="header__logo"><img alt="Vue logo" src="./assets/logo.png"></div>
				<div class="header__title">Flip card app</div>
			</div>
		</div>

	</header>
	<section class="content">
		<div class="container">
			<router-view></router-view>
		</div>
	</section>
	<footer class="footer">
		<div class="container">
			<div class="footer__inner">
			<div class="footer__copy">© 2022</div>
		</div>
		</div>
	</footer>
</template>

<script>


export default {
	name: 'App',
	components: {

	},
	data() {
		return {

		}
	}
}

</script>

<style lang="stylus">
#app
	display: flex
	flex-direction column
	height: 100%

.header
	background #e7e7e7
	&__inner
		display: flex
		align-items center
		padding: 20px 0
	&__logo
		font-size: 0
		margin-right: 20px
		img
			max-width 50px
.content
	flex-grow 1
.footer
	background #e5e5e5
	&__inner
		padding: 20px 0
</style>
