//金钱三位用 ","隔开
export default function moneyFormat(value) {
  value = value.toString().replace(/\$|\,/g, '');
  if (isNaN(value)) {
    value = "0";
  }
  let sign = (value == (value = Math.abs(value)));
  value = Math.floor(value * 100 + 0.50000000001);
  let cents = value % 100;
  value = Math.floor(value / 100).toString();
  if (cents < 10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((value.length - (1 + i)) / 3); i++) {
    value = value.substring(0, value.length - (4 * i + 3)) + ',' + value.substring(value.length - (4 * i + 3));
  }

  return (((sign) ? '' : '-') + value + '.' + cents);
}
