import * as types from './mutation-type'
export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = Number(state.totalTime) + Number(time)
  },
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  },
  [types.SAVE_PLAN] (state, plan) {
    const avatar = 'https://user-gold-cdn.xitu.io/2018/4/30/16314dbc4ff7e900?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    state.list.push(
      Object.assign({ name: 'JoeWright', avatar: avatar }, plan)
    )
  }
}
