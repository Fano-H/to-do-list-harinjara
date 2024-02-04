<script setup>
import { ref } from 'vue'
import TaskForm from '@/components/TaskForm.vue'
import MessageModal from '@/components/MessageModal.vue'

const messagingModal = ref('')

function onTaskCreated() {
  messagingModal.value.showModal()
}
</script>

<template>
  <div>
    <h1 class="h2 text-center mb-5">New task creation</h1>
    <TaskForm @task-created="onTaskCreated"></TaskForm>
    <MessageModal
      ref="messagingModal"
      message-title="Created"
      message-content="The task is created successfully"
    ></MessageModal>
  </div>
</template>
