const loadComponents = () => {
  const req = require.context("./components", true, /^(.*\.(js$))[^.]*$/);
  req.keys().forEach(req);
}

const loadScreens = () => {
  const req = require.context("./screens", true, /^(.*\.(js$))[^.]*$/);
  req.keys().forEach(req);
}

const loadApp = () => {
  const req = require.context("./app", true, /^(.*\.(js$))[^.]*$/);
  req.keys().forEach(req);
}

loadComponents();
loadScreens();
loadApp();