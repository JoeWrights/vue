import { state, getters, actions, clone } from './index';

import { make } from 'vuex-pathify';

const mutations = make.mutations(state);

export default {
  namespaced: true,
  state: clone(state),
  getters,
  actions,
};

