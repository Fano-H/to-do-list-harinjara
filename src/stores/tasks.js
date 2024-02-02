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
  function getTaskById(taskID){
    let theTaskIndex = null
    let theTask = tasks.value.find(
        (task, idx) => {
          if ( task.id === taskID ){
            theTaskIndex = idx
            return true
          }
        }
    )
    
    return {theTaskIndex, theTask}
  }


  return { tasks, tasksNumber, tasksNotComplete, tasksNotCompleteNumber, addTask, getTaskById }
})
