//DEFINE HTML ELEMENT CLASSES HERE
class CmmInput extends KoiInput {
  constructor(){
    super();
    this.tag = 'cmm-input';
  }
}
const register_cmmInput = () => customElements.define('cmm-input', KoiInput);
window.WebComponents ? window.WebComponents.waitFor(register_cmmInput) : register_cmmInput();
