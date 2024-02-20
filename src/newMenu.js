
class newMenu {

    //** START Constructor*/
    constructor(data){

    

    //** START Menu */

    const menuNav = document.createElement("nav");
    menuNav.id="menuContainerTwo";
    document.body.appendChild(menuNav);

    const menuNavItem = document.createElement("ul");
    menuNavItem.id="menuItemContainerTwo";
    menuNav.appendChild(menuNavItem);

    data.forEach((element, index) =>{
        const menuItem = document.createElement('li'); 
        menuItem.setAttribute("data-index", `${index}`);
        menuItem.textContent = element.name;
        menuNavItem.appendChild(menuItem);
    }); //** END forEach */


}//** END Constructor */




}//** END Class */

export default newMenu;
