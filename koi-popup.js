//DEFINE CONSTANTS HERE
const popup = 'koi-popup';
const popup_template = document.createElement('template');
popup_template.innerHTML = `
  <style>
    :host {
      --primary: #fff;
			--secondary: #ccc;
      --light: #0076c0;
			--medium: #003e7e;
			--dark: #0f3062;
			--seraph: Georgia, serif;
			--sans: Tahoma, Geneva, sans-serif;
			width: 100%;
    }
    /* @media only screen and (max-width: 500px) {

    } */
  </style>
	<div id="kpopup" class="kpopup" name="kpopup">
		POPUP CONTENT HERE
  </div>`;
window.ShadyCSS && window.ShadyCSS.prepareTemplate(popup_template, popup);
//DEFINE HTML ELEMENT CLASSES HERE
class KoiPopup extends HTMLElement {
  //BOILERPLATE STUFF
  safeSetAttribute(name, value) {
    if (this.getAttribute(name) !== value) this.setAttribute(name, value);
  }
  static get observedAttributes() {
    return [];
  }
  constructor() {
    super();
  }
  //END BOILERPLATE STUFF
  //THINGS TO DO WHEN THE COMPONENT LOADS
  connectedCallback() {
    //STANDARD WEBCOMPONENT INIT
    this.setAttribute('role', 'presentation');
    this.updateShadyStyles();
    if (!this.shadowRoot) {
      // create shadow tree
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(popup_template.content.cloneNode(true));
      // cache useful shadow selectors
      this.shadowPopup = this.shadowRoot.getElementById('kpopup');
    }
    //END STANDARD WC INIT
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
  //END BOILERPLATE STUFF
  //CUSTOM STUFF!
  //END CUSTOM STUFF
}

const register = () => customElements.define(popup, KoiPopup);
window.WebComponents ? window.WebComponents.waitFor(register) : register();
