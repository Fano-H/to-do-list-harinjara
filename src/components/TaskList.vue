<script setup>
import TaskItem from '@/components/TaskItem.vue'
import { useTasksStore } from '@/stores/tasks'
const tasksStore = useTasksStore()
</script>
<template>
  <div class="tasks-list">
    <div class="row">
      <TaskItem v-for="(task, index) in tasksStore.tasks" :key="index" :task="task"></TaskItem>
    </div>
  </div>
</template>
