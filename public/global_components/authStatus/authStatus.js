//This component checks the auth states of current user and show a Paragraph accordingly
//for example if user is logged in then it will return name of user
//other wise "login" text

import { Auth } from "/modules/database/firebase_db/db.js";



export class AuthStatus extends HTMLElement{
    
    constructor(){

        Auth.isLoggedin();
        super();
    }

    connectedCallback(){
      
     
       this.innerHTML = `<a href="#">Login</a>`;

        }
}


customElements.define('auth-status',AuthStatus);
