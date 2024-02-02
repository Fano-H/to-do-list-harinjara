<script setup>
import TaskItem from '@/components/TaskItem.vue'
import EditModal from './EditModal.vue'
import MessageModal from './MessageModal.vue'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const tasksStore = useTasksStore()

/**
 * The edit modal component element
*/
const editionModal = ref(null)

const idOfTaskToEdit = ref('')

/**
 * The message modal component element
*/
const messagingModal = ref(null)

const messagingTitle = ref('')
const messagingContent = ref('')

function openModal(taskID) {
  idOfTaskToEdit.value = taskID
  editionModal.value.showModal()
}

function showMessage(msgTitle, msgContent){
  messagingTitle.value = msgTitle
  messagingContent.value = msgContent
  messagingModal.value.showModal()
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
        @complete-task="showMessage"
      ></TaskItem>
    </div>
    <EditModal ref="editionModal" :idOfTaskToEdit="idOfTaskToEdit"></EditModal>
    <MessageModal ref="messagingModal" :message-title="messagingTitle" :message-content="messagingContent"></MessageModal>
  </div>
</template>
