<template>
  <div class="home">
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
    <v-list
      v-if="$store.state.tasks.length"
      class="pa-0"
      flat
    >
      <div v-for="task in $store.state.tasks">
        <v-list-item
          @click="$store.commit('taskDone', task.id)"
          :class="{ 'blue lighten-5' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title 
                :class="{ 'text-decoration-line-through' : task.done }"
              >{{ task.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon
              @click.stop = "$store.commit('deleteTask', task.id)"
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="primary--text no-task">
      <v-icon
        size=100
        color="primary"
      >
        mdi-check
      </v-icon>
      No tasks
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
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

<style lang="scss">
  .no-task {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.75;
  }
</style>