<script setup>
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'
import { useTasksStore } from '@/stores/tasks'

const props = defineProps({
  idOfTaskToEdit: {
    type: [Number, String],
    required: true
  }
})

const emit = defineEmits(['modalHidden'])

const tasksStore = useTasksStore()

const theTaskToEdit = ref({ title: '', details: '' })

/**
 * The modal HTML element
 */
const editModalElement = ref(null)

/**
 * The future modal bs object when mounted
 */
let editModal = null

onMounted(() => {
  editModal = new Modal(editModalElement.value)

  editModalElement.value.addEventListener('shown.bs.modal', onModalShown)
  editModalElement.value.addEventListener('hidden.bs.modal', onModalHidden)
})

function showModal() {
  editModal.show()
}

function onModalShown() {
  theTaskToEdit.value = tasksStore.getTaskById(props.idOfTaskToEdit).theTask
}

function onModalHidden() {
  theTaskToEdit.value = { title: '', details: '' }
  emit('modalHidden')
}

defineExpose({
  showModal
})
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="editModalElement">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Edit the task</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="titleField"
              v-model.lazy="theTaskToEdit.title"
            />
            <label for="titleField">Title</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              id="detailsField"
              v-model.lazy="theTaskToEdit.details"
            ></textarea>
            <label for="detailsField">Details</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary mx-auto" data-bs-dismiss="modal">
            Finish editing and/or close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#detailsField {
  min-height: 100px;
}
</style>
