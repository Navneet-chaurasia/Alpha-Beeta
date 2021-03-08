/*
This is a prefered method of creating components
1. make a class (Name of component)
2.class must declare all method static
3. class must have a method called "render()"
4. all the html code should be placed inside of this render method, or whatever way you prefer, 
   but this method must return html code.
   
5. write style sheet inside "styleSheet function which is static" 
   Navneet chaurasia
*/


class NavBar {


    


    static render(){

        return  `
        <style>
        .topnav {
            background-color: blue;
            overflow: hidden;
          }
          
          /* Style the links inside the navigation bar */
          .topnav a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }
          
          /* Change the color of links on hover */
          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }
          
          /* Add a color to the active/current link */
          .topnav a.active {
            background-color:green;
            color: white;
          }
        </style>
        <div class="topnav">
  <a class="active" href="#home">Wonder-Games</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>`;
    }

}