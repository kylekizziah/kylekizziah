//DEFINE CONSTANTS HERE
const contact = 'koi-contact';
const contact_template = document.createElement('template');
contact_template.innerHTML = `
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
		.signUpButton{
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
		}
    .signUpButton:disabled{
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
		.footerContact{
			margin-right:40px;
		}
		.footerContact{
			padding: 10px;
			border-radius: 5px;
			background-color: var(--dark);
		}
		.contactContainer{
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
			.footerContact{
				margin: 0;
				justify-content: center;
			}
			h3{
				max-width: 90%;
				margin: 0;
			}
		}
		@media only screen and (max-width: 620px) {
				.koinputTxt{
					max-width:300px;
				}
        .loginput{
					width:100%;
				}
				.contactContainer{
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
	<h1>Contact Us</h1>
  <div>
    <h2>Support</h2>
    <p>For immediate support, please email support@mypilotportal.com or fill out the contact form. We're dedicated to making sure your experience is as user-friendly and expediant as possible.</p>
  </div>
	<div class="contactContainer">
		<koi-text placeholder="" inputlabel="Email" id="email" onkeyup="this.getRootNode().host.updateEmail(this.getAttribute('value'))"></koi-text>
		<koi-text placeholder="" inputlabel="Name" id="name" onkeyup="this.getRootNode().host.updateName(this.getAttribute('value'))"></koi-text>
		<koi-text placeholder="" inputlabel="Phone" id="phone" onkeyup="this.getRootNode().host.updatePhone(this.getAttribute('value'))"></koi-text>
    <textarea></textarea>
	</div>
	<div id="contactDiv"><button id="signUpButton" class="signUpButton" onclick="this.getRootNode().host.signUp('pilot')" disabled>Submit</button></div>
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

window.ShadyCSS && window.ShadyCSS.prepareTemplate(contact_template, contact);

//DEFINE HTML ELEMENT CLASSES HERE

class KoiContact extends HTMLElement {
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
    return ['email', 'password', 'confirm_password', 'faa', 'lname', 'requestSent'];
  }

  get email() {
    return this._email;
  }
  set email(e) {
    this._email = e;
  }

  get password() {
    return this._pass;
  }
  set password(e) {
    this._pass = e;
  }

  get passwordConfirm() {
    return this._passwordConfirm;
  }
  set passwordConfirm(e) {
    this._passwordConfirm = e;
  }

  get requestSent() {
    return this._requestSent;
  }
  set requestSent(e) {
    this._requestSent = e;
  }

  get faaRespStatus() {
    return this._faaReqStatus;
  }
  set faaRespStatus(e) {
    this._faaReqStatus = e;
  }

  get faa() {
    return this._faa;
  }
  set faa(e) {
    this._faa = e;
  }

  get lname() {
    return this._lname;
  }
  set lname(e) {
    this._lname = e;
  }

  updateLname(lname) {
    this._lname = lname;
  }
  updateFaa(faa) {
    this._faa = faa;
  }
  updateEmail(email) {
    this._email = email;
  }
  updatePassword(pass) {
    this._pass = pass;
  }
  updatePasswordConfirm(pass) {
    this._passwordConfirm = pass;
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
      this.shadowRoot.appendChild(contact_template.content.cloneNode(true));
      this.shadowScrape = this.shadowRoot.getElementById('faaScrape');
      this.shadowSubmitButton = this.shadowRoot.getElementById('signUpButton');
      this.shadowSubmitDiv = this.shadowRoot.getElementById('contactDiv');
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

  async updateFAA(faa) {
    if(faa.length === 7 && this._faa != faa && this._lname && !this._requestSent){
      this._faa = faa;
      console.log(faa);
      console.log('has a request already been sent once?'+this._requestSent);
      this._requestSent = true;
      console.log('has a request already been sent once?'+this._requestSent);
      this.shadowScrape.innerHTML = '<div><p>Loading your FAA data now...</p><p>If this data does not update within 60 seconds, refresh to try again.</p><p>Make sure you have a good wifi connection</p></div><div class="lds-hourglass"></div>';
      let result = await this.scrapeFaa(this._lname, this._faa);
      if(localStorage.getItem('faaData')){
        //why are you signing up for an account?
      }else{
        localStorage.setItem('faaData', JSON.stringify(result));
      }
    }
  }
  async updateLastName(lname) {
    this._lname = lname;
    if(this._faa && this._faa.length === 7 && this._lname && !this._requestSent){
      console.log(lname);
      this._requestSent = true;
      this.shadowScrape.innerHTML = '<p>Loading your FAA data now...</p><p>If this data does not update within 60 seconds, refresh to try again.</p><p>Make sure you have a good wifi connection</p><div class="lds-hourglass"></div>';
      let result = await this.scrapeFaa(this._lname, this._faa);
    }
  }

  signIn() {
    console.log(this.email + ':' + this.pass);
    firebase.auth().signInWithEmailAndPassword(this.email, this.pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(this.email + ':' + this.password);
      console.log(errorMessage);
    });
  }

  async signUp(role) {
    let feedback = this.shadowSubmitButton;
    this.shadowSubmitButton.innerHTML = '<div class="lds-hourglass"></div>';
    this.shadowSubmitButton.childNodes[0].style.animation = "none";
    this.shadowSubmitButton.childNodes[0].style.animation = "lds-hourglass 1.2s infinite";
    console.log(this.email + ':' + this.password);
    if(this.email && this.password){
      await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        feedback.innerHTML = 'Submit';
        return false;
      });
    }else{
      alert('Please enter an email and password');
      feedback.innerHTML = 'Submit';
      return false;
    }
    let result = await this.createRemoteUserData(firebase.auth().currentUser.uid, role);
  }
  async scrapeFaa(lname, faa) {
    console.log(lname, faa);
    let reqURL = 'https://us-central1-koifrog-mypilotportal.cloudfunctions.net/getPilotInfo?lname=' + lname + '&faa=' + faa;
    let result = await this.getData(reqURL);
    this.shadowScrape.innerHTML = '<div style="display: flex;flex-direction:flex-column;flex-wrap:wrap;"><span>Name: '+(result.fullName?result.fullName:'Data not found')+'</span><span>Address: '+(result.addressInfo?result.addressInfo:'Data not found')+'</span></div><span>If this information is incorrect or your data was not found please try again by refreshing your browser. Otherwise, please click the Submit button to get started!</span></div>';
    if(this.faaRespStatus === 200){
      console.log('scraped');
      this.shadowScrape.innerHTML = '<div style="display: flex;flex-direction:flex-column;flex-wrap:wrap;"><span>Name: '+(result.fullName?result.fullName:'Data not found')+'</span><span>Address: '+(result.addressInfo?result.addressInfo:'Data not found')+'</span><span>If this information is incorrect or your data was not found please try again by refreshing your browser. Otherwise, please click the Submit button to get started!</span></div>';
      let mpp = JSON.parse(localStorage.getItem('mpp'));
      if(mpp){
        mpp.user = {"data":{"name_last": lname, "confirmation_faa":faa}};
        mpp.pilot = {"faa":result}
      }else{
        localStorage.setItem("mpp", JSON.stringify({"user": {"data":{"name_last": lname, "confirmation_faa":faa}}, "pilot":{"faa":result}}));
      }
      this.shadowSubmitButton.disabled = false;
    }else{
      console.log('bad scrape');
      localStorage.setItem("mpp", JSON.stringify({"user": {"data":{"name_last": lname, "confirmation_faa":faa}}, "pilot":{"faa":"Could not contact FAA Airmen Inquiry Service. Please refresh again in a few seconds."}}));
    }
    return result;
  }
  async createRemoteUserData(userId, role){
    console.log('Creating remote user: '+userId);
    let userInfoPath = userId;
    let mpp = JSON.parse(localStorage.getItem('mpp'));
    console.log('Local mpp:');
    let userData = {
      "confirmation_faa" : this._faa,
      "confirmation_signature" : "",
      "contact_phone" : "",
      "contact_phone_alt" : "",
      "name_last" : this._lname,
      "contact_email" : this._email
    }
    mpp.user.data = userData;
    mpp.role = role;
    console.log(mpp);
    console.log('Creating remote data from local user:');
    try{
        let uD = await firebase.database().ref(userInfoPath+'/').set(mpp);
        uD.on('value', function(snapshot) {
          console.log('MPP USER DATA AFTER VALUE SET IN REMOTE WRITE');
          console.log(snapshot);
        });
    }catch(e){
      console.log('Remote write for user data failed.');
      console.log(e);
    }
    console.log(userInfoPath);
    console.log('Setting local vars for mpp:');
    localStorage.setItem('mpp', JSON.stringify(mpp));
    console.log('Local mpp:');
    console.log(localStorage.getItem('mpp'));
    console.log('Setting local vars for fbUD:');
    localStorage.setItem('fbUD', JSON.stringify(firebase.auth().currentUser));
    console.log('Local fbUD:');
    console.log(localStorage.getItem('fbUD'));
    return true;
  }

  async getData(url) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    console.log('response:');
    this.faaRespStatus = response.status;
    let r = await response.json();
    return r; // parses JSON response into native JavaScript objects
  }
}
const register_contact = () => customElements.define(contact, KoiContact);
window.WebComponents ? window.WebComponents.waitFor(register_contact) : register_contact();
