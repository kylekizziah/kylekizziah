//DEFINE HTML ELEMENT CLASSES HERE
class KoiText extends KoiInput {
  static get observedAttributes() {
    return ['placeholder', 'label', 'readyMsg', 'errMsg', 'succMsg', 'waitMsg'];
  }
  constructor() {
    super();
    //attributes need to be moved into attribute scope
  	this.UX = "";
    this.ready = "";
    this.err = "&#10008;";
  	this.succ = "&#10003";
  	this.wait = "...";
    this.tag = 'koi-text';
    this.css = `textarea{
      font-family: Arial, Helvetica, sans-serif;
      white-space: nowrap;
      overflow: auto;
    }
    .koiLabel{
      color: #555;
      font-size: 10pt;
    }
    .koiUX{
      font-size: 12pt;
      transition: all .5s;
      display: none;
    }
    .koiWait{
      display: block;
      text-align: center;
      background: linear-gradient(to left, #FFF 20%, #444 40%, #444 60%, #444 80%);
      background-size: 200% auto;
      color: #444;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shine 1s linear infinite;
      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }
    }
    .koiErr{
      color: #cc5555;
      display: block;
    }
    .koi200{
      color: #55aa55;
      display: block;
    }
    .koinputTxtWrap{
      max-width:300px;
      display: flex;
      flex-direction: column;
    }
    .koinputTxt{
      width:100%;
      line-height: 24px;
      font-size: 20px;
      resize: none;
    }
    .koinputTxtHud{
      display:flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }`;
    this.html = `<div id="koinputTxtWrap" class="koinputTxtWrap">
      <textarea class="koinputTxt" id="koinputTxt" name="koinputTxtForm" rows="1" wrap="soft"  placeholder="" onkeyup="this.getRootNode().host.debounce(this.getRootNode().host.updateView(this.value), 3)"></textarea>
      <div class="koinputTxtHud" id="koinputTxtHud">
        <label class="koiLabel" id="koinputTxtLabel" for="koinputTxt"></label>
        <span class="koiUX" id="koiUX"></span>
      </div>
    </div>`;
    this.template.innerHTML = `<style>` + this.css + `</style>` + this.html;
    this.initialize();
    this.selectElements();
    this.setViewWait();
  }
  connectedCallback(){
    this.setViewReady();
  }
  render(){
    this.setViewReady();
  }
  selectElements() {
    this.shadowText = this.shadowRoot.getElementById('koinputTxt');
    this.shadowText.placeholder = this.getAttribute('placeholder');
    this.shadowText.value = this.getAttribute('value');

    this.shadowLabel = this.shadowRoot.getElementById('koinputTxtLabel');
    this.shadowLabel.innerHTML = this.getAttribute('label');

    this.UXElement = this.shadowRoot.getElementById('koiUX');
  }
}
  const register_ktext = () => customElements.define('koi-text', KoiText);
  window.WebComponents ? window.WebComponents.waitFor(register_ktext) : register_ktext();
