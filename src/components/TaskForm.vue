<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()

const taskTitle = ref('')
const taskDetails = ref('')

function resetForm() {
  taskTitle.value = ''
  taskDetails.value = ''
}

function recordTask() {
  if (taskTitle.value === '') {
    return
  }
  tasksStore.addTask({
    title: taskTitle.value,
    details: taskDetails.value,
    isComplete: false
  })
  resetForm()
}
</script>

<template>
  <div
    class="w-50 bg-secondary text-white p-5 rounded rounded-4 shadow mx-auto border border-dark border-3"
  >
    <div class="mb-3">
      <label class="form-label">Enter task title</label>
      <input type="text" class="form-control" v-model.trim="taskTitle" />
    </div>
    <div class="mb-3">
      <label class="form-label">Enter task content</label>
      <textarea class="form-control" rows="2" v-model.trim="taskDetails"></textarea>
    </div>

    <div class="mt-5 text-center">
      <button type="button" class="btn btn-primary me-2" v-on:click="recordTask">
        Create the task
      </button>
      <button type="button" class="btn btn-danger" v-on:click="resetForm">Cancel</button>
    </div>
  </div>
</template>
