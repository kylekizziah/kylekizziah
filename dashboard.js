//DEFINE CONSTANTS HERE
const cmmDashboard = 'cmm-dashboard';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmDashboard extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-dashboard';
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
      .cmm-dashboard{
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
      .cmm-dashboard::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div id="cmm-dashboard" class="cmm-dashboard" name="cmm-dashboard">
    <!-- if user is logged in show app -->
    DASHBOARD HERE
    <!-- else show visitor page -->
    </div>
    `;
  }
  selectElements() {
    this.shadowDashboard = this.shadowRoot.getElementById('cmm-dashboard');
  }
}

const register_cmmDashboard = () => customElements.define(cmmDashboard, CmmDashboard);
window.WebComponents ? window.WebComponents.waitFor(register_cmmDashboard) : register_cmmDashboard();
