<script setup>
defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="col-4 mb-3" >
        <div class="card">
          <div class="card-header">{{ task.title }}</div>
          <div class="card-body">
            <p class="card-text">
              {{ task.details }}
            </p>
            <div class="text-start">
              <button class="btn btn-secondary btn-sm me-2 px-4">Edit</button>
              <button class="btn btn-primary btn-sm me-2 px-4">Complete</button>
              <button class="btn btn-dark btn-sm px-4">Delete</button>
            </div>
          </div>
        </div>
      </div>
</template>