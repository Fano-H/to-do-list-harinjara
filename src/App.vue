<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NotCompleteInfo from './components/NotCompleteInfo.vue'
</script>

<template>
  <header class="header sticky-top">
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container">
        <span class="navbar-brand">To Do Harinjara</span>
        <NotCompleteInfo></NotCompleteInfo>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/new-task" class="nav-link">Create new task</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/tasks" class="nav-link">See all tasks</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="main-content pt-4">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
