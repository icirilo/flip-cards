<template>
	<div class="tiles">
		<template v-for="(item, index) in cardsList" :key="index">
			<div class="tiles__item">
				<div class="tiles__front">
					<div class="tiles__thumbnail">
					<img :src="item.url" :alt="item.title">
				</div>
				</div>
				<div class="tiles__back">
					<div class="tiles__title">{{ item.title }}</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "Tiles",
	props: {
		elementsQuantity: Number,
		elementsOnPage: Number,
		pageIndex: Number
	},
	data() {
		return {
			cards: []
		}
	},
	mounted() {
		axios
			.get('https://jsonplaceholder.typicode.com/photos')
			.then(response => {
				this.cards = response.data.slice(0, this.elementsQuantity);
			})
			.catch(error => {
				console.log(error);
			})
	},
	computed: {

		cardsList() {
			const startIndex = ((this.pageIndex - 1) * this.elementsOnPage)
			const endIndex = (startIndex + this.elementsOnPage)

			return this.cards.slice(startIndex, endIndex)
		}
	}
}
</script>

<style lang="stylus" src="./index.styl"></style>