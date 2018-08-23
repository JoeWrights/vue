import Vue from 'vue';
import { snakeCase } from 'lodash';

import instanceStatus from './instance-status.filter';
import toUSD from './toUSD.filter';
import upperCase from './upper-case.filter';
import toFix from './to-fix.filter';
import readMore from './read-more.filter';

const filters = {
  instanceStatus,
  toUSD,
  upperCase,
  toFix,
  readMore
};

Object.keys(filters).forEach(key => {
  Vue.filter(snakeCase(key), filters[key]);
});
