<script setup>
import { ref, reactive, watch, provide } from 'vue'
import YummyMeal from './components/YummyMeal.vue'
const name = ref('The Snazzy Burger')
const currencySymbol = ref('$')
provide('currencySymbol', currencySymbol)
const cart = reactive([])
const meals = reactive([
	{ name: 'Hamburger 🍔', price: 5 },
	{ name: 'Cheeseburger 🧀', price: 6 },
	{ name: 'Impossible Burger 🥕', price: 7 },
	{ name: 'Fries 🍟', price: 2 },
])
const placeOrder = () => alert('Your order has been placed!')
const addItemToCart = (item) => cart.push(item)
const removewatcher = watch(
	() => [...cart],
	(newValue, oldValue) => alert(newValue.join('\n'))
)
</script>

<template>
	<h1>{{ name }}</h1>
	<div class="flex flex-row justify-start">
		<input type="text" v-model="name" />
		<button @click="placeOrder">Place order!</button>
		<button @click="removewatcher">Hide Cart Alerts</button>
	</div>
	<br /><br />
	<label for="currencySymbol">Currency</label>
	<select id="currencySymbol" v-model="currencySymbol">
		<option value="$">Dollars ($)</option>
		<option value="£">Pounds (£)</option>
	</select>
	<YummyMeal
		v-for="meal in meals"
		:name="meal.name"
		:price="meal.price"
		@addToCart="addItemToCart"
	/>
</template>
