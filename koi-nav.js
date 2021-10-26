//DEFINE CONSTANTS HERE
const nav = 'koi-nav';
//DEFINE HTML ELEMENT CLASSES HERE
class KoiNav extends KoiComponent {
  //what props change in a nav that we need to monitor?
  constructor() {
    super();
    this.tag = 'koi-nav';
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <style>
    		:host{
          --light: #0076c0;
          --dark: #0f3062;
    		}
        .knav {
          max-width: 700px;
    			width: 100%;
    			display: flex;
    			width: 100%;
    			max-width: 900px;
    			justify-content: flex-end;
    			align-items: center;
    			height: 100%;
          flex-wrap:wrap;
    		}
    		.knav ul{
    			display: flex;
    			flex-direction: row;
    			justify-content: space-around;
    			list-style: none;
          margin-top:0;
          margin-bottom:0;
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
    			border-radius: 6px;
    			background-color: #fff;
          border: solid 2px #000;
          border-color: var(--light);
          font-size: 20pt;
    			padding: 10px;
    			color:var(--light);
          font-weight:600;
          transition: all linear .25s;
    		}
        .signOut:hover{
    			background-color: var(--dark);
          border-color: var(--dark);
    			color:#fff;
    		}
    		.loginContainer{
    			display: flex;
    			flex-direction: row;
    			justify-content: flex-start;
    			align-items: start;
          padding-top: 40px;
          padding-bottom: 40px;
    			min-width: 300px;
          height: 50px;
          width:100%;
    		}
    		.loginput{
    			display: flex;
    			flex-direction: column;
    			width: 100%;
          padding-right:10px;
          padding-left:10px;
    		}
    		.loginput input{
    			line-height: 20px;
    			font-size: 19px;
    			padding: 10px;
          text-decoration: none;
          font-size: 13pt;

          font-weight: 600;
          padding-left: 10px;
    		}
        .loginButton{
          text-decoration: none;
          font-size: 13pt;
          text-transform: uppercase;
          font-weight: 600;
          padding-left: 10px;
        }
    		.knav button{
      	  font-size: 16px;
    	    padding: 10px;
          width: 200px;
          height:45px;
          background-color:var(--light);
          color: white;
          border: none;
          border-radius:1px;
    		}
        .fp{
          text-decoration: none;
          font-size: 13pt;
          color: var(--light);
          text-transform: uppercase;
          font-weight: 600;
          padding-left: 10px;
        }
        @media only screen and (max-width: 725px) {
          .loginContainer{
            flex-wrap: wrap;
            height: auto;
          }
          .loginButton{
            margin-left: 10px;
            margin-top: 10px;
          }
        }
    		@media only screen and (max-width: 455px) {
    			.knav ul{
    				flex-direction: row;
    				list-style: none;
    				width: 100%;
    			}
    			.knav ul, .knav ul li a img{
    				max-width: 100%;
    			}
    			.navLabel{
    				display: none;
    			}
    			span.link{
    				display: none;
    			}
    			.knav ul{
    				height: 100%;
    			}
    			.knav ul li{
    				padding-bottom: 20px;
    			}
    		}
      </style>
    	<nav id="knav" class="knav" name="knav">
    		<ul class="knavItems" id="knavItems" name="knavItems">
          <li>
            <p class="signOut" onclick="this.getRootNode().host.logout()">SIGN OUT</p>
          </li>
        </ul>
    	</nav>
      `;
  }
  selectElements(){
    this.shadowNav = this.shadowRoot.getElementById('knavItems');
    let mpp = JSON.parse(localStorage.getItem('mpp'));
    if (mpp) {
      console.log(mpp.role);
      switch (mpp.role) {
        case 'Admin':
          this.shadowNav.innerHTML = `<li><p class="signOut" onclick="this.getRootNode().host.logout()">SIGN OUT</p></li>`;
          break;
        case 'Agency':
          this.shadowNav.innerHTML = `<li><p class="signOut" onclick="this.getRootNode().host.logout()">SIGN OUT</p></li>`;
          break;
        case 'Undewriter':
          this.shadowNav.innerHTML = `<li><p class="signOut" onclick="this.getRootNode().host.logout()">SIGN OUT</p></li>`;
          break;
        case 'Pilot':
          this.shadowNav.innerHTML = `<li><p class="signOut" onclick="this.getRootNode().host.logout()">SIGN OUT</p></li>`;
          break;
      }
    } else {
      this.shadowNav.innerHTML = `
        <div class="loginContainer">
          <div class="loginput">
            <input type="text" id="email" name="email" placeholder="EMAIL" onkeyup="this.getRootNode().host.updateEmail(this.value)" onkeydown="this.getRootNode().host.checkForEnter(event)"/>
          </div>
          <div class="loginput">
            <input type="password" id="password" name="password" placeholder="PASSWORD"onkeyup="this.getRootNode().host.updatePass(this.value)" onkeydown="this.getRootNode().host.checkForEnter(event)"/>
            <a href="/view/support/forgot-password/" class="fp">Forgot password?</a>
          </div>
          <button id="loginButton" onclick="this.getRootNode().host.signIn()" class="loginButton">Sign In</button>
        </div>
      `;
    }
  }
  //fields for login
  updateEmail(email) {
    this._email = email;
  }
  updatePass(pass) {
    this._pass = pass;
  }
  //used specifically on sign-in fields
  checkForEnter(event) {
    if (event.keyCode == 13) {
      //sign in
      this.signIn();
    }
  }
  logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      localStorage.clear();
    }).catch(function(error) {
      // An error happened.
    });
  }
  //use firebase auth to sign in
  signIn() {
    //clear nonsense if any exists
    localStorage.clear();
    let c = this;
    //we want to maintain logins for ease of access so session is local
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        // New sign-in will be persisted with device persistence.
        return firebase.auth().signInWithEmailAndPassword(c._email, c._pass).then(function(){
          let user;
          try {
            user = firebase.auth().currentUser;
          } catch (e) {
           //console.log(e);
          }
          // Existing and future Auth states are now persisted in the local device
          // set user state now that they are logged in
          var userId = user.uid;
          localStorage.setItem('fbUD', JSON.stringify(user));
          //based on our user's role we should do things here like:
          //give them permissions to particular views in the site
          //redirect them to dashboard
          let mppData;
          if (localStorage.getItem('mpp')) {
            let datobj = localStorage.getItem('mpp');
            mppData = JSON.parse(datobj);
          } else {
            mppData = c.fetchRemoteAuthData(userId);
          }
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          //console.log(this._email + ':' + this._password);
          alert(errorMessage);
         //console.log(errorMessage);
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       //console.log(errorMessage);
      });
  }
  //get data from remote source and set to local data
  fetchRemoteAuthData(userId) {
    firebase.database().ref(userId).once('value').then(async function(snapshot) {
      let mppData = await snapshot.val();
      if(mppData){
        localStorage.setItem('mpp', JSON.stringify(mppData));
        routeUser(true);
      }
      return true;
    });
    return false;
  }
}
const register_nav = () => customElements.define(nav, KoiNav);
window.WebComponents ? window.WebComponents.waitFor(register_nav) : register_nav();
