<script setup lang="ts">
const props = defineProps({
  type: String,
})

const newTodo = ''

const addTodo = (): void => {
  console.log(newTodo, props.type) // insert new todo into db
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
