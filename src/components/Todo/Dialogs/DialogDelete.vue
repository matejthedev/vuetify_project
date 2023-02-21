<template>
  <v-dialog
    :value="true"
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Delete task
      </v-card-title>

      <v-card-text>
        Sure you want to delete this task?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click="$emit('closeDialog')"
          text
        >
          No
        </v-btn>

        <v-btn
          @click="$store.dispatch('deleteTask', task.id); $emit('closeDialog')"
          color="red darken-1"
          text
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: false
    }
  }
}
</script>