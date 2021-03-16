//This component checks the auth states of current user and show a Paragraph accordingly
//for example if user is logged in then it will return name of user
//other wise "login" text

import { Auth } from "/modules/database/firebase_db/db.js";


export class AuthStatus extends HTMLElement{
    
    constructor(){
         super();
       
       }
    

    connectedCallback(){
 
       firebase.auth().onAuthStateChanged(user => {

        if(user){

            var userData = Auth.getUserData();

           this.innerHTML = `<style>
           a:hover{
               cursor:pointer
           }
           img{
               border-radius:50px;
               margin-top:5px;
               width:40px;
           }
           #profileImage{
               padding:0px;
               margin:0px;
             
           }
           </style>
            <a href="/profile/profile.html">`+userData.name+`</a><a id="profileImage"><img src="`+userData.profileImage+`"></a>`;
        }else{
                this.innerHTML = `<style>
                a:hover{
                    cursor:pointer
                }
                </style>
                <a onclick="signIn()">`+"Login"+`</a>`;
        }
       })
            
         

        }
}


customElements.define('auth-status',AuthStatus);
