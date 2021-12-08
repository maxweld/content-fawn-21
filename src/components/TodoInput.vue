<script setup lang="ts">
	import { ref } from 'vue'
	import { useMutation, gql } from '@urql/vue'

	const props = defineProps({
		type: String,
	})

	const newTodo = ref('')
	const isPublic = false
	const user = '1'

	const insertTodo = gql`
		mutation insert_todos($title: String!, $isPublic: Boolean!, $user: String) {
			insert_todos(
				objects: { title: $title, is_public: $isPublic, user_id: $user }
			) {
				affected_rows
				returning {
					id
					title
					is_completed
					created_at
					is_public
				}
			}
		}
	`
	const newTodoResult = useMutation(insertTodo)

	const addTodo = async (): Promise<void> => {
		console.log('Attempting INSERT')

		console.log(newTodo.value, props.type) // insert new todo into db
		const title = newTodo.value.trim()
		console.log(title)

		const variables = { title, isPublic, user }
		const result = await newTodoResult.executeMutation(variables)
		console.log(result.data?.value)
	}
</script>

<template>
	<div class="formInput">
		<input
			class="input"
			placeholder="What needs to be done?"
			v-model="newTodo"
			@keyup.enter="addTodo"
		/>
		<i class="downArrow fa fa-angle-right" />
	</div>
</template>
