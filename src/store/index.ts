import { createStore } from "vuex";

export interface State {
  counter: number;
}

export const store = createStore<State>({
  state() {
    return {
      counter: 0
    };
  },
  actions: {
    increase({ commit }, payload: number) {
      commit("INCREASE", payload);
    }
  },
  mutations: {
    INCREASE(state, payload: number) {
      state.counter += payload;
    }
  }
});