<template>
  <v-text-field 
  clearable
  hide-details
  label="add task"
  outlined
  class="ma-3" 
  v-model="newTask" 
  @click:append="addTask"
  @keyup.enter="addTask"
  append-icon="mdi-plus"
  >
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTask)
      this.newTask = ''
    }
  }
}
</script>