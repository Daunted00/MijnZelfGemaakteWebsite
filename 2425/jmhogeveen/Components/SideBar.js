class SideBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <aside id="menu" class="hidden">
                <div>
                    <img src="/2425/jmhogeveen/fontIcons/Home.png" alt="homebutton">
                    <a href="/2425/jmhogeveen/index.html">Hoofdmenu</a>
                </div>
                <div>
                    <img src="/2425/jmhogeveen/fontIcons/Dot.png">
                    <a href="/2425/jmhogeveen/sitemap.html">Opdrachten Pagina</a>
                </div>
                <div>
                    <img src="/2425/jmhogeveen/fontIcons/Dot.png">
                    <a href="/2425/jmhogeveen/contact-formulier/Contact-Formulier.html">Contact Formulier</a>
                </div>
                <div>
                    <img src="/2425/jmhogeveen/fontIcons/Dot.png">
                    <a href="/2425/jmhogeveen/Personlijke-informatie/OverMij.html">Over Mij</a>
                </div>
            </aside>
        `;
    }
}

customElements.define('side-bar', SideBar);