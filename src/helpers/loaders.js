import supportShadowDOM from "./supportShadowDOM";
import uniqueID from "./uniqueID";
import { cssReset, cssCommons } from "../commons/css";

const includedStyles = [];

const includedStyle = includeName => !!(includedStyles.indexOf(includeName) + 1);

const allowInclude = includeName => !includedStyle(includeName) || supportShadowDOM;
const includeStyles = (styleRaw, config) => {
  const includesPromises = [
    config.includeReset && allowInclude("cssReset") && cssReset,
    config.includeCommons && allowInclude("cssCommons") && cssCommons
  ];

  config.includeReset && includedStyles.push("cssReset");
  config.includeCommons && includedStyles.push("cssCommons");

  return Promise.all(includesPromises)
    .then(includes =>
      includes.map(include => (include ? include.default : "")).join("")
    )
    .then(cssIncludes => cssIncludes + styleRaw);
};

const closeStyleScope = (shadowRoot, style) => {
  if (!supportShadowDOM) {
    const host = shadowRoot && shadowRoot.host;
    if (!host) return style;
    const id = uniqueID.newID;
    const selector = `[__host="${id}"]`;
    host.setAttribute("__host", id);
    return style
      .replace(/\:(host)/gm, selector)
      .replace(/\r?\n|\r/g, "")
      .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
      .trim()
      .split("}")
      .map(fragment => {
        if (fragment.indexOf(selector) + 1 || !fragment.trim()) return fragment;
        return selector + " " + fragment;
      })
      .join("}");
  }
  return style;
};

export const loadStyle = (shadowRoot, styleRaw, config) =>
  new Promise((resolve, reject) => {
    config = {
      includeReset: true,
      includeCommons: true,
      ...(config || {})
    };

    const styleElement = document.createElement("style");

    includeStyles(styleRaw, config)
      .then(style => {
        styleElement.textContent = closeStyleScope(shadowRoot, style);
        shadowRoot.appendChild(styleElement);
        resolve();
      })
      .catch(reject);
  });

export const loadTemplate = (shadowRoot, templateRaw) => {
  const docTemplate = new DOMParser().parseFromString(templateRaw, "text/html");
  const childrens = docTemplate.body.childNodes;
  childrens.forEach(child => shadowRoot.appendChild(child));
};
