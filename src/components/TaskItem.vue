<script setup>
import { ref } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['editTask', 'completeTask', 'deleteTask'])

const theTask = ref(props.task)

function completeTask() {
  theTask.value.isComplete = true
  emit('completeTask', theTask.value.title, 'The task is now complete')
}
</script>

<template>
  <div class="col-4 mb-3">
    <div class="card">
      <div class="card-header">{{ task.title }}</div>
      <div class="card-body">
        <p class="card-text details-content">
          {{ task.details }}
        </p>
        <div class="text-start">
          <button class="btn btn-secondary btn-sm me-1 px-3" @click="$emit('editTask', task.id)">
            <font-awesome-icon icon="edit" /> Edit
          </button>
          <button
            class="btn btn-primary btn-sm me-1 px-3"
            @click="completeTask"
            :disabled="task.isComplete"
          >
            <font-awesome-icon icon="check" /> {{ task.isComplete ? 'Completed' : 'Complete' }}
          </button>
          <button
            class="btn btn-dark btn-sm px-3"
            @click="
              $emit(
                'deleteTask',
                task.id,
                'Delete ' + task.title,
                'Are you sure to delete this task?'
              )
            "
          >
            <font-awesome-icon icon="close" /> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn:disabled {
  opacity: 0.3;
}

.details-content {
  white-space: pre-line;
}
</style>
