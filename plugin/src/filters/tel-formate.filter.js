export default function telFormate(value) {
  return value && value.replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2");
}