//DEFINE CONSTANTS HERE
const cmmStarstream = 'cmm-starstream';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmStarstream extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-starstream';
    this.template.innerHTML = `
    <style>
      :host {
        --dark: #1a233a;
        --medium: #272e48;
        --light: #737ea8;
        width:100%;
        height:100%;
        display:flex;
        background-color:transparent;
        justify-content: center;
      }
      .cmm-starstream{
        display:flex;
        justify-content:center;
        align-items:center;
        align-content:center;
        text-align:center;
        color:white;
        width: 100%;
        background-color:var(--dark);
        height:100vh;
        overflow:scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .cmm-starstream::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div id="cmm-starstream" class="cmm-starstream" name="cmm-starstream">
    <!-- if user is logged in show app -->
    STARSTREAM HERE
    <!-- else show visitor page -->
    </div>
    `;
  }
  selectElements() {
    this.shadowStarstream = this.shadowRoot.getElementById('cmm-starstream');
  }
}

const register_cmmStarstream = () => customElements.define(cmmStarstream, CmmStarstream);
window.WebComponents ? window.WebComponents.waitFor(register_cmmStarstream) : register_cmmStarstream();
