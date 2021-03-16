//function for signing in
function signIn(){
      // Sign into Firebase using popup auth & Google as the identity provider.
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(()=>{
        console.log(!!firebase.auth().currentUser);
      });
      
}