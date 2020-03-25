export default {
  lowerFirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  },
  upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
