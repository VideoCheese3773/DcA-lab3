class Digital extends HTMLElement {
    static get observedAttributes() {
        return ["img", "name", "date", "price"];
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
            <p class="featuredText">${this.name}</p>
            <p class="featuredText">${this.date}</p>
            <p class="featuredText">${this.price}</p>
            <p class="featuredText">Nintendo Switch</p>
        </section>
        `;
    }
}

customElements.define("app-digital", Digital);
export default Digital;