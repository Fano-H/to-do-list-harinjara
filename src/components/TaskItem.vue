<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasks'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['editTask', 'completeTask'])

const tasksStore = useTasksStore()

const theTask = ref(props.task)

function completeTask(){
  theTask.value.isComplete = true
  emit('completeTask', theTask.value.title, 'The task is now complete')
}

</script>

<template>
  <div class="col-4 mb-3">
    <div class="card">
      <div class="card-header">{{ task.title }}</div>
      <div class="card-body">
        <p class="card-text">
          {{ task.details }}
        </p>
        <div class="text-start">
          <button class="btn btn-secondary btn-sm me-2 px-4" @click="$emit('editTask', task.id)">
            Edit
          </button>
          <button class="btn btn-primary btn-sm me-2 px-4" @click="completeTask">Complete</button>
          <button class="btn btn-dark btn-sm px-4">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
