//DEFINE CONSTANTS HERE
const forgot = 'koi-forgot';
const forgot_template = document.createElement('template');
forgot_template.innerHTML = `
  <style>
		:host{
      --primary: #fff;
			--light: #0076c0;
			--medium: #003e7e;
			--dark: #0f3062;
			--seraph: Georgia, serif;
			--sans: Tahoma, Geneva, sans-serif;
			font-family: var(--sans);
			width:100%;
		}
		img{
			max-width: 100%;
		}
		main{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
      background-color:var(--dark);
      color:white;
		}
		h2{
			color: var(--medium);
		}
		h3{
			color: var(--dark);
			font-size: 2em;
		}
		a{
			text-decoration: none;
			color: #fff;
		}
		a:visited{
			text-decoration: none;
			color: #fff;
		}
    .landingHeader{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			border-bottom: solid 1px black;
			min-height: 60px;
			position: -webkit-sticky; /* Safari */
 	 		position: sticky;
			top: 0;
			z-index: 99;
			background-color: #fff;
		}
		.landingLogoContainer{
			width: 320px;
    	display: flex;
    	justify-content: center;
      align-items: center;
      margin:30px;
		}
		.knav {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			max-width: 900px;
			justify-content: flex-end;
			align-items: center;
			height: 100%;
		}
		.knav ul{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			list-style: none;
			padding: 0px;
			margin: 0px;
		}
		.knav ul li{
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;
			max-width: 300px;
		}
		.knav ul li a{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			text-decoration: none;
			color: rgb(90,90,90);
			padding-top: 7px;
	    padding-bottom: 7px;
		}
		.knav ul li a img{
			max-width: 90px;
			width: min-content;
		}
    .koiLabel{
      color: #fff;
      font-size: 18pt;
    }
		.signOut{
			border-radius: 5px;
			background-color: var(--light);
			padding: 10px;
			color:var(--primary);
		}
		.loginContainer{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: 15px;
      width: 100%;
      max-width: 450px;
      margin-bottom: 30px;
		}
		.loginput{
			display: flex;
			flex-direction: column;
		}
		.loginput input{
			line-height: 20px;
			font-size: 19px;
			padding: 10px;
		}
		.knav button{
			line-height: 20px;
			font-size: 19px;
			min-width: 125px;
			padding: 10px;
		}
		.submitButton{
			color: #fff;
			background-color: var(--medium);
      padding: 20px;
      margin-top: 20px;
      font-size: 16pt;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border: solid thin #fff;
      margin-bottom: 20px;
		}
    .submitButton:disabled{
			color: #ccc;
			background-color: rgba(200,200,200, .5);
		}
		.landingNav{
			display: flex;
    	justify-content: center;
    	align-content: center;
    	width: 550px;
    	letter-spacing: 2px;
    	margin-bottom: 20px;
		}
		.landingNav ul{
			display: flex;
			justify-content: space-around;
			align-content: center;
			list-style: none;
			font-size: 16pt;
			padding-left:0px;
			margin-top: 0px;
			margin-bottom: 0px;
			margin-left: 0px;
			margin-right: 10px;
			width:100%;
		}
		.landingNav ul li{
			display: flex;
			justify-content: center;
			align-content: center;
			text-decoration: none;
			color: white;
			background: rgb(35,68,156);
			border-radius: 5px;
			padding: 10px;
			margin-left:10px;
		}
		footer{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			background-color: var(--light);
			color: var(--primary);
			height: 300px;
			font-size: 25px;
		}
		footer img{
			max-width: 200px;
		}
		.footerLeft{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 500px;
		}
		.footerLeft{
			margin-right:40px;
		}
		.footerForgot{
			margin-right:40px;
		}
		.footerForgot{
			padding: 10px;
			border-radius: 5px;
			background-color: var(--dark);
		}
		.forgotContainer{
			padding: 20px;
      width: 475px;
		}
    .lds-hourglass {
      display: inline-block;
      position: relative;
      width: 80px;
    }
    .lds-hourglass:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid var(--light);
      border-color: var(--light) transparent var(--light) transparent;
      animation: lds-hourglass 1.2s infinite;
    }
    .faaScrape{
      display: flex;
      max-width: 320px;
      flex-direction: row;
      flex-wrap: nowrap;
    }
    @keyframes lds-hourglass {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
		@media only screen and (max-width: 960px) {
			h2{
				font-size: 30px;
			}
		}
		@media only screen and (max-width: 900px) {
			.knav{
				justify-content: center;
			}
			.knav button{
				width: 100%;
			}
		}
		@media only screen and (max-width: 880px) {
			.landingHeader{
				min-height: 80px;
			}
			.landingLogoContainer{
			 width: 320px;
			}
			.landingNav{
				width:385px;
			}
		}
		@media only screen and (max-width: 720px) {
			.landingHeader{
				justify-content: center;
			}
		}
		@media only screen and (max-width: 680px) {
			footer{
				height: 500px;
			}
			.footerLeft{
				margin: 0;
				justify-content: center;
			}
			.footerForgot{
				margin: 0;
				justify-content: center;
			}
			h3{
				max-width: 90%;
				margin: 0;
			}
		}
		@media only screen and (max-width: 620px) {
				.loginput{
					width:100%;
				}
				.loginContainer{
			    max-width: 320px;
				}
        .forgotContainer{
			    max-width: 280px;
				}
		}
		@media only screen and (max-width: 400px) {
			.landingNav ul li{
				padding: 5px;
				font-size:12pt;
			}
		}
  </style>
  <!-- <header class="landingHeader" id="landingHeader" name="landingHeader">
		<div id="landingLogoContainer" class="landingLogoContainer" name="landingLogoContainer">
			<img id="landingLogo" class="landingLogo" name="landingLogo" src="/images/mpp_header_logo.png">
		</div>
  </header> -->
<main>
	<h1>Reset your password</h1>
	<div class="forgotContainer">
		<koi-text placeholder="" inputlabel="Email" id="email" onkeyup="this.getRootNode().host.updateEmail(this.getAttribute('value'))"></koi-text>
	</div>
	<div id="forgotDiv"><button id="submitButton" class="submitButton" onclick="this.getRootNode().host.resetLink()">Submit</button></div>
</main>
<footer>
		<div class="footerLeft">
		  <div class="footerLogo">
				<img src="/images/footer_logo.png"/>
			</div>
			<div><p>&copy;2020 myPilotPortal</p><p>All rights reserved.</p></div>
		</div>
		<div class="footerRight"></div>
</footer>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(forgot_template, forgot);

//DEFINE HTML ELEMENT CLASSES HERE

class KoiForgot extends HTMLElement {
  /**
   * Guards against loops when reflecting observed attributes.
   * @param  {String} name Attribute name
   * @param  {any} value
   * @protected
   */
  safeSetAttribute(name, value) {
    if (this.getAttribute(name) !== value) this.setAttribute(name, value);
  }

  //what props change in a landing page that we need to monitor?
  static get observedAttributes() {
    return ['email', 'requestSent'];
  }

  get email() {
    return this._email;
  }
  set email(e) {
    this._email = e;
  }

  get requestSent() {
    return this._requestSent;
  }
  set requestSent(e) {
    this._requestSent = e;
  }

  get respStatus() {
    return this._reqStatus;
  }
  set respStatus(e) {
    this._reqStatus = e;
  }

  updateEmail(email) {
    this._email = email;
  }
  updateRequestSent(rs) {
    this._requestSent = rs;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    //this tells the browser to render the contents and not the wrapper for accessibility reasons
    this.setAttribute('role', 'presentation');
    // Initialize shady styles if needed
    this.updateShadyStyles();
    if (!this.shadowRoot) {
      // create shadow tree
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(forgot_template.content.cloneNode(true));
      this.shadowSubmitButton = this.shadowRoot.getElementById('submitButton');
      this.shadowSubmitDiv = this.shadowRoot.getElementById('forgotDiv');
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }

  disconnectedCallback() {}

  /**
   * When the polyfill is at play, ensure that styles are updated.
   * @protected
   */
  updateShadyStyles() {
    window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }

  resetLink(){
    firebase.auth().sendPasswordResetEmail(this._email).then(function() {
      // Email sent.
      //visual feedback for correctly sent email
      alert('Password reset email sent; please check your email for a link to reset your password.');
    }).catch(function(error) {
      //need to alert user to bad feedback error message
      var errorCode = error.code;
      var errorMessage = error.message;
      //console.log(this._email + ':' + this._password);
      alert(errorMessage);
      console.log(errorMessage);
    });
  }
}
const register_forgot = () => customElements.define(forgot, KoiForgot);
window.WebComponents ? window.WebComponents.waitFor(register_forgot) : register_forgot();
