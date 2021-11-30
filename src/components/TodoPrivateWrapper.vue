<script setup lang="ts">
import TodoInput from './TodoInput.vue'
import TodoPrivateList from './TodoPrivateList.vue'
</script>

<template>
  <div class="todoWrapper">
    <TodoInput type="private" />
    <TodoPrivateList type="private" />
  </div>
</template>
