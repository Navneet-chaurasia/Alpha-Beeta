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
        #navbar{
            height:50px;
            background-color:grey;
        }
        </style>
        <div id="navbar" ></div>`;
    }

}