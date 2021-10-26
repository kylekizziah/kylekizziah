//DEFINE CONSTANTS HERE
const landing = 'koi-landing';
const landing_template = document.createElement('template');
landing_template.innerHTML = `
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
			justify-content: flex-start;
			align-items: center;
      min-height: 70vh;
		}
		h2{
			color: var(--light);
		}
		h3{
			color: var(--medium);
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
      margin:30px;
      align-items: center;
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
		.signOut{
			border-radius: 5px;
			background-color: var(--light);
			padding: 10px;
			color:var(--primary);
		}
		.signupButton{
      color: #fff;
      background-color: var(--light);
      padding: 5px;
      padding-left: 20px;
      padding-right: 20px;
      line-height: 29pt;
      font-size: 20pt;
      font-weight: 600;
      border: none;
      width: 300px;
      height: auto;
      margin-top: 20px;
      margin-bottom: 20px;
		}
		.loginContainer{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      padding: 15px;
      width: 100%;
      max-width: 460px;
      min-height: 280px;
      background-color: rgba(0,62,126, .9);
		}
    .container{
      flex-direction: column;
      flex-wrap: wrap;
      display: flex;
      padding-bottom:30px;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .container.dark{
      background-color:var(--dark);
		}
    .container.light{
      background-color:var(--medium);
		}
		.loginput{
			display: flex;
			flex-direction: column;
      margin-bottom:20px;
		}
    .loginButton{
      background-color: var(--light);
      color: var(--primary);
      min-width: 200px;
      line-height: 29pt;
      font-size: 20pt;
    }
		.loginput input{
			line-height: 20px;
			font-size: 25px;
			padding: 10px;
      border: none;
		}
		.knav button{
			line-height: 20px;
			font-size: 19px;
			min-width: 125px;
			padding: 10px;
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
		.banner{
			width: 100%;
			height: 700px;
			background: url('/images/mpp_parallax_banner.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
		}
		.bannerText{
			position: absolute;
			right: 17%;
			top: 140px;
			background-color: rgba(42,42,42,.8);
			width: 485px;
			padding: 10px;
			color: #fff;
			font-size: 30px;
			padding:40px;
		}
		.audience{
			font-size: 35px;
			font-weight: 900;
		}
		.lightColorBlock{
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: 260px;
			padding: 10px;
			background-color: var(--light);
		}
		.elevator-benefits{
			display: flex;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			max-width: 1920px;
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
		}
		.elevator-benefits div{
			min-height: 330px;
			max-width: 400px;
			display: flex;
			justify-content: center;
  	  align-content: flex-start;
	    align-items: center;
			flex-direction: column;
		}
		.elevator-what{
			max-width:900px;
			font-size: 27px;
			padding: 20px;
		}
		.elevator-who{
			display: flex;
			justify-content: center;
			font-size: 27px;
			padding: 20px;
			width: 100%;
			min-height: 400px;
		}
		.elevator-who .marvel{
			background-image: url(/images/codename-marvel.png);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: right;
			width:50%;
			height: 450px;
		}
		.elevator-who .who-copy h2{
			color:var(--primary);
			margin-bottom: 0px;
		}
		.elevator-who .who-copy p{
			margin-top: 10px;
			max-width: 600px;
			color: var(--primary);
		}
		.elevator-who .who-copy{
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: var(--light);
			padding-left: 20px;
			padding-right: 20px;
			width:50%;
		}
		.mobileLandingLogo{
			display: none;
			max-width:100%;
		}
		.benefits-logo{
			max-width: 100% !important;
			width: 300px;
		}
		.benefits-logo img{
	    max-height: 300px;
		}
		.benefits-copy{
			font-size: 1.5em;
		}
		footer{
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: var(--light);
    color: var(--primary);
    font-weight: 600;
    font-size: 20px;
    padding: 25px;
    padding-left: 40px;
    padding-right: 40px;
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
		.footerSignup{
			margin-right:40px;
		}
		.footerSignup{
			padding: 10px;
			border-radius: 5px;
			background-color: var(--medium);
		}
		@media only screen and (max-width: 1675px) {
			.banner{
				height: 600px;
			}
			.bannerText{
				top: 120px;
				background-color: rgba(42,42,42,.8);
				width: 285px;
				padding: 10px;
				font-size: 24px;
				padding:25px;
			}
			.audience{
				font-size: 30px;
				font-weight: 600;
			}
		}
		@media only screen and (max-width: 1475px) {
			.audience{
				font-size: 27px;
			}
			.banner{
				height: 485px;
			}
			.bannerText{
				top: 90px;
				padding: 10px;
			}
			.elevator-benefits{
				max-width: 95%;
			}
			.benefits-logo{
				width: 280px;
			}
			.elevator-benefits div{
				width: 100%;
				max-width: 300px;
			}
			.benefits-copy{
				max-width: 600px;
			}
		}
		@media only screen and (max-width: 1200px) {
			.banner{
				height: 385px;
			}
			.audience{
				font-size: 20px;
			}
    	.bannerText{
				top: 105px;
				background-color: rgba(42,42,42,.8);
				width: 260px;
				font-size: 18px;
			}
			.elevator-benefits div{
				max-width: 100%;
			}
			.benefits-signup{
				order: 3;
			}
			.lightColorBlock{
				max-width: 210px;
			}
		}
		@media only screen and (max-width: 960px) {
			h2{
				font-size: 30px;
			}
			.audience{
				font-size: 18px;
			}
			.bannerText{
				top: 73px;
				background-color: rgba(42,42,42,.8);
				width: 240px;
				font-size: 15px;
			}
			.banner{
				height: 285px;
			}
			.elevator-who .marvel{
				background-position: center;
			}
			.elevator-who .who-copy p{
				font-size: 24px;
			}
			.elevator-what{
				font-size: 24px;
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
    @media only screen and (max-width: 855px) {
      .footerLeft{
        width: 100%;
        justify-content: space-between;
      }
    }
		@media only screen and (max-width: 720px) {
			.landingHeader{
				justify-content: center;
			}
		}
		@media only screen and (max-width: 680px) {
			.elevator-what{
				padding-bottom: 0px;
				padding-top: 0px;
			}
			.elevator-who{
				flex-wrap: wrap;
				padding: 0px;
			}
			.elevator-who .who-copy{
				width:100%;
			}
			.elevator-who .marvel{
				width:100%;
				height: 300px;
			}
			.benefits-logo{
				width: 200px !important;
			}
			.benefits-copy{
				max-width: 90%;
			}
			.elevator-benefits div{
				min-height: 250px;
			}
			.footerLeft{
				margin: 0;
        justify-content:center;
			}
			.footerSignup{
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
		}
		@media only screen and (max-width: 400px) {
			.landingNav ul li{
				padding: 5px;
				font-size:12pt;
			}
		}
  </style>
	<main>
    <div class="banner">
    </div>
    <div class="container dark">
      <div style="max-width:900px;display:flex;justify-content:center;align-items:center;flex-direction:column;">
        <h2 style="color: #fff;
    font-weight: 900;
    margin: 10px;
    font-size: 25pt;
    letter-spacing: 1px;
    padding-top: 20px;">New to myPilotPortal?</h2>
        <button class="signupButton" onclick="location.href='/sign-up/'">SIGN UP</button>
        <p style="color: #fff;
    font-weight: 600;
    margin: 10px;
    max-width: 800px;
    font-size: 20pt;">myPilotPortal&trade; manages pilot history and underwriting information in a single secure site. No more long, confusing forms to fill out and fax. The online myPilotPortal&trade; forms are clear and easy to use. Access and update your pilot records anytime, anywhere through myPilotPortal</p>
      </div>
    </div>
    <div class="container light">
      <h2 style="color: #fff;font-weight: 900;margin: 10px;font-size: 25pt;">Need help?</h2>
      <p style="color: #fff;font-weight: 900;margin: 10px;font-size: 20pt;">Contact support at support@koifrog.com</p>
      <p style="color: #fff;
    font-weight: 600;
    margin: 10px;
    max-width: 800px;
    font-size: 20pt;">If you have any problems accessing your account, editing your information, or generating your PDF, you can contact us at support@koifrog.com. A myPilotPortal team member will respond to your email to ensure you get the support you need.</p>
    </div>
	</main>
	<footer>
		<div class="footerLeft">
			<div class="footerLogo">
				<img src="/images/footer_logo.png"/>
			</div>
			<div><p style="margin-top:0px;">&copy;2020 myPilotPortal</p><p><i>Carson City, Nevada</i></p><p>All rights reserved.</p></div>
		</div>
		<div style="display:flex;flex-direction:column;">
			<span style="padding-bottom:20px;">Powered By KoiFrog LLC</span>
      <span style="padding-bottom:20px;">(775) 400-1123</span>
		</div>
	</footer>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(landing_template, landing);

//DEFINE HTML ELEMENT CLASSES HERE

class KoiLanding extends HTMLElement {
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
    return ['email', 'password'];
  }

  get email() {
    return this._email;
  }
  set email(e) {
    this._email = e;
  }

  get pass() {
    return this._pass;
  }
  set pass(e) {
    this._pass = e;
  }

  constructor() {
    super();
  }

  async connectedCallback() {
    let user = await firebase.auth().currentUser;
    //this tells the browser to render the contents and not the wrapper for accessibility reasons
    this.setAttribute('role', 'presentation');
    // Initialize shady styles if needed
    this.updateShadyStyles();
    if (!this.shadowRoot) {
      // create shadow tree
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(landing_template.content.cloneNode(true));
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
  updateEmail(email) {
    this._email = email;
  }

  updatePass(pass) {
    this._pass = pass;

  }
  checkForEnter(event) {
    if (event.keyCode == 13) {
      this.signIn();
    }
  }
  signIn() {
    console.log(this._email + ':' + this._pass);
    firebase.auth().signInWithEmailAndPassword(this._email, this._pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      //console.log(this._email + ':' + this._password);
      alert(errorMessage);
      console.log(errorMessage);
    });
  }
}

const register_landing = () => customElements.define(landing, KoiLanding);
// Return a reference to the my-paragraph constructor
const landing_component = customElements.get(landing);
window.WebComponents ? window.WebComponents.waitFor(register_landing) : register_landing();
