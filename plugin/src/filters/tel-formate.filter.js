//手机号格式化 中间四位变成星号

export default function telFormate(value) {
  return value && value.replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2");
}