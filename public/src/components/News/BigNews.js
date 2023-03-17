class BigNews extends HTMLElement {
    static get observedAttributes() {
        return ["img", "date", "name", "text"];
    }

    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        console.log("newValue", newValue)
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
            <p class="bigNewsText">${this.date}</p>
            <p class="bigNewsText">${this.name}</p>
            <p class="bigNewsText">${this.text}</p>
            <p class="bigNewsText">Read More</p>
        </section>
        `;
    }
}

customElements.define("app-bignews", BigNews);
export default BigNews;