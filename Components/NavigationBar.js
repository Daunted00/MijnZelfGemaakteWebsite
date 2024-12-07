class navigationbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
             <nav>
                <div>
                    <a class="return" href="../sitemap.html"><img src="../fontIcons/arrow-left-solid-white.svg" alt="Terug-Icoon"/>Terug</a>
                </div>
                <div>
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