<script setup lang="ts">
import TodoInput from './TodoInput.vue'
import TodoPublicList from './TodoPublicList.vue'
</script>

<template>
  <div class="todoWrapper">
    <TodoInput type="public" />
    <TodoPublicList type="public" />
  </div>
</template>
