class SmallNews extends HTMLElement {
    static get observedAttributes() {
        return ["img", "date", "name"];
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
        <section class="smallNewsItem">
            <img src="${this.img}" class="smallNewsImg">
            <p class="smallNewsText">${this.date}</p>
            <p class="smallNewsText">${this.name}</p>
            <p class="smallNewsText">Read More</p>
        </section>
        `;
    }
}

customElements.define("app-smallnews", SmallNews);
export default SmallNews;