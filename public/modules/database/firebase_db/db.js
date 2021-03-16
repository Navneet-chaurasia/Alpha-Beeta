





  //Auth class with some static methods
  export class Auth{

    static isLoggedIn(){
      return !!firebase.auth().currentUser;
    }

   


//static signout method

static  signOut() {
 
}

//if user is signed in then send current user data
static getUserData(){
  
  var photoURL =  firebase.auth().currentUser.photoURL
  var name =  firebase.auth().currentUser.displayName;

  return {"profileImage":photoURL,
           "name":name};
}
  }