import Vue from 'vue';
import { snakeCase } from 'lodash';

import instanceStatus from './instance-status.filter';
import toUSD from './toUSD.filter';
import upperCase from './upper-case.filter';
import toFix from './to-fix.filter';
import readMore from './read-more.filter';
import dateFormate from './date-formate.filter';
import fourSpace from './four-space.filter';
import noSpace from './no-space.filter';
import moneyFormat from './money-format.filter';
import telFormate from './tel-formate.filter';
import idcardFormate from './idcard-formate.filter';

const filters = {
  instanceStatus,
  toUSD,
  upperCase,
  toFix,
  readMore,
  dateFormate,
  fourSpace,
  noSpace,
  moneyFormat,
  telFormate,
  idcardFormate
};

Object.keys(filters).forEach(key => {
  Vue.filter(snakeCase(key), filters[key]);
});
