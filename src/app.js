import showActors from "./showActors";
import "../css/style.scss";
import "../css/styleTwo.scss"
// import newMenu from "./newMenu";
import data from "../assets/json/data.json";

//** Initialize js filen er slettet fordi den ikke er nødvendig */
// **  IIFE: Immediately Invoked Function Expression  */

( () => {
  

  new showActors(data.content);
  // new newMenu(data.content)

 })();
