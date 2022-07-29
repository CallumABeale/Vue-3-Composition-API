<script setup>
const props = defineProps({
	post: Object,
})
const post = { ...props.post }
</script>

<template>
	<div
		class="flex pr-2 gap-2 items-center shadow-md w-1/4 flex-grow rounded overflow-hidden border-2 border-solid border-slate-50"
	>
		<img
			src="https://via.placeholder.com/150"
			class="bg-slate-500"
			width="150"
			height="150"
		/>
		<router-link :to="{ name: 'Post', params: { id: post.id } }">{{
			post.title
		}}</router-link>
	</div>
</template>
