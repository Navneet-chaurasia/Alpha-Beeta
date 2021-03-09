/*
This is a prefered method of creating components
1. make a class (Name of component)
2.class must declare all method static
3. class must have a method called "render()"
4. import "loadFile" function
5. provide correct path of component.html file (path should be correct)
6. write style sheet inside <style></style> tags in the same html file

*/
import { loadFile } from '/modules/loadFile.js';


export class NavBar {

static render() {

        loadFile("global_components/NavBar/navbar.html")

        return ;
    }

}