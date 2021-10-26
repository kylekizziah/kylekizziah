//DEFINE CONSTANTS HERE
const cmmTimeline = 'cmm-timeline';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmTimeline extends KoiComponent {
  constructor() {
    super();
    this.tag = 'cmm-timeline';
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
      .cmm-timeline{
        width: calc(100% - 16px);
        background-color:var(--dark);
        height:100vh;
        overflow:scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .cmm-timeline::-webkit-scrollbar {
        display: none;
      }
    </style>
    <div id="cmm-timeline" class="cmm-timeline" name="cmm-timeline">
    <!-- if user is logged in show app -->
    <!-- else show visitor page -->
    </div>
    `;
  }
  selectElements() {
    this.shadowTimeline = this.shadowRoot.getElementById('cmm-timeline');
  }
}

const register_cmmTimeline = () => customElements.define(cmmTimeline, CmmTimeline);
window.WebComponents ? window.WebComponents.waitFor(register_cmmTimeline) : register_cmmTimeline();
