//DEFINE CONSTANTS HERE
const cmmBody = 'cmm-body';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmBody extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-body';
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
    <body id="commishMeBody" class="cmm-body" name="cmm-body">
      <cmm-header id="commishMeHeader"></cmm-header>
      <cmm-main id="commishMeMain"></cmm-main>
      <cmm-footer></cmm-footer>
      <!-- Firebase App (the core Firebase SDK) -->
      <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
      <!-- Firebase SDK for Analytics -->
      <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>
      <!-- Add Firebase products that you want to use -->
      <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-firestore.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-database.js"></script>
    </body>
    `;
  }
  selectElements() {
    this.shadowBody = this.shadowRoot.getElementById('commishMeBody');
    this.shadowHeader = this.shadowRoot.getElementById('commishMeHeader');
    this.shadowMain = this.shadowRoot.getElementById('commishMeMain');
  }

  //main render listener
  setChild(key, child){
    console.log(key);
    console.log(child);
    this[key] = child;
    if(this.nav && this.main){
      console.log('making listener');
      console.log(this.nav);
      console.log(this.main.render);
      this.nav.addEventListener('click', e => {
        console.log(e);
        this.main.render(e.path[1].id);
      });
    }
  }
  //when header/nav/link is clicked
  //main render dispatch
  //create custom event and dispatch it from button click
}

const register_cmmBody = () => customElements.define(cmmBody, CmmBody);
window.WebComponents ? window.WebComponents.waitFor(register_cmmBody) : register_cmmBody();
