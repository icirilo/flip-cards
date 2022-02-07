<template>
	<div class="pagination">
		<div class="pagination__inner">
			<div class="pagination__list">
				<template v-for="i in pagesList" :key="i">
					<router-link
						custom
						:to="{ path: '/', query: { pageId: i }}"
						v-slot="{ href }"
					>
						<a class="pagination__item"
							:class="{
								'active': i === pageIndex
							}"
							@click.prevent="onChangePage(i)"
							:href="href"
							>{{ i }}
							</a>
					</router-link>
				</template>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Pagination',
	props: {
		elementsQuantity: Number,
		elementsOnPage: Number,
		pageIndex: Number,
		elementsInPagination: Number
	},
	data() {
		return {
			i: 0,
			j: 0,
			flag: false
		}
	},
	methods: {
		onChangePage(i) {
			this.$emit('update:pageIndex', i);

			this.$router.push({path: '/', query: {pageId: i}});
		},
		addPage(arr) {

			if (this.i % 2) {
				let newIndex = this.pageIndex + this.j;

				if (!(newIndex > this.pagesQuantity-1) && newIndex !== this.pagesQuantity) {
					arr.push(newIndex)
				}

			} else {
				let newIndex = this.pageIndex - this.j;
				let counter = (this.elementsInPagination - 1) / 2;

				if (!(newIndex < counter) && newIndex !== this.pagesQuantity && newIndex !== 1) {
					arr.unshift(newIndex)
				}
				this.flag = true
			}

			if (this.flag) {
				this.flag = false
				this.j = this.j+1
			} else {
				this.flag = false
			}

			this.i++

			if (arr.length < this.elementsInPagination) {
				this.addPage(arr)
			} else {
				this.i = 0
				this.j = 0
			}
		}
	},
	watch: {
		elementsOnPage() {
			if (this.pageIndex > this.pagesQuantity) {
				this.$emit('update:pageIndex', 1)
				this.$router.push({path: '/', query: {pageId: 1}});
			}
		}
	},
	computed: {
		pagesQuantity() {
			return this.elementsQuantity / this.elementsOnPage
		},
		pagesList() {
			let items = [];

			if (this.pagesQuantity < (this.elementsInPagination + 2)) {
				for (let i = 0; i < this.pagesQuantity; ) {
					items.push(++i)
				}
			} else {
				this.addPage(items);
				items.unshift(1);
				items.push(this.pagesQuantity);
			}

			return items
		}
	}
}

</script>

<style lang="stylus" src="./index.styl"></style>