const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/Header/header.css">
    
    <div class="header">
        <h1>My Site Header</h1>
    </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { Header };
