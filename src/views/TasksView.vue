<script setup></script>

<template>
  <div>
    <h1 class="h2 text-center mb-5">List of tasks</h1>
    <div class="tasks-list">
      <div class="row">
        <div class="col-4 mb-3">
          <div class="card">
            <div class="card-header">Task title</div>
            <div class="card-body">
              <p class="card-text">
                This is the task detail content. Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div class="text-start">
                <button class="btn btn-primary btn-sm me-2 px-4">Edit</button>
                <button class="btn btn-primary btn-sm me-2 px-4">Complete</button>
                <button class="btn btn-primary btn-sm px-4">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
