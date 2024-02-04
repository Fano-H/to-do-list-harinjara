import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([])
  const tasksNumber = computed(() => tasks.value.length)
  const tasksNotComplete = computed(() => tasks.value.filter((task) => task.isComplete === false))
  const tasksNotCompleteNumber = computed(() => tasksNotComplete.value.length)

  function addTask(newTask) {
    tasks.value.push(newTask)
  }

  /**
   * Search for a task by its ID
   * and return it and its index in the array
   */
  function getTaskById(taskID) {
    let theTaskIndex = null
    let theTask = tasks.value.find((task, idx) => {
      if (task.id === taskID) {
        theTaskIndex = idx
        return true
      }
    })

    return { theTaskIndex, theTask }
  }

  /**
   *
   * Remove a task by checking its index
   * and then splice the array of tasks
   */

  function removeTask(taskID) {
    let theTaskIndex = getTaskById(taskID).theTaskIndex
    tasks.value.splice(theTaskIndex, 1)
  }

  return {
    tasks,
    tasksNumber,
    tasksNotComplete,
    tasksNotCompleteNumber,
    addTask,
    getTaskById,
    removeTask
  }
})
