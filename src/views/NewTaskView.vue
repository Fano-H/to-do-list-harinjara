<script setup>
</script>

<template>
    <div>
        <h1 class="h2 text-center mb-5">New task creation</h1>
        <div class="w-50 bg-secondary text-white p-5 rounded rounded-4 shadow mx-auto border border-dark border-3">
            <div class="mb-3">
                <label for="task-title" class="form-label">Enter task title</label>
                <input type="text" class="form-control" id="task-title">
            </div>
            <div class="mb-3">
                <label for="task-content" class="form-label">Enter task content</label>
                <textarea class="form-control" id="task-content" rows="2"></textarea>
            </div>

            <div class="mt-5 text-center">
                <button type="button" class="btn btn-primary me-2">Create the task</button>
                <button type="button" class="btn btn-danger">Cancel</button>
            </div>
        </div>
    </div>
</template>
