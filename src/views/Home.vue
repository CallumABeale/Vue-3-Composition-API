<script setup>
import useResource from '../composables/useResource'
import PostCard from '../components/PostCard.vue'
const { items: posts, fetchAll } = useResource('posts')
fetchAll()
</script>

<template>
	<div class="flex gap-2 mt-10 flex-col md:flex-row md:flex-wrap md:flex-grow">
		<PostCard
			class="w-full gap-2 md:w-1/3 xl:w-1/4"
			v-for="post in posts"
			:key="post.id"
			:post="post"
		/>
	</div>
</template>
