class HeaderOfThePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title= this.getAttribute('title') || 'Not declared';
        const subtitle= this.getAttribute('subtitle') || '';
        this.innerHTML = `
            <header> 
                <div> <!--Title-->
                    <h1>${title}</h1>
                </div>
                <div> <!--Circle-->
                  <div class="round"></div>
                </div>
                <div> <!--Subtitle-->
                  <h1>${subtitle}</h1>
                </div>
            </header>
        `;
    }
}

customElements.define('page-header', HeaderOfThePage);