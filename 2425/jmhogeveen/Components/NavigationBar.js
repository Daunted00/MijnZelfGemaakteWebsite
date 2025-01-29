class navigationbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const subPath = this.getAttribute('sub-path') || '';

        const returnUrl = this.getAttribute('return-url') || '../sitemap.html';
        this.innerHTML = `
             <nav>
                <div>
                    <a class="return" href="${returnUrl}"><p>〱Terug</p></a>
                </div>
                <div onclick="location.href='/index.html'">
                    <img class="logo" src="../images/Logo.png" alt="Website-Logo.jpg">
                </div>
                <div id="menuToggle" class="menu-toggle">
                    <p>Menu ☰</p>
                </div>
            </nav>
        `;
    }
}

customElements.define('navigation-bar', navigationbar);