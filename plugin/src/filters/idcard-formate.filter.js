//身份证号格式化 前六位 后四位 中间变为星号 ---例如：340888*******5656

export default function idcardFormate(value) {
  return value && value.replace(/^(.{6})(?:\d+)(.{4})$/,"$1*******$2");
}