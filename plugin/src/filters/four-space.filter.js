export default function fourSpace(value) {
  return value && value.replace(/\s/g, '').replace(/(.{4})/g, "$1 "); 
}