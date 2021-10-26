//DEFINE CONSTANTS HERE
const cmmProfile = 'cmm-profile';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmProfile extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-profile';
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
      .cmm-profile{
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
      .cmm-profile::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div id="cmm-profile" class="cmm-profile" name="cmm-profile">
    <!-- if user is logged in show app -->
    PROFILE HERE
    <!-- else show visitor page -->
    </div>
    `;
  }
  selectElements() {
    this.shadowProfile = this.shadowRoot.getElementById('cmm-profile');
  }
}

const register_cmmProfile = () => customElements.define(cmmProfile, CmmProfile);
window.WebComponents ? window.WebComponents.waitFor(register_cmmProfile) : register_cmmProfile();
