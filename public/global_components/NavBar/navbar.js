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
            <p id="title">`+title+`</p>

            <input type="text" id="search_bar" placeholder="Search Games..">

              <ul id="vertical-menu">
              
                <li><a href="#">Trending Games</a></li>
                <li><a href="#">Leaderboard</a></li>
                <li><a href="#">Profile</a></li>
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