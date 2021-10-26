//DEFINE CONSTANTS HERE
const kdetails = 'koi-details';
//DEFINE HTML ELEMENT CLASSES HERE
class KoiDetails extends KoiComponent {
  constructor() {
    super();
    this.tag = 'koi-details';
    this.template.innerHTML = `
    <details id="kdetails" class="kdetails" name="kdetails">
      <summary id="kdetails-summary" class="kdetails-summary" name="kdetails-summary">
        <slot name="kdetails-summary">Loading...</slot>
      </summary>
      <div id="kdetails-body"class="kdetails-body">
        <slot name="kdetails-body">Fetching data...</slot>
      </div>
    </details>
  `;
  }
  selectElements() {
    this.shadowDetails = this.shadowRoot.getElementById('kdetails');
    this.shadowSummary = this.shadowRoot.getElementById('kdetails-summary');
    this.shadowDetailsBody = this.shadowRoot.getElementById('kdetails-body');
  }
}

const register_kdetails = () => customElements.define(kdetails, KoiDetails);
window.WebComponents ? window.WebComponents.waitFor(register_kdetails) : register_kdetails();
