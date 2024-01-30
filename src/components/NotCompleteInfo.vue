<script setup>
    import { useTasksStore } from '@/stores/tasks';
    const tasksStore = useTasksStore();
</script>
<template>
    <div class="text-white">
        <div class="alert alert-warning mb-0 ms-3" role="alert">
        Number of not completed tasks : <span class="badge text-bg-danger fs-6">{{ tasksStore.tasksNotCompleteNumber }}</span>
        </div>
    </div>
</template>