<script setup lang="ts">
import { PropType } from 'vue'

interface ToDo {
  id: string
  title: string
  is_completed?: boolean
  is_public: boolean
  user?: {
    name: string
  }
}

const props = defineProps({
  type: String,
  todos: [] as PropType<ToDo[]>,
})

const handleTodoToggle = function (todo: ToDo) {
  // eslint-disable-line
  // update todo data in db here
}
const handleTodoDelete = function (todo: ToDo) {
  // eslint-disable-line
  // delete todo from db
}
</script>

<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id as string">
      <div v-if="todo.is_public && todo.user" class="userInfoPublic">
        @{{ todo.user.name }}
      </div>
      <div class="view" v-if="type === 'private'">
        <div v-if="todo.is_completed" class="round">
          <input type="checkbox" id="todo.id" checked="true" />
          <label v-on:click="handleTodoToggle(todo)" htmlFor="todo.id"></label>
        </div>
        <div v-else class="round">
          <input type="checkbox" id="todo.id" />
          <label v-on:click="handleTodoToggle(todo)" htmlFor="todo.id"></label>
        </div>
      </div>
      <div class="labelContent">
        <strike class="todoLabel" v-if="todo.is_completed">
          <div>
            {{ todo.title }}
          </div>
        </strike>
        <div v-else>
          {{ todo.title }}
        </div>
      </div>
      <button
        v-if="type === 'private'"
        v-on:click="handleTodoDelete(todo)"
        class="closeBtn"
      >
        x
      </button>
    </li>
  </ul>
</template>
