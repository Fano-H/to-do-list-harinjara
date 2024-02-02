<script setup>
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
  messageTitle: {
    type: String,
    required: true
  },
  messageContent: {
    type: String,
    required: true
  }
})


/**
 * The modal HTML element
*/
const messageModalElement = ref(null)

/**
 * The future modal bs object when mounted
*/
let messageModal = null

onMounted(() => {
  messageModal = new Modal(messageModalElement.value)
})

function showModal() {
  messageModal.show()
}

defineExpose({
  showModal
})

</script>

<template>
  <!-- Modal -->
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="messageModalElement">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">{{messageTitle}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          {{ messageContent }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success mx-auto" data-bs-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 
</style>