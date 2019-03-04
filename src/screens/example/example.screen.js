import { loadStyle, loadTemplate } from "../../helpers/loaders";
import style from "./example.style.scss";
import template from "./example.template.html";

class Example extends HTMLElement {
  shadowRoot = this.attachShadow({ mode: "open" });

  constructor() {
    super();

    loadStyle(this.shadowRoot, style);
    loadTemplate(this.shadowRoot, template);
  }
}

customElements.define("screen-example", Example);