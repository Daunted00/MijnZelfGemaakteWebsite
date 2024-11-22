class navigationbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div>
                    <a class="return" href="../sitemap.html"><img src="../fontIcons/arrow-left-solid.svg" alt="Return"/>Terug</a>
                </div>
                <div>
                    <img class="logo" src="../images/smiley.png" alt="smiley.jpg">
                </div>
                <div>
                     <a class="menu" href="../sitemap.html">Menu<img src="../fontIcons/bars-solid.svg" alt="menu"/></a>
                </div>
            </nav>
        `;
    }
}

customElements.define('navigation-bar', navigationbar);