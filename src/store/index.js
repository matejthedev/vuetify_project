import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    snackbar: {
      show: false,
      text: "",
    },
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
    showSnackbar(state, text) {
      let time;
      if(state.snackbar.show) {
        time = 500;
        state.snackbar.show = false
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, time)
    },
    taskDone(state, id) {
      const task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task Added!");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Task Deleted!");
    },
  },
});
