class SmallNews extends HTMLElement {
    static get observedAttributes() {
        return ["img", "date", "title"];
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
            <p class="bigNewsText">${this.date}</p>
            <p class="bigNewsTitle">${this.title}</p>
            <p class="bigNewsText">Read More</p>
        </section>
        `;
    }
}

customElements.define("app-smallnews", SmallNews);
export default SmallNews;