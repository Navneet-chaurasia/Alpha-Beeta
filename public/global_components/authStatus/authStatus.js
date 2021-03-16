//This component checks the auth states of current user and show a Paragraph accordingly
//for example if user is logged in then it will return name of user
//other wise "login" text

import { Auth } from "/modules/database/firebase_db/db.js";


export class AuthStatus extends HTMLElement{
    
    constructor(){
         super();
    }
     
    
    //signin method
    static  signIn(){
        Auth.signIn();
    }

    connectedCallback(){
      
        var text;
        if(!Auth.isLoggedIn().then((t)=>t)){
           
            text = "Login";
        }
        else{
           Auth.getUserData().then((d)=>{
            console.log(d);
            text = d.name;
            });
            
          
        }
       this.innerHTML = `
       <style>
       a:hover{
           cursor:pointer
       }
       </style>
       <a onclick="signIn()">`+text+`</a>`;

        }
}


customElements.define('auth-status',AuthStatus);
