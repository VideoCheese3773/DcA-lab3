class BigNews extends HTMLElement {
    static get observedAttributes() {
        return ["img", "date", "title", "text"];
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
        <link rel="stylesheet" href="./src/components/News/News.css">
        <section class="bigNewsItem">
            <img src="${this.img}" class="bigNewsImg">
            <p class="featuredText">${this.text}</p>
        </section>
        `;
    }
}

customElements.define("app-featured", Featured);
export default Featured;