<script setup>
import TaskItem from '@/components/TaskItem.vue'
import EditModal from './EditModal.vue'
import MessageModal from './MessageModal.vue'
import ConfirmModal from './ConfirmModal.vue'
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

/**
 * The confirm modal component element
 */
const confirmModal = ref(null)

const idOfTaskToDelete = ref('')
const confirmTitle = ref('')
const confirmText = ref('')

function openEditModal(taskID) {
  idOfTaskToEdit.value = taskID
  editionModal.value.showModal()
}

function showMessage(msgTitle, msgContent) {
  messagingTitle.value = msgTitle
  messagingContent.value = msgContent
  messagingModal.value.showModal()
}

function deleteConfirmation(taskID, titleConfirm, textConfirm) {
  idOfTaskToDelete.value = taskID
  confirmTitle.value = titleConfirm
  confirmText.value = textConfirm
  confirmModal.value.showModal()
}

function proceedDeleting() {
  tasksStore.removeTask(idOfTaskToDelete.value)
}

// function onMounted(() => {

// })
</script>

<template>
  <div class="tasks-list">
    <div v-if="tasksStore.tasksNumber" class="row">
      <TaskItem
        v-for="task in tasksStore.tasks"
        :key="task.id"
        :task="task"
        @edit-task="openEditModal"
        @complete-task="showMessage"
        @delete-task="deleteConfirmation"
      ></TaskItem>
    </div>
    <div v-else class="w-75 mx-auto">
      <div class="alert alert-info" role="alert">
        <div class="row">
          <div class="col-12 col-lg-9">
            <p class="fs-6 text-center">
              There is no task yet.<br /><br />
              Create tasks by going on the
              <RouterLink to="/new-task" class="fw-bold text-decoration-none"
                >create new task</RouterLink
              >
              panel.
            </p>
          </div>
          <div class="col-12 col-lg-3">
            <div class="d-flex justify-content-center align-items-center fs-1 h-100">
              <font-awesome-icon icon="info-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditModal
      ref="editionModal"
      :idOfTaskToEdit="idOfTaskToEdit"
      @modal-hidden="idOfTaskToEdit = ''"
    ></EditModal>
    <MessageModal
      ref="messagingModal"
      :message-title="messagingTitle"
      :message-content="messagingContent"
    ></MessageModal>
    <ConfirmModal
      ref="confirmModal"
      @yes-confirm="proceedDeleting"
      :confirm-title="confirmTitle"
      :confirm-text="confirmText"
      @modal-hidden="idOfTaskToDelete = ''"
    ></ConfirmModal>
  </div>
</template>
