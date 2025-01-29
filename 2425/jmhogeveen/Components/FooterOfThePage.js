class FooterOfThePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="grid-container">
                    <div class="grid-item">
                    <img class="littleLogo" src="/2425/jmhogeveen/images/Logo.png" alt="Website-Logo">
                    </div>
                    <div class="grid-item">Bedankt voor het bezoeken van mijn website.</div>
                    <div class="grid-item"> &#169 2024 Mijn zelf gemaakte website gemaakt door Jochem Hogeveen</div>
                </div>
            </footer>
        `;
    }
}

customElements.define('page-footer', FooterOfThePage);