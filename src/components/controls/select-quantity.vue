<template>
	<div
		@click.stop="toggleSelect"
		:class="{
			'select': true,
			'select_show': show
		}">

		<div class="select__input" >
			{{ count }} Per page
		</div>

		<div class="select__list" v-if="show">
			<div
				class="select__item"
				v-for="(item, i) in list"
				:key="i"
				@click.stop="changeQuantity(item)"
			>
				{{ item }}
			</div>
		</div>

	</div>
</template>

<script>
import Select from "./select.vue"

export default {
	name: 'Select-quantity',
	mixins: [Select],
	props: {
		list: {
			type: Array,
			default: () => []
		},
		count: Number,
		changeQuantity: Function
	}
}
</script>

<style lang="stylus">
.select
	min-width 125px
</style>
