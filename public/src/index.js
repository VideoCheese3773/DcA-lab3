//main index
import * as modules from "./components/index.js";
//import data from "./data.js";
class AppContainter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propname, oldvalue, newvalue) {
        this[propname] = newvalue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/index.css">

        <p>bruh</p>
        `
    }
}

customElements.define("app-container", AppContainter);
