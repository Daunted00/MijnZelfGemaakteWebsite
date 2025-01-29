class SideBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <aside id="menu" class="hidden">
                <div>
                    <img src="/fontIcons/Home.png" alt="homebutton">
                    <a href="index.html">Hoofdmenu</a>
                </div>
                <div>
                    <img src="/fontIcons/Dot.png">
                    <a href="sitemap.html">Opdrachten Pagina</a>
                </div>
                <div>
                    <img src="/fontIcons/Dot.png">
                    <a href="./contact-formulier/Contact-Formulier.html">Contact Formulier</a>
                </div>
                <div>
                    <img src="/fontIcons/Dot.png">
                    <a href="./Personlijke-informatie/OverMij.html">Over Mij</a>
                </div>
            </aside>
        `;
    }
}

customElements.define('side-bar', SideBar);