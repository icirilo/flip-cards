<template>
	<div class="controls">
		<div class="controls__inner">
			<div class="controls__col">
				<SelectQuantity :list="[6, 12, 30, 60]" :count="elementsOnPage" :changeQuantity="changeQuantity"/>
			</div>
			<div class="controls__col">
				<SelectPagination :list="[3, 5, 7]" :count="elementsInPagination" :changeQuantityPagination="changeQuantityPagination"/>
			</div>
		</div>
	</div>
</template>

<script>
import SelectQuantity from "@/components/controls/select-quantity";
import SelectPagination from "@/components/controls/select-pagination";
export default {
	name: 'Controls',
	components: {
		SelectPagination,
		SelectQuantity
	},
	props: {
		elementsOnPage: Number,
		elementsInPagination: Number
	},
	methods: {
		changeQuantity(count) {
			this.$emit('update:elementsOnPage', count)
		},
		changeQuantityPagination(count) {
			this.$emit('update:elementsInPagination', count)
		}
	}


}

</script>

<style lang="stylus" src="./index.styl"></style>