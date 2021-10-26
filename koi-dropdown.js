//DEFINE CONSTANTS HERE
const text = 'koi-text';
const text_template = document.createElement('template');
const koinputTxtDefaultObject = {
	placeholder: "koinputTxt is really cool",
	label: "First Name:",
	UX: "",
	readyMsg: "Ready",
	err: "&#10008;",
	errMsg: "Fail",
	succ: "&#10003",
	succMsg: "Success",
	wait: "...",
	waitMsg: "Loading",
	height: 1
};
text_template.innerHTML = `
  <style>
.koinputTxtWrap{
	min-height: 75px;
  display: flex;
  flex-direction: column;
}
.koinputTxt{
  width:100%;
  line-height: 40px;
  font-size: 20pt;
  resize: none;
  white-space: nowrap;
  overflow: auto;
}
.koinputTxtHud{
  display:flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
	.koiLabel{
		color: #555;
		font-size: 18pt;
	}
	.koiUX{
		font-size: 12pt;
		transition: all .5s;
		display: none;
	}
	.koiWait{
		display: block;
		text-align: center;
		background: linear-gradient(to left, #FFF 10%, #444 45%, #444 55%, #FFF 90%);
		background-size: 200% auto;
		color: #444;
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 2s cubic-bezier(0.4, 0, 1, 1) infinite
	}
	.koiErr{
		color: #cc5555;
		display: block;
	}
	.koi200{
		color: #55aa55;
		display: block;
	}
	@-webkit-keyframes shine{
		to {
				background-position: 200% center;
			}
	}
	@keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  </style>
  <div id="koinputTxtWrap" class="koinputTxtWrap">
		<textarea class="koinputTxt" id="koinputTxt" name="koinputTxtForm" rows="1" wrap="soft"  placeholder="" onchange="this.getRootNode().host.updateView()"></textarea>
		<div class="koinputTxtHud" id="koinputTxtHud">
			<label class="koiLabel" id="koinputTxtLabel" for="koinputTxt"></label>
			<span class="koiUX" id="koiUX"></span>
		</div>
	</div>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(text_template, text);

//DEFINE HTML ELEMENT CLASSES HERE
 
class KoiText extends HTMLElement {	
  /**
   * Guards against loops when reflecting observed attributes.
   * @param  {String} name Attribute name
   * @param  {any} value
   * @protected
   */
  safeSetAttribute(name, value) {
    if (this.getAttribute(name) !== value) this.setAttribute(name, value);   
  }

  static get observedAttributes() {
    return ['value', 'placeholder'];
  }
	
	get placeholder(){
		return this.hasAttribute('placeholder');
	}
	
	set placeholder(val){
		 this.safeSetAttribute('placeholder', val);
		return this.hasAttribute('placeholder');
	}
	
	get inputlabel(){
		return this.hasAttribute('inputlabel');
	}
	
	set inputlabel(val){
		 this.safeSetAttribute('inputlabel', val);
		return this.hasAttribute('inputlabel');
	}
	
	get value(){
		return this.hasAttribute('value');
	}
	
	set value(val){
		 this.safeSetAttribute('value', val);
		return this.hasAttribute('value');
	}

  constructor() {
    super();		
  }

  connectedCallback() {
    this.setAttribute('role', 'presentation');
    // Initialize shady styles if needed
    this.updateShadyStyles();
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(text_template.content.cloneNode(true));
      this.shadowText = this.shadowRoot.getElementById('koinputTxt');
			this.shadowText.placeholder = this.getAttribute('placeholder');
			this.shadowText.value = "";
			this.shadowText.label = this.shadowRoot.getElementById('koinputTxtLabel');
			this.shadowText.label.innerHTML = this.getAttribute('inputlabel');
			this.UXElement = this.shadowRoot.getElementById('koiUX');
    }
		this.setViewWait();
		this.setViewReady();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
  
  disconnectedCallback() {
    this.disconnectObserver();
  }
  
  /**
   * When the polyfill is at play, ensure that styles are updated.
   * @protected
   */
  updateShadyStyles() {
    window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }

  /**
   * Disconnects and unloads the IntersectionObserver.
   * @protected
   */
  disconnectObserver() {
    this.observer.disconnect();
    this.observer = null;
    delete this.observer;
  }
	setViewReady() {
		this.UXElement.innerHTML = koinputTxtDefaultObject.readyMsg ? koinputTxtDefaultObject.readyMsg : koinputTxtDefaultObject.ready, this.UXElement.classList.remove("koiErr"), this.UXElement.classList.remove("koi200"), this.UXElement.classList.remove("koiWait")
	}
	setViewWait() {
		this.UXElement.innerHTML = koinputTxtDefaultObject.waitMsg ? koinputTxtDefaultObject.waitMsg + " " + koinputTxtDefaultObject.wait : koinputTxtDefaultObject.wait, this.UXElement.classList.remove("koiErr"), this.UXElement.classList.remove("koi200"), this.UXElement.classList.add("koiWait")
	}
	setViewSuccess() {
		this.UXElement.innerHTML = koinputTxtDefaultObject.succMsg ? koinputTxtDefaultObject.succMsg + " " + koinputTxtDefaultObject.succ : koinputTxtDefaultObject.succ, this.UXElement.classList.remove("koiErr"), this.UXElement.classList.remove("koiWait"), this.UXElement.classList.add("koi200")
	}
	setViewFail() {
		this.shadowText.value = "user input TERRIBLE", this.UXElement.innerHTML = koinputTxtDefaultObject.errMsg ? koinputTxtDefaultObject.errMsg + " " + koinputTxtDefaultObject.err : koinputTxtDefaultObject.err, this.UXElement.classList.remove("koi200"), this.UXElement.classList.remove("koiWait"), this.UXElement.classList.add("koiErr")
	}
	updateView(comp){
	 this.setViewSuccess();
	}
}

const register_text = () => customElements.define(text, KoiText);
window.WebComponents ? window.WebComponents.waitFor(register_text) : register_text();
