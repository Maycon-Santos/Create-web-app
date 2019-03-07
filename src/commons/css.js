module.exports = {
  get cssReset() {
    return import("../assets/stylesheets/reset.css");
  },
  get cssCommons() {
    return import("../assets/stylesheets/commons.scss");
  }
}