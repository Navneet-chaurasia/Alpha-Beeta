
//function for signing in
function signIn(){
      // Sign into Firebase using popup auth & Google as the identity provider.
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=> {
        firebase.auth().signInWithPopup(provider).then(()=>{
          console.log(firebase.auth().currentUser.displayName);
        });
      }) 
      
}

function test(){
  console.log(firebase.auth().currentUser.displayName);
}
function signOut(){
  console.log("signing out")
   // Sign out of Firebase.
   firebase.auth().signOut();
}


  //this method will be responsible for resposiveness of menu
 function showResponsiveNavbar(){

    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

    console.log("fioejfowo")
  }