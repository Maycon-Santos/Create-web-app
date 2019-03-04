export const loadStyle = (shadowRoot, styleRaw) => {
  const styleElement = document.createElement('style');
  styleElement.textContent = styleRaw;
  shadowRoot.appendChild(styleElement);
}

export const loadTemplate = (shadowRoot, templateRaw) => {
  const docTemplate = new DOMParser().parseFromString(templateRaw, "text/html");
  const childrens = docTemplate.body.childNodes;
  childrens.forEach(child => shadowRoot.appendChild(child));
}