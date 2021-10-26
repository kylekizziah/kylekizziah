//DEFINE CONSTANTS HERE
const cmm_form = 'cmm-form';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmForm extends CmmComponent {
  //what props change in a form that we need to monitor?
  constructor() {
    super();
    this.tag = 'cmm-form';
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
      width: 100%;
    }
    .kform {
      width: 100%;
      padding: 10px;
      margin: 5px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: var(--direction);
      justify-content: var(--justify);
      align-items: center;
      align-content: center;
      color: #000;
      background-color: var(--primary);
      font-family: var(--sans);
    }
    </style>
  	<form name="kform" id="kform loading" class="kform">
      <slot name="kform-inputs"><span>Loading form...</span></slot>
      <input type="submit" id="ksubmit" class="ksubmit" name="ksubmit" value="Submit">
    </form>`;
  }
  selectElements(){
    console.log(this.tag);
    this.shadowForm = this.shadowRoot.getElementById('kform');
    this.shadowInputs = this.shadowRoot.getElementsByClassName('kinput');
    this.shadowSubmit = this.shadowRoot.getElementsByClassName('ksubmit');
  }
  //listener for the enter button to be hit
  //used specifically on sign-in fields
  checkForEnter(event) {
    if (event.keyCode == 13) {
      //sign in
      this.shadowForm.submit();
    }
  }
}

const register_cmm_form = () => customElements.define(cmm_form, CmmForm);
window.WebComponents ? window.WebComponents.waitFor(register_cmm_form) : register_cmm_form();
