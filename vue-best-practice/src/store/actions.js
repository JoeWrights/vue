import * as types from './mutation-type'
export default {
  decTotalTime ({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  deletePlan ({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  savePlan ({ commit }, plan) {
    commit(types.SAVE_PLAN, plan)
  },
  addTotalTime ({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  }
}
