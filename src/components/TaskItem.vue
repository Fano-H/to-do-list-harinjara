<script setup>
import { ref } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['editTask', 'completeAndUncompleteTask', 'deleteTask'])

const theTask = ref(props.task)

function completeAndUncompleteTask() {
  let msg = ''

  if (!theTask.value.isComplete) {
    theTask.value.isComplete = true
    msg = 'The task is now completed'
  } else {
    theTask.value.isComplete = false
    msg = 'The task is now NOT completed'
  }
  emit('completeAndUncompleteTask', theTask.value.title, msg)
}
</script>

<template>
  <div class="col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-10">
            {{ task.title }}
          </div>
          <div class="col-2">
            <div v-if="task.isComplete" class="text-end fs-5 text-success">
              <font-awesome-icon icon="check-circle" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text details-content">
          {{ task.details }}
        </p>
        <div class="text-start">
          <button
            class="btn btn-secondary btn-sm me-1 px-3 mt-2"
            @click="$emit('editTask', task.id)"
          >
            <font-awesome-icon icon="edit" /> Edit
          </button>
          <button
            class="btn btn-primary btn-sm me-1 px-3 mt-2"
            :class="{ 'is-complete': task.isComplete }"
            @click="completeAndUncompleteTask"
          >
            <font-awesome-icon icon="check" /> {{ task.isComplete ? 'Completed' : 'Complete' }}
          </button>
          <button
            class="btn btn-dark btn-sm px-3 mt-2"
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

.btn.is-complete {
  background-color: #31c144;
}

.details-content {
  white-space: pre-line;
}
</style>
