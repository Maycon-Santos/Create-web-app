import { loadStyle, loadTemplate } from "../helpers/loaders";
import style from "./app.style.scss";
import template from "./app.template.html";

class App extends HTMLElement {
  shadowRoot = this.attachShadow({ mode: "open" });

  constructor() {
    super();

    loadStyle(this.shadowRoot, style);
    loadTemplate(this.shadowRoot, template);
  }
}

customElements.define("init-app", App);