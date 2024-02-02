<script setup>
import TaskItem from '@/components/TaskItem.vue'
import EditModal from './EditModal.vue'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const tasksStore = useTasksStore()

/**
 * The modal component element
*/
const editionModal = ref(null)

const idOfTaskToEdit = ref('')

function openModal(taskID) {
  idOfTaskToEdit.value = taskID
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
    <EditModal ref="editionModal" :idOfTaskToEdit="idOfTaskToEdit"></EditModal>
  </div>
</template>
