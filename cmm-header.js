//DEFINE CONSTANTS HERE
const cmmHeader = 'cmm-header';
//DEFINE HTML ELEMENT CLASSES HERE
class CmmHeader extends KoiHeader {
  constructor() {
    super();
    this.tag = 'cmm-header';
    this.template.innerHTML = `
    <style>
      :host {
        --dark: #1a233a;
        --medium: #272e48;
        --light: #737ea8;
        width:100%;
      }
      .cmm-header{
        background-color:var(--medium);
        position:fixed;
        bottom:0px;
        left:0px;
        right:0px;
        overflow:hidden;
        display:flex;
        justify-content: center;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        padding:10px;
        min-height:60px;
      }
    </style>
    <header id="cmm-header" class="cmm-header" name="cmm-header">
  		<cmm-nav id="cmm-nav"></cmm-nav>
    </header>`;
  }
  selectElements(){
    this.shadowHeader = this.shadowRoot.getElementById('cmm-header');
    this.shadowLogo = this.shadowRoot.getElementById('cmm-logo');
    this.shadowNav = this.shadowRoot.getElementById('cmm-nav');
  }
  setNav(navComponent){
    this.getRootNode().host.setChild('nav',navComponent);
  }
  fireEvent(content_label){
    this.getRootNode().host.fireEvent(content_label);
  }
}
//<cmm-header></cmm-header>
const register_cmmHeader = () => customElements.define(cmmHeader, CmmHeader);
window.WebComponents ? window.WebComponents.waitFor(register_cmmHeader) : register_cmmHeader();
