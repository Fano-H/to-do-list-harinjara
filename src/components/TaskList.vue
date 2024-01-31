<script setup>
import TaskItem from '@/components/TaskItem.vue'
import EditModal from './EditModal.vue'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const tasksStore = useTasksStore()

const editionModal = ref(null)

function openModal() {
  editionModal.value.showModal()
}
</script>
<template>
  <div class="tasks-list">
    <div class="row">
      <TaskItem
        v-for="(task, index) in tasksStore.tasks"
        :key="index"
        :task="task"
        @edit-task="openModal"
      ></TaskItem>
    </div>
    <EditModal ref="editionModal"></EditModal>
  </div>
</template>
