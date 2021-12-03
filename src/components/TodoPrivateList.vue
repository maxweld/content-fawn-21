<script setup lang="ts">
	import TodoItem from './TodoItem.vue'
	import TodoFilters from './TodoFilters.vue'
	import { useQuery, gql } from '@urql/vue'
	import { GetMyTodosQuery, Todos } from '../generated/graphql'

	const type = 'private'
	let filterType = 'all'

	const getMyTodos = gql`
		query getMyTodos {
			todos(
				where: { is_public: { _eq: false } }
				order_by: { created_at: desc }
			) {
				id
				title
				is_public
				is_completed
				created_at
				user {
					name
				}
			}
		}
	`
	const result = useQuery<GetMyTodosQuery>({ query: getMyTodos })

	const todos = result.data.value?.todos
	console.log(result.data.value) //kjhjkh

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
			return todos?.filter((todo) => todo.is_completed !== true)
		} else if (filterType === 'completed') {
			return todos?.filter((todo) => todo.is_completed === true)
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
		<div v-if="result.fetching.value">Loading...</div>
		<div v-if="result.error.value">{{ result.error.value }}</div>
		<div v-else class="todoListwrapper">
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
