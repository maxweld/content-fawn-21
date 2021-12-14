<script setup lang="ts">
	import TodoInput from './TodoInput.vue'
	import TodoPrivateList from './TodoPrivateList.vue'
</script>

<template>
	<div class="todoWrapper">
		<TodoInput type="private" />
		<Suspense>
			<template #default>
				<TodoPrivateList type="private" />
			</template>
			<template #fallback> Loading... </template>
		</Suspense>
	</div>
</template>
