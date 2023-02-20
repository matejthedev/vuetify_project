<template>
      <v-list
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
              @click.stop = "$store.dispatch('deleteTask', task.id)"
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
</template>