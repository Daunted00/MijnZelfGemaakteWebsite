class HeaderOfThePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header> 
                <div> <!--Title-->
                    <h1>Contactformulier</h1>
                </div>
                <div> <!--Circle-->
                  <div class="round"></div>
                </div>
                <div> <!--Subtitle-->
                  <h1>hello</h1>
                </div>
            </header>
        `;
    }
}

customElements.define('page-header', HeaderOfThePage);