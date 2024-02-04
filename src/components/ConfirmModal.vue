<script setup>
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'

defineProps({
  confirmTitle: {
    type: String,
    required: true
  },
  confirmText: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['modalHidden', 'yesConfirm'])

/**
 * The modal HTML element
 */
const confirmModalElement = ref(null)

/**
 * The future modal bs object when mounted
 */
let confirmModal = null

onMounted(() => {
  confirmModal = new Modal(confirmModalElement.value)
  confirmModalElement.value.addEventListener('hidden.bs.modal', onModalHidden)
})

function showModal() {
  confirmModal.show()
}

function onModalHidden() {
  emit('modalHidden')
}

defineExpose({
  showModal
})
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="confirmModalElement">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">{{ confirmTitle }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          {{ confirmText }}
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn btn-danger me-3"
            data-bs-dismiss="modal"
            @click="$emit('yesConfirm')"
          >
            Yes
          </button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
