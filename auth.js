class FbAuth {
  // Your web app's Firebase configuration
  static firebaseConfig = {
    apiKey: "AIzaSyBYg3ZtGEXHwjshuOdaGqZLUKD2YgYaNTE",
    authDomain: "commishme-17b16.firebaseapp.com",
    projectId: "commishme-17b16",
    storageBucket: "commishme-17b16.appspot.com",
    messagingSenderId: "1083040975796",
    appId: "1:1083040975796:web:b0dea704276523af9240e1",
    measurementId: "G-K6BVCV2MZD"
  };
  constructor(firebase, user){
    //main
    let fbApp = this.getAuthState();
    //set event function for AuthStateChanged
    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        //make sure user is in the right place based on whether they are logged in or not
        //TODO / BUGFIX
        //THIS IS A BAND-AID SOLUTION, EITHER:
        // A) DEFAULT PAGES TO A LOADING SPINNER THEN KEEP THIS LOGIC
        // B) SET PERSISTENCE TO LOCAL, GRAB MPP LOCAL BEFORE THIS IS CALLED THEN ROUTE TO PILOT VIEW DIRECTLY? TRIED THIS AND WAS HARD
        //await setUserState(true, user);
        this.routeUser(true);
        return true;
      } else {
        //user auth has expired, must clear local data
        localStorage.clear();
        // No user is signed in, render landing page
        //technically the render part of this should be seperate from the auth part
        //await setUserState(false, null);
        //make sure user is in the right place based on whether they are logged in or not
        this.routeUser(false);
        return false;
      }
    });
    //set the provider
    var provider = new firebase.auth.GoogleAuthProvider();
  }
  //initialize app with configuration
  async getAuthState() {
    let authOK = await firebase.initializeApp(firebaseConfig);
    return authOK;
  }
  async routeUser(isLoggedIn) {
    let mpp;
    if (localStorage.getItem('mpp')) {
      mpp = JSON.parse(localStorage.getItem('mpp'));
    }
    if (isLoggedIn && mpp) {
      if (!mpp.role) {
        mpp.role = (Object.keys(mpp).includes('pilot') ? 'pilot' : 'partner');
        //console.log(mpp.role);
        localStorage.setItem('mpp', JSON.stringify(mpp));
      }
      if (location.pathname != "/view/dashboard/" + mpp.role + "/") {
        location = "/view/dashboard/" + mpp.role + "/";
      }
    } else {
      //if the location they are trying to access is not public space
      if (location.pathname != "/" &&
        location.pathname != "/view/visitor/sign-in.html" &&
        location.pathname != "/view/visitor/sign-up/" &&
        location.pathname != "/view/support/contact-us/" &&
        location.pathname != "/view/support/forgot-password/") {
        //alert('You are not logged in - please log in to view this page.');
        location.href = "/";
        console.log(location);
      }
    }
  }
}

// //auth state change logic
// //TODO: Doesn't look like I need the user param here?
// async function setUserState(isLoggedIn, user) {
//   //if user is logged in after they load page
//   if (isLoggedIn) {
//     console.log('LOGGED IN');
//     var userId = firebase.auth().currentUser.uid;
//     localStorage.setItem('fbUD', JSON.stringify(user));
//     //based on our user's role we should do things here like:
//     //give them permissions to particular dashboards in the site
//     //redirect them to dashboard
//     let mppData;
//     if (localStorage.getItem('mpp')) {
//       let datobj = await localStorage.getItem('mpp');
//       mppData = JSON.parse(datobj);
//     } else {
//       mppData = await fetchRemoteData(userId);
//     }
//     return true;
//   } else {
//     console.log('NOT LOGGED IN');
//     localStorage.clear();
//     return false;
//   }
// }
//get data from remote source and set to local data
// async function fetchRemoteData(userId) {
//   firebase.database().ref(userId).once('value').then(async function(snapshot) {
//     let mppData = await snapshot.val();
//     localStorage.setItem('mpp', JSON.stringify(mppData));
//     return true;
//   });
//   return false;
// }
//set user data and then render page
