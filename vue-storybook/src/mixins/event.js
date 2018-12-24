import Emitter from './emitter';
import moment from 'moment';

export default {
  mixins: [Emitter],
  methods: {
    communicate(event, params = {}) {
      console.log(event);
      this.dispatch('ROOT', event, Object.assign({
        eventName: event,
      }, params));
    },
    getMessage(text) {
      return {
        date: moment().format('YYYY-DD-MM HH:mm:ss'),
        name: this.name,
        msg: text,
      };
    },
  },
};
