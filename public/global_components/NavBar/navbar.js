/*
This is a prefered method of creating components
1. make a class (Name of component)
2.class must declare all method static
3. class must have a method called "render()"
4. import "loadFile" function
5. provide correct path of component.html file (path should be correct)
6. write style sheet inside <style></style> tags in the same html file

*/





class NavBar extends HTMLElement {

    constructor() {
        super();
      }
       
      connectedCallback() {
   
        const headerTemplate = document.createElement('template');
        var title;
        if(this.hasAttribute('title')) {
          title = this.getAttribute('title');
        } else {
          title = 'WonerGames';
        }


        headerTemplate.innerHTML = `
          <link href="global_components/NavBar/navbar.css" rel="stylesheet">
          <header>
            <nav>
              <ul>
              <li id="title">`+title+`</li>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </header>
        `;



        //these two lines are important
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
       
      }
    
      
     

     
}

customElements.define('nav-bar',NavBar);