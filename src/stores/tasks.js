import { defineStore } from "pinia";
import { ref, computed, reactive, watch } from "vue";

export const useTasksStore = defineStore('tasks',() => {
    const tasks = ref([])
    const tasksNumber = computed(()=> tasks.value.length)
    const tasksNotComplete = computed(() => tasks.value.filter((task)=>task.isComplete === false))
    const tasksNotCompleteNumber = computed(()=> tasksNotComplete.value.length)

    function addTask(newTask){
        tasks.value.push(newTask)
    }
    return {tasks, tasksNumber, tasksNotComplete, tasksNotCompleteNumber, addTask}
})