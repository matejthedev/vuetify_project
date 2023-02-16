<template>
  <div class="home">
    <add-task-field />
    <task-list v-if="$store.state.tasks.length" />
    <no-task v-else />
  </div>
</template>

<script>
  import AddTask from '../components/Todo/AddTask.vue'
  import TaskList from '../components/Todo/TaskList.vue'
  import NoTask from '../components/Todo/NoTask.vue'

  export default {
    name: 'Todo',
    components: {
      'add-task-field': AddTask,
      'task-list': TaskList,
      'no-task': NoTask
    }
  }
</script>