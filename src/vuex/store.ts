import { createStore } from "vuex";
import { getItem } from "../utils/sessionStorage";

interface State {
  isAuthenticated: Boolean;
  token: String;
  userName: String;
  userId: Number;
}

const store = createStore({
  state(): State {
    return {
      isAuthenticated: false,
      token: "",
      userName: "",
      userId: 0,
    };
  },

  // 目的是解决页面刷新，vux数据丢失的问题，所以把数据从客户端存储里拿到
  getters: {
    userName: () => {
      return getItem("userName");
    },
    userId: () => {
      return getItem("userId");
    },
    token: () => {
      return getItem("token");
    },
  },
  mutations: {
    setAuthenticated(state: State, isAuthenticated: Boolean) {
      if (isAuthenticated) {
        state.isAuthenticated = isAuthenticated;
      }
    },

    setUser(state, user) {
      state.userName = user.userName;
      state.token = user.token;
      state.userId = user.userId;
    },
  },
  actions: {
    setAuthenticated({ commit }, isAuthenticated) {
      commit("setAuthenticated", isAuthenticated);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
});

export default store;
