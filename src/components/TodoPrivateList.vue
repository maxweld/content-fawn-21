<script setup lang="ts">
	import TodoItem from './TodoItem.vue'
	import TodoFilters from './TodoFilters.vue'
	import { useQuery } from '@urql/vue'

	// const result = useQuery([
	//   query: {
	//   todos(where: { is_public: { _eq: false} }, order_by: { created_at: desc }) {
	//     id
	//     title
	//     created_at
	//     is_completed

	// }
	//   }
	// ])

	const type = 'private'
	let filterType = 'all'

	const todos = [
		{
			id: '1',
			title: 'This is private todo 1',
			is_completed: true,
			is_public: false,
		},
		{
			id: '2',
			title: 'This is private todo 2',
			is_completed: false,
			is_public: false,
		},
	]

	const remainingTodos = function () {
		const activeTodos =
			todos !== undefined
				? todos.filter((todo) => todo.is_completed !== true)
				: []
		return activeTodos.length
	}

	const filteredTodos = function () {
		if (filterType === 'all') {
			return todos
		} else if (filterType === 'active') {
			return todos.filter((todo) => todo.is_completed !== true)
		} else if (filterType === 'completed') {
			return todos.filter((todo) => todo.is_completed === true)
		}
	}

	const filterResults = function (type: string) {
		if (type === 'active') {
			filterType = 'active'
		} else if (type === 'completed') {
			filterType = 'completed'
		} else {
			filterType = 'all'
		}
	}
	const clearCompleted = function () {
		const isOk = window.confirm('Are you sure?')
		if (isOk) {
			// Remove all the todos that are completed
		}
	}
</script>

<template>
	<div>
		<div class="todoListwrapper">
			<TodoItem :todos="filteredTodos()" :type="type" />
		</div>
		<TodoFilters
			:remaining-todos="remainingTodos()"
			:filterResults="filterResults"
			:filter-type="filterType"
			:type="type"
			:clear-completed="clearCompleted"
		/>
	</div>
</template>
