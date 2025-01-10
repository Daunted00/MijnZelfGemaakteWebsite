class navigationbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const returnUrl = this.getAttribute('return-url') || '../sitemap.html';
        this.innerHTML = `
             <nav>
                <div>
                    <a class="return" href="${returnUrl}"><img src="../fontIcons/arrow-left-solid-white.svg" alt="Terug-Icoon"/>Terug</a>
                </div>
                <div onclick="location.href='/index.html'">
                    <img class="logo" src="../images/Logo.png" alt="Website-Logo.jpg">
                </div>
                <div>
                    <a class="menu" href="../sitemap.html">Menu<img src="../fontIcons/bars-solid-white.svg" alt="menu-Icoon"/></a>
                </div>
            </nav>
        `;
    }
}

customElements.define('navigation-bar', navigationbar);