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
        <link rel="stylesheet" href="./src/components/Featured/Featured.css">
        <section class="featuredItem">
            <img src="${this.img}" class="featuredImg">
            <p class="featuredText">${this.text}</p>
        </section>
        `;
    }
}

customElements.define("app-featured", Featured);
export default Featured;