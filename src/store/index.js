import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      state.tasks.push({
        id: Date.now(),
        name: newTaskTitle,
        done: false,
      });
    },
    taskDone(state, id) {
      const task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});
