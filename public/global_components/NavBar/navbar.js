/*
This is a prefered method of creating components
1. make a class (Name of component)
2.class must declare all method static
3. class must have a method called "render()"
4. import "loadFile" function
5. provide correct path of component.html file (path should be correct)
6. write style sheet inside <style></style> tags in the same html file

*/


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
       
          <link rel="stylesheet" href="global_components/NavBar/navbar.css">
          

                  
            <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div class="dropdown">
              <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
            <a href="#about">About</a>
            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick='myFunction()'>  &#9776;</a>
            </div>

            

        `;


      shadow = this.attachShadow({ mode: 'open' });
      
    shadow.appendChild(headerTemplate.content);

    
      }
    
      
     


}

customElements.define('nav-bar',NavBar);