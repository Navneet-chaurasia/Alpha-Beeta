//properties of this Compoenet
//1. imageUrl => for gameCoverImage
//2. href => url of gamePage
//3. category => category of game
//4. name => Name of game

class GameCard extends HTMLElement{


    constructor(){
        super();

var imageUrl;
var href;
var category;
var name;

if(this.hasAttribute('imageUrl')){
    imageUrl  = this.getAttribute('imageUrl')
}else{
    imageUrl = 'assets/gameCoverImages/snakeGame.jpg'
}

if(this.hasAttribute('href')){
    href  = this.getAttribute('href')
}else{
    href = 'index.html'
}


if(this.hasAttribute('category')){
    category  = this.getAttribute('category')
}else{
    category = 'Time Pass'
}

if(this.hasAttribute('name')){
    name  = this.getAttribute('name')
}else{
    name = 'Wonder Games'
}
        //create a dummy element
        const cardTemplate = document.createElement('template');
    cardTemplate.innerHTML = `
    <link href="global_components/gameCard/gameCard.css" rel="stylesheet">
    <a href="`+href+`"><div class="card">
    <img src="`+imageUrl+`" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>`+category+`</b></h4>
      <p>`+name+`</p>
    </div>
  </div>
  </a>
  `;


  const shadowRoot = this.attachShadow({ mode: 'closed' });
  shadowRoot.appendChild(cardTemplate.content);
    }

  
}

customElements.define('game-card',GameCard);