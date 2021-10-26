//DEFINE CONSTANTS HERE
const body = 'koi-body';
//DEFINE HTML ELEMENT CLASSES HERE
class KoiBody extends KoiComponent {
  constructor() {
    super();
    this.tag = 'koi-body';
    this.template.innerHTML = `
    <style>
      :host {
        --primary: #fff;
        --secondary: #ccc;
        --light: #0076c0;
        --medium: #003e7e;
        --dark: #0f3062;
        --seraph: Georgia, serif;
        --sans: Tahoma, Geneva, sans-serif;
        --direction: row;
        --mobile-direction: column;
        --justify: space-around;
        font-family: var(--sans);
        width: 100%;
      }
    </style>
    <body id="kbody" class="kbody" name="kbody">
      <koi-header></koi-header>
      <koi-main></koi-main>
      <koi-footer></koi-footer>
    </body>
    `;
  }
  selectElements() {
    this.shadowBody = this.shadowRoot.getElementById('kbody');
  }
  //main render listener
  //when header/nav/link is clicked
  //main render dispatch
  //create custom event and dispatch it from button click
}

const register_body = () => customElements.define(body, KoiBody);
window.WebComponents ? window.WebComponents.waitFor(register_body) : register_body();
