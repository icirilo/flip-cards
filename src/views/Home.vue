<template>
	<Controls
		:elementsOnPage="elementsOnPage"
		@update:elementsOnPage="elementsOnPage = $event"
		:elementsInPagination="elementsInPagination"
		@update:elementsInPagination="elementsInPagination = $event"
	/>
	<Tiles
		:elementsOnPage="elementsOnPage"
		:pageIndex="pageIndex"
		:elementsQuantity="elementsQuantity"
	/>
	<Pagination
		:pageIndex="pageIndex"
		@update:pageIndex="pageIndex = $event"
		:elementsOnPage="elementsOnPage"
		:elementsQuantity="elementsQuantity"
		:elementsInPagination="elementsInPagination"
	/>
</template>

<script>
import Controls from "@/components/controls";
import Tiles from "@/components/tiles";
import Pagination from "@/components/pagination";

export default {
	name: 'Home',
	components: {
		Controls,
		Tiles,
		Pagination
	},
	props: {
		query: String
	},
	data() {
		return {
			elementsQuantity: 120,
			elementsOnPage: 6,
			elementsInPagination: 5,
			pageIndex: 1
		}
	}
}
</script>
