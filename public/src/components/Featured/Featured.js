class Featured extends HTMLElement {
    static get observedAttributes() {
        return ["img", "text"];
    }

    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Profile/Profile.css">
        <section class="appProfile">
            <h1>${this.name}</h1>
            <h2>${this.company}</h2>
            <p>${this.email}</p>
            <p>${this.city}</p>
            </section>
        `;
    }
}

customElements.define("featured", Featured);
export default Featured;