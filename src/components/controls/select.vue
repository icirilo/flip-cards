<template>
	<div
		@click.stop="toggleSelect"
		:class="{
			'select': true,
			'select_show': show
		}">
		<div class="select__input"></div>
		<div class="select__list" v-if="show"></div>
	</div>
</template>

<script>

export default {
	name: 'Select',
	data () {
		return {
			show: false
		}
	},
	methods: {
		toggleSelect () {

			this.show = !this.show

			document.addEventListener('click', this.hideSelect.bind(this), true)

		},
		hideSelect() {

			this.show = false;
			document.removeEventListener('click', this.hideSelect, true)
		},
		onSelect(item) {
			this.show = false;
			this.$emit('on-select', item);
		}
	}
}
</script>

<style lang="stylus">
.select
	position relative
	display inline-block
	cursor pointer
	user-select none

	&:after
		content ''
		width 5px
		height 5px
		display block
		position absolute
		border-top 1px solid #5b5b5b
		border-right 1px solid #5b5b5b
		transform rotateZ(135deg)
		transition transform .175s
		top 50%
		right 11px
		margin-top -3px

	&.select_show
		z-index 10
		&:after
			transform rotateZ(-45deg)
			margin-top -2px

	&__input
		width 100%
		height 32px
		display block
		font-size 14px
		line-height 32px
		padding 0 30px 0 14px
		box-sizing border-box
		border-radius 2px
		border 1px solid #c6cbd4
		transition border .175s
		white-space nowrap

		.select_show &
			border-bottom-left-radius 0
			border-bottom-right-radius 0

	&__list
		position absolute
		background #fff
		width 100%
		box-sizing border-box
		top 100%
		margin-top -1px
		z-index 5
		overflow auto
		box-shadow 0 4px 5px 0 rgba(0,0,0,.2)
		border 1px solid #c6cbd4
		border-top 0
		transform translate(0, 0)
		transition all .175s
	&__item
		display flex
		height 30px
		font-size 13px
		padding 9px 10px
		box-sizing border-box
		border-top 1px solid #eee
		cursor pointer
		&:first-child
			border-top none
		&:hover
			background #999
</style>
