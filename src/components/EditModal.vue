<script setup>
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'

const editModalElement = ref(null)
let editModal = null

onMounted(() => {
  editModal = new Modal(editModalElement.value)
})

function showModal() {
  editModal.show()
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
          <h1 class="modal-title fs-5">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
