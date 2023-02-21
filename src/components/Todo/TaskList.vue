<template>
      <v-list
      class="pa-0"
      flat
    >
      <div v-for="task in $store.state.tasks">
        <task :task="task"/>
      </div>
    </v-list>
</template>

<script>
export default {
  components: {
    'task': () => import('./Task.vue')
  }
}
</script>