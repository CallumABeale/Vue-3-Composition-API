<script setup>
import YummyMealPrice from './YummyMealPrice.vue'
const props = defineProps({
	name: String,
	price: Number,
})
defineEmits(['addToCart'])
</script>

<template>
	<div class="yummyMeal">
		<p>
			<strong>{{ name }}</strong>
			<YummyMealPrice :price="props.price" />
		</p>
		<button @click="$emit('addToCart', props.name)">Add to cart</button>
	</div>
</template>

<style>
.yummyMeal {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
}
</style>
