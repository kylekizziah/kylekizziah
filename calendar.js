//DEFINE CONSTANTS HERE
const cmmCalendar = 'cmm-calendar';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmCalendar extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-calendar';
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
      .cmm-calendar{
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
      .cmm-calendar::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div id="cmm-calendar" class="cmm-calendar" name="cmm-calendar">
    <!-- if user is logged in show app -->
    CALENDAR HERE
    <!-- else show visitor page -->
    </div>
    `;
  }
  selectElements() {
    this.shadowCalendar = this.shadowRoot.getElementById('cmm-calendar');
  }
}

const register_cmmCalendar = () => customElements.define(cmmCalendar, CmmCalendar);
window.WebComponents ? window.WebComponents.waitFor(register_cmmCalendar) : register_cmmCalendar();
