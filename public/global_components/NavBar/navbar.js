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
       
          <link rel="stylesheet" href="global_components/NavBar/navbar.css">
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
       
    
          <div class="wrapper">
            <nav>
              <input type="checkbox" id="show-search">
              <input type="checkbox" id="show-menu">
              <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
              <div class="content">
              <div class="logo"><a href="#">WonderGames</a></div>
                <ul class="links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li>
                    <a href="#" class="desktop-link">Features</a>
                    <input type="checkbox" id="show-features">
                    <label for="show-features">Features</label>
                    <ul>
                      <li><a href="#">Drop Menu 1</a></li>
                      <li><a href="#">Drop Menu 2</a></li>
                      <li><a href="#">Drop Menu 3</a></li>
                      <li><a href="#">Drop Menu 4</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="desktop-link">Services</a>
                    <input type="checkbox" id="show-services">
                    <label for="show-services">Services</label>
                    <ul>
                      <li><a href="#">Drop Menu 1</a></li>
                      <li><a href="#">Drop Menu 2</a></li>
                      <li><a href="#">Drop Menu 3</a></li>
                      <li>
                        <a href="#" class="desktop-link">More Items</a>
                        <input type="checkbox" id="show-items">
                        <label for="show-items">More Items</label>
                        <ul>
                          <li><a href="#">Sub Menu 1</a></li>
                          <li><a href="#">Sub Menu 2</a></li>
                          <li><a href="#">Sub Menu 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Feedback</a></li>
                </ul>
              </div>
              <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
              <form action="#" class="search-box">
                <input type="text" placeholder="Type Something to Search..." required>
                <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
              </form>
            </nav>
          </div>
        
        `;





        //these two lines are important
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
       
      }
    
      
     

     
     
}

customElements.define('nav-bar',NavBar);