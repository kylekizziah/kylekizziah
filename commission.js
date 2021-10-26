//DEFINE CONSTANTS HERE
const cmmCommish = 'cmm-commish';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmCommish extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-commish';
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
      .cmm-commish{
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
      .cmm-commish::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div id="cmm-commish" class="cmm-commish" name="cmm-commish">
    <!-- if user is logged in show app -->
    COMMISSION HERE
    <!-- else show visitor page -->
    </div>
    `;
  }
  selectElements() {
    this.shadowCommish = this.shadowRoot.getElementById('cmm-commish');
  }
}

const register_cmmCommish = () => customElements.define(cmmCommish, CmmCommish);
window.WebComponents ? window.WebComponents.waitFor(register_cmmCommish) : register_cmmCommish();
