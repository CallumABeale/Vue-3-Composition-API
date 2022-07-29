<script setup>
import usePageRequests from './composables/usePageRequests'
const { isLoading } = usePageRequests()
const appTitle = 'Snazzy Fake Blog'
</script>

<template>
	<nav class="py-6 pl-8 bg-teal-800 text-slate-50 text-2xl">
		<router-link :to="{ name: 'Home' }">{{ appTitle }}</router-link>
	</nav>
	<div class="container max-w-[90%] md:max-w-[80%]">
		<router-view></router-view>
		<div v-if="isLoading">Loading...</div>
	</div>
</template>
