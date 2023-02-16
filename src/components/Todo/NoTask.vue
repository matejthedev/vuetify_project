<template>
    <div class="primary--text no-task">
      <v-icon
        size=100
        color="primary"
      >
        mdi-check
      </v-icon>
      No tasks
    </div>
</template>

<style lang="scss">
  .no-task {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.75;
  }
</style>