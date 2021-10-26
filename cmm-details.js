//DEFINE CONSTANTS HERE
const cmmDetails = 'koi-details';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmDetails extends CmmComponent {
  constructor() {
    super();
    this.tag = 'cmm-details';
    this.template.innerHTML = `
    <details id="cmm-details" class="cmm-details" name="cmm-details">
      <summary id="cmm-details-summary" class="cmm-details-summary" name="cmm-details-summary">
        <slot name="cmm-details-summary">Loading...</slot>
      </summary>
      <div id="cmm-details-body"class="cmm-details-body">
        <slot name="cmm-details-body">Fetching data...</slot>
      </div>
    </details>
  `;
  }
  selectElements() {
    this.shadowDetails = this.shadowRoot.getElementById('cmm-details');
    this.shadowSummary = this.shadowRoot.getElementById('cmm-details-summary');
    this.shadowDetailsBody = this.shadowRoot.getElementById('cmm-details-body');
  }
}

const register_cmm_details = () => customElements.define(cmmDetails, CmmDetails);
window.WebComponents ? window.WebComponents.waitFor(register_cmm_details) : register_cmm_details();
