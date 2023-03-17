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
        <link rel="stylesheet" href="./src/components/Digital/Digital.css">
        <section class="digitalItem">
            <img src="${this.img}" class="digitalImg">
            <p class="digitalText">${this.name}</p>
            <p class="digitalText">${this.date}</p>
            <p class="digitalText">${this.price}</p>
            <p class="digitalText">Nintendo Switch</p>
        </section>
        `;
    }
}

customElements.define("app-digital", Digital);
export default Digital;