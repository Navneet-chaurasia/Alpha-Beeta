
//documenation can be found in wiki page 
//consult repo/wiki

var shadow;
 //this method is for reponsiveness of navbar
 function myFunction(){
  
 var x = shadow.getElementById('myTopnav');
 if (x.className === "topnav") {
   x.className += " responsive";
 } else {
   x.className = "topnav";
 }

    
    
}



class NavBar extends HTMLElement {

    constructor() {
        super();
      }
       

      //shadow root for navbar element

      connectedCallback() {
   
        const headerTemplate = document.createElement('template');
        var title;
        if(this.hasAttribute('title')) {
          title = this.getAttribute('title');
        } else {
          title = 'WonerGames';
        }


        headerTemplate.innerHTML = `
       
          <link rel="stylesheet" href="../global_components/NavBar/navbar.css">
          

                  
            <div class="topnav" id="myTopnav">
            <a href="#home" class="active" style="font-weight:bold">`+title+`</a>
            <div id="menu-options">
            <a href="#">Leaderboard</a>
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
            <a href="/profile/profile.html">Profile</a>
            </div>
            <a href="javascript:void(0);" style="font-size:20px;" class="icon" onclick='myFunction()'>  &#9776;</a>
            </div>

            

        `;


      shadow = this.attachShadow({ mode: 'open' });
      
    shadow.appendChild(headerTemplate.content);

    
      }
    
      
     


}

customElements.define('nav-bar',NavBar);