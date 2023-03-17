class Characters extends HTMLElement {
    static get observedAttributes() {
        return ["img", "name"];
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
        <link rel="stylesheet" href="./src/components/Characters/Characters.css">
        <section class="characterItem">
            <img src="${this.img}" class="characterImg">
            <p class="characterText">${this.name}</p>
        </section>
        `;
    }
}

customElements.define("app-characters", Characters);
export default Characters;