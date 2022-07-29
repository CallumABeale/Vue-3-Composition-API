import { reactive, computed } from 'vue'
const activeRequests = reactive([])
const usePageRequests = () => {
	const isLoading = computed(() => !!activeRequests.length)
	const makeRequest = async (url) => {
		const index = activeRequests.length
		activeRequests[index] = url
		const response = await fetch(url).catch((err) => alert(err))
		const data = await response.json()
		activeRequests.splice(index, 1)
		return data
	}
	return { isLoading, makeRequest }
}

export default usePageRequests
