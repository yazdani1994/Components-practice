const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="components//Projects/projects.css">
<div class="course-card">
  <div class="cover">
    <img src="" />
  </div>

  <div class="details">
    <h2></h2>
    <div class="info">
      <p>Students: <slot name="students"></slot></p>
      <p>Teacher: <slot name="teacher"></slot></p>
    </div>

    <div class="actions">
      <button id="register">Register</button>
      <button id="toggle">Show Details</button>
    </div>
  </div>
</div>
`;

class Projects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  register(comp) {
    alert(`You register in course ${comp.getAttribute("title")}`);
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".details h2").innerHTML =
      this.getAttribute("title");

    this.shadowRoot
      .querySelector("img")
      .setAttribute("src", this.getAttribute("cover"));

    this.shadowRoot.querySelector("#register").addEventListener("click", () => {
      this.register(this);
    });

    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.changeToggle);
  }

  static observedAttributes() {
    return ["title", "cover"];
  }

  changeToggle = () => {
    this.toggleInfo = !this.toggleInfo;

    this.shadowRoot.querySelector(".info").style.display = this.toggleInfo
      ? "block"
      : "none";

    this.shadowRoot.querySelector("#toggle").innerHTML = this.toggleInfo
      ? "Hide Details"
      : "Show Details";
  };
}

export { Projects };
