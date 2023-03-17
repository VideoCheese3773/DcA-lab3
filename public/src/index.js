//main index
import * as modules from "./components/index.js";
import featData from "./components/Featured/featuredData.js";
import bigNewsData from "./components/News/bigNewsData.js";
import smallNewsData from "./components/News/smallNewsData.js";
import charData from "./components/Characters/charactersData.js";
import digitalData from "./components/Digital/digitalData.js";

class AppContainter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
    }

    attributeChangedCallback(propname, oldvalue, newvalue) {
        this[propname] = newvalue;
        this.render();
    }

    connectedCallback() {
        let components = this.getComponents();
        this.render(components);
    }

    getComponents() {
        let components = [];
        components.push(this.getFeatured());
        components.push(this.getBigNews());
        components.push(this.getSmallNews());
        components.push(this.getCharacters());
        components.push(this.getDigital());
        console.log(components);
        return components
    }

    getFeatured() {
        let featuredHTML = ""
        featData.forEach((info) => {
            featuredHTML += `
                <app-featured img="${info.img}" text="${info.text}"></app-featured>
            `;
        })
        return featuredHTML;
    }

    getBigNews() {
        let bigNewsHTML = ""
        bigNewsData.forEach((info) => {
            bigNewsHTML += `
                <app-bignews img="${info.img}" date="${info.date}" title="${info.title}" text="${info.text}"></app-bignews>
            `;
        })
        return bigNewsHTML;
    }

    getSmallNews() {
        let smallNewsHTML = ""
        smallNewsData.forEach((info) => {
            smallNewsHTML += `
                <app-smallnews img="${info.img}" date="${info.date}" title="${info.title}"></app-smallnews>
            `;
        })
        return smallNewsHTML;
    }

    getCharacters() {
        let charactersHTML = ""
        charData.forEach((info) => {
            charactersHTML += `
                <app-digital img="${info.img}" name="${info.name}"></app-smallnews>
            `;
        })
        return charactersHTML;
    }

    getDigital() {
        let digitalHTML = ""
        digitalData.forEach((info) => {
            digitalHTML += `
                <app-digital img="${info.img}" title="${info.title}" date="${info.date}" price="${info.price}"></app-digital>
            `;
        })
        return digitalHTML;
    }

    render(components) {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/index.css">

        <section class="navBar">
        <div class="topBar">

            <div class="leftSide">
                <img src="./src/img/nintendo.png" class="nintendoLogo">
                <div class="searchBar">
                    <div class="navItem">
                        <img src="./src/img/lupe.png" class="navIcon">
                        <p>Search games, hardware, news, etc</p>
                    </div>
                    <div class="navItem categories">
                        <p>All categories</p>
                        <img src="./src/img/downArrow.png" class="navIcon">
                    </div>
                </div>
            </div>

            <div class="rightSide">
                <div class="navItem">
                    <img src="./src/img/question.png" class="navIcon">
                    <p class="itemText">Support</p>
                </div>
                <div class="navItem">
                    <img src="./src/img/heart.png" class="navIcon">
                    <p class="itemText">Wish List</p>
                </div>
                <div class="navItem">
                    <img src="./src/img/cart.png" class="navIcon">
                    <p class="itemText">Cart</p>
                </div>
                <div class="navItem lastItem">
                    <img src="./src/img/user.png" class="navIcon">
                    <p class="itemText">Log in / Sign up</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>

        <div class="botBar">
            <div class="navItem">
                <img src="./src/img/cap.png" class="navIcon">
                <p class="itemText">My Nintendo Store</p>
                <img src="./src/img/downArrow.png" class="navIcon">
            </div>

            <div class="navItem">
                <img src="./src/img/dpad.png" class="navIcon">
                <p class="itemText">Games</p>
                <img src="./src/img/downArrow.png" class="navIcon">
            </div>

            <div class="navItem">
                <img src="./src/img/switch.png" class="navIcon">
                <p class="itemText">Nintendo Switch</p>
                <img src="./src/img/downArrow.png" class="navIcon">
            </div>

            <div class="navItem">
                <img src="./src/img/news.png" class="navIcon">
                <p class="itemText">News & Events</p>
                <img src="./src/img/downArrow.png" class="navIcon">
            </div>

            <div class="navItem">
                <img src="./src/img/star.png" class="navIcon">
                <p class="itemText">Play Nintendo</p>
                <img src="./src/img/downArrow.png" class="navIcon">
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="banner">
        <img src="./src/img/bayonetta.png" class="bannerImg">
        <div class="bannerInfo">
            <div class="leftSide">
                <p class="leftText"><strong>Pre-Order Digitally today, play on 3/17</strong></p>
                <button class="leftButton"><strong>Pre-order now</strong></button>
            </div>
            <div class="rightSide">
                <img src="./src/img/esrbTeen.svg" class="esrb">
                <p class="rightText">Animated Blood, Fantasy Violence</p>
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="featured">
        <div class="featBannerInfo">
            <p class="leftText"><strong>Featured</strong></p>
            <img src="./src/img/marioDay.png" class="bannerImg">
            <div class="featBannerDiv">
                <p class="leftText">Save through 3/23 at 11:59 p.m. PT</p>
                <button class="leftButton"><strong>Shop now</strong></button>
            </div>
            <div class="bannerComponent">
                ${components[0]}
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="onlineStore">
        <div class="onlineBannerInfo">
            <p class="leftText"><strong>Online Store</strong></p>
            <img src="./src/img/onlineStore.png" class="bannerImg">
            <div class="onlineBannerDiv">
                <p class="leftText">Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on
                    orders $50 and over.</p>
                <button class="leftButton"><strong>Start Shopping</strong></button>
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="gamingSystems">
        <div class="gamingBannerInfo">
            <p class="leftText"><strong>Gaming Systems</strong></p>
            <img src="./src/img/gamimgSystems.png" class="bannerImg">
            <div class="gamingBannerDiv">
                <p class="leftText">Find the perfect Nintendo Switch system for you.</p>
                <button class="leftButton"><strong>Explore Now</strong></button>
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="news">
        <div class="newsBannerInfo">
            <p class="leftText"><strong>News</strong></p>
            <div class="bigNews">
                ${components[1]}
            </div>
            <div class="smallNews">
                ${components[2]}
            </div>
            <button class="leftButtonMod"><img src="./src/img/newsW.png" class="navIcon"><strong>See All News Articles</strong></button>
        </div>
        <div class="divider"></div>
    </section>


    <section class="characters">
        <div class="charactersBannerInfo">
            <p class="leftText"><strong>Characters</strong></p>
            <div class="charactersDiv">
                ${components[3]}
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="digital">
        <div class="digitalBannerInfo">
            <p class="leftText"><strong>Digital Best Sellers</strong></p>
            <div class="digitalDiv">
                ${components[4]}
            </div>
            <p class="leftText"><strong>Digital New Releases</strong></p>
            <div class="digitalDiv">
                ${components[4]}
            </div>
        </div>
        <div class="divider"></div>
    </section>


    <section class="footer">
        <img src="./src/img/nintendo.png" class="footerImg">
    </section>
        `
    }
}

customElements.define("app-container", AppContainter);