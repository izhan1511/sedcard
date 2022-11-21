import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    frontImageResult: "",
    backImageResult: "",
    selectedTemplate: "",
    userFrontStyles: {},
  },
  getters: {
    getSelectedTemplate(state) {
      return state.selectedTemplate;
    },
    getUserFrontStyles(state) {
      return state.userFrontStyles;
    },
  },
  mutations: {
    setImageURL(state, payload) {
      if (payload.type === "front") state.frontImageResult = payload.URL;
      else state.backImageResult = payload.URL;
    },
    setSelectedTemplate(state, payload) {
      state.selectedTemplate = payload.template;
    },
    setUserFrontStyles(state, payload) {
      state.userFrontStyles = payload.frontFormInput;
    },
  },
  actions: {
    getImageURL({ state }, type) {
      if (type === "front") return state.frontImageResult;
      else if (type === "back") return state.backImageResult;
      else {
        return {
          front: state.frontImageResult,
          back: state.backImageResult,
        };
      }
    },
  },
  modules: {},
});
