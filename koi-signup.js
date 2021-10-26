//DEFINE CONSTANTS HERE
const signup = 'koi-signup';
const signup_template = document.createElement('template');
signup_template.innerHTML = `
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
		.signupContainer{
			padding: 20px;
      width: 475px;
		}
    .lds-hourglass {
      display: inline-block;
      position: relative;
      width: 120px;
      padding-top:25px;
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
      flex-wrap: wrap;
    }
    details:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
    summary:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
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
			.footerLeft{
        justify-content:center;
				margin: 0;
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
				.koinputTxt{
					max-width:300px;
				}
        .loginput{
					width:100%;
				}
				.signupContainer{
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
	<h1>Sign Up</h1>
  <div class="signupContainer">
	  <p>Please enter your email and a password.</p>
    <p>If you already have an account, please sign in using the form at the top of the page.</p>
  </div>
	<div class="signupContainer">
		<koi-text placeholder="" inputlabel="Email" id="email" onkeyup="this.getRootNode().host.updateEmail(this.getAttribute('value'))"></koi-text>
		<koi-text placeholder="" inputlabel="Password (Must be at least 6 characters)" id="password" onkeyup="this.getRootNode().host.updatePassword(this.getAttribute('value'))"></koi-text>
		<!-- <koi-text placeholder="" inputlabel="Confirm Password" id="confirm_password" onkeyup="this.getRootNode().host.updatePasswordConfirm(this.getAttribute('value'))"></koi-text> -->
	</div>
	<p>Please enter your FAA Certificate number.</p>
	<div class="signupContainer">
	<koi-text placeholder="" inputlabel="Last name" id="lname" onkeyup="this.getRootNode().host.updateLastName(this.getAttribute('value'))" value=""></koi-text>
	<koi-text placeholder="" inputlabel="FAA Cert #" id="faa" onkeyup="this.getRootNode().host.updateFAA(this.getAttribute('value'))" value=""></koi-text>
  <details style="border-radius: 5px;background-color: #003e7e;border: solid white thin;margin-top:10px;"><summary style="font-size:25px;margin-bottom:5px;padding-left:10px;">Please note, we do not accept Social Security Numbers for your FAA Cert #</summary> <div style="padding-left:10px;padding-bottom:10px;">If your FAA number is your SSN, please reach out to the FAA to have your Cert # re-issued before visiting myPilotPortal. Please don't hesitate to call our support hotline, (775) 400-1123 if you have any questions or concerns regarding your FAA Cert #. This form automatically submits after you enter 7 digits, and will only submit once before you must refresh the page to enter your data again. If you have multiple failed attempts, please reach out to the support hotline so we can assist you in signing up for your account.</div></details>
	<div id="faaScrape" class="faaScrape"></div>
	<div id="signupDiv"><button id="signUpButton" class="signUpButton" onclick="this.getRootNode().host.signUp('pilot')" disabled>Submit</button></div>
</main>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(signup_template, signup);

//DEFINE HTML ELEMENT CLASSES HERE

class KoiSignup extends KoiComponent {
  constructor() {
    super();
  }
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
  // get passwordConfirm() {
  //   return this._passwordConfirm;
  // }
  // set passwordConfirm(e) {
  //   this._passwordConfirm = e;
  // }
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
  // updatePasswordConfirm(pass) {
  //   this._passwordConfirm = pass;
  //   if(this._pass.localeCompare(this._passwordConfirm)){
  //     //passwords match
  //   }else{
  //     //passwords do not match
  //   }
  // }
  updateRequestSent(rs) {
    this._requestSent = rs;
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
      this.shadowRoot.appendChild(signup_template.content.cloneNode(true));
      this.shadowScrape = this.shadowRoot.getElementById('faaScrape');
      this.shadowSubmitButton = this.shadowRoot.getElementById('signUpButton');
      this.shadowSubmitDiv = this.shadowRoot.getElementById('signupDiv');
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
      this.shadowScrape.style.flexWrap = 'nowrap';
      this.shadowScrape.innerHTML = '<div class="lds-hourglass"></div><div><p>Loading your FAA data now...</p><p>If this data does not update within 60 seconds, refresh to try again.</p><p>Make sure you have a good wifi connection</p></div>';
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
      this.shadowScrape.style.flexWrap = 'nowrap';
      this.shadowScrape.innerHTML = '<div class="lds-hourglass"></div><p>Loading your FAA data now...</p><p>If this data does not update within 60 seconds, refresh to try again.</p><p>Make sure you have a good wifi connection</p>';
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
    let reqURL = 'https://us-east4-koifrog-mypilotportal.cloudfunctions.net/getPilotInfo?lname=' + lname + '&faa=' + faa;
    let result = await this.getData(reqURL);
    if(this.faaRespStatus === 200){
      let mpp = JSON.parse(localStorage.getItem('mpp'));
      if(mpp){
        mpp.user = {"data":{"name_last": lname, "confirmation_faa":faa}};
        mpp.pilot = {"faa":result}
      }else{
        localStorage.setItem("mpp", JSON.stringify({"user": {"data":{"name_last": lname, "confirmation_faa":faa}}, "pilot":{"faa":result}}));
      }
    }else{
      console.log('bad scrape');
      localStorage.setItem("mpp", JSON.stringify({"user": {"data":{"name_last": lname, "confirmation_faa":faa}}, "pilot":{"faa":"Could not contact FAA Airmen Inquiry Service. Please refresh again in a few seconds."}}));
    }
    console.log('scraped');
    //update views
    this.shadowScrape.style.flexWrap = 'wrap';
    this.shadowScrape.innerHTML = result.error?result.errorMessage:'<div style="display: flex;flex-direction:flex-column;flex-wrap:wrap;"><span>Name: '+(result.fullName?result.fullName:'Data not found')+'</span><span>Address: '+(result.addressInfo?result.addressInfo:'Data not found')+'</span></div><span>If this information is incorrect or your data was not found please try again by refreshing your browser. Otherwise, please click the Submit button to get started!</span></div>';
    this.shadowSubmitButton.disabled = result.error?true:false;
    return result;
  }
  async createRemoteUserData(userId, role){
    console.log('Creating remote user: '+userId);
    let mpp = JSON.parse(localStorage.getItem('mpp'));
    console.log('Local mpp:');
    let userData = {
      "confirmation_faa" : this._faa,
      "confirmation_signature" : "",
      "contact_phone" : "",
      "contact_phone_alt" : "",
      "name_last" : this._lname,
      "contact_email" : this.email
    }
    mpp.user.data = userData;
    mpp.role = role;
    console.log(JSON.stringify(mpp));
    console.log('Creating remote data from local user:');
    try{
      let update = firebase.database().ref(userId + '/').set(mpp, function(error) {
        if (error) {
          // The write failed...
          console.log('Call to firebase set function failed');
          return false;
        } else {
          console.log('Call to firebase set function succeeded');
          // Data saved successfully!
          return true;
        }
      });
    }catch(e){
      console.log('Remote write for user data failed.');
      console.log(e);
    }
    console.log(userId);
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
const register_signup = () => customElements.define(signup, KoiSignup);
window.WebComponents ? window.WebComponents.waitFor(register_signup) : register_signup();
