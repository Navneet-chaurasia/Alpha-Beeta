import { AuthStatus } from "/global_components/authStatus/authStatus.js";

//documenation can be found in wiki page 
//consult repo/wiki



export class NavBar extends HTMLElement {

    constructor() {
        super();
       
      }
       

    
      //shadow root for navbar element

      connectedCallback() {
   
       
        var title;
        if(this.hasAttribute('title')) {
          title = this.getAttribute('title');
        } else {
          title = 'WonerGames';
        }


       this.innerHTML = `
       
          <link rel="stylesheet" href="../global_components/NavBar/navbar.css">
                 
            <div class="topnav" id="myTopnav">
            <a href="../" class="active" style="font-weight:bold">`+title+`</a>
            <div id="menu-options">
            <a href="#" >Leaderboard</a>
            <a href="#">Top-Games</a>
            <div class="dropdown">
              <button class="dropbtn">Settings
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
          
            <auth-status></auth-status>
            </div>
            <a href="javascript:void(0);" style="font-size:20px;" class="icon" onclick="showResponsiveNavbar()">  &#9776;</a>
            </div>

            

        `;

    
      }
    
      
     


}

customElements.define('nav-bar',NavBar);