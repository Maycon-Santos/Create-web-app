import "./helpers/supportShadowDOM";
import "@webcomponents/webcomponentsjs";
import bodyStyle from "./assets/stylesheets/body.scss";
import { loadStyle } from "./helpers/loaders";

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

loadStyle(document.head, bodyStyle)
  .then(loadComponents)
  .then(loadScreens)
  .then(loadApp);
