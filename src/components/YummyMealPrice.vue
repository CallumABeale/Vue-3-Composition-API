<script setup>
import { computed, inject, ref } from 'vue'
const currencySymbol = inject('currencySymbol', ref('$'))
const props = defineProps({
	price: Number,
	currencySymbol: String,
})
const pricePretty = computed(
	() => `${currencySymbol.value}${props.price.toFixed(2)}`
)
const pricePrettySentence = computed(
	() => `The price of this item is ${pricePretty.value}`
)
</script>

<template>
	<span>{{ pricePrettySentence }}</span>
</template>
