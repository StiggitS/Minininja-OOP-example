//showActors.js
import { gsap } from "gsap";
import ChangeContent from "../src/changeContent";

class showActors {

    constructor(data) {

        const CC = new ChangeContent();

    

        let me = "Poul & Good Guy";
        console.log(` Ræven mødte ${me} i Metru Nui`);


        //** Start Menu */
            const menuContainer = document.createElement("nav");
            menuContainer.id="menuContainer";
            document.body.appendChild(menuContainer);


            const menuItemContainer = document.createElement("ul");
            menuItemContainer.id="menuItemContainer";
            menuContainer.appendChild(menuItemContainer);


            data.forEach((el, index) => {
                const menuItem = document.createElement('li');
                menuItem.setAttribute("data-index", `${index}`);
                menuItem.textContent = el.name;
                menuItemContainer.appendChild(menuItem);
                menuItem.addEventListener("click", (e)=> CC.getData(e,el) );
            }); //** END forEach */


        //** END Menu */


        //** Start Card */

            const cardContainer = document.createElement("section");
            cardContainer.id = "cardContainer";
            document.body.appendChild(cardContainer);


            const card = document.createElement("div");
            card.id="card";
            cardContainer.appendChild(card);


            card.addEventListener("click", (e) => { 

            if(CC.currentIndex > -1) {

                document.querySelector('#info').style.display = "block";

                gsap.to("#info", {
                    duration: 0.05,
                    rotate: 10,
                    scale: 1.3,
                    repeat: 3,
                    transformOrigin: "center",
                    yoyo: true
                })//** END GSAP */


                let addInfo = data[CC.currentIndex].information;
                console.log(addInfo);

                let mStrength = document.querySelector("#strength");
                mStrength.textContent = addInfo.strength;

                let mLives = document.querySelector("#lives");
                mLives.textContent = addInfo.lives;

            };//** END if */


            })//**END AddEvent */


            const childCardArray = ["headline", "imagecon", "content", "info"];

                childCardArray.forEach( ( elem,index )=> {

                    const cardChild = document.createElement('div');
                    cardChild.id=elem;
                    card.appendChild(cardChild);

                }) //END Loop/ForEach

                const showImg = document.createElement('img');
                showImg.id="showImg";
                showImg.src = "../assets/images/ninja.png"
                document.querySelector('#imagecon').appendChild(showImg);



            const infoChild = document.createElement("div");
            infoChild.id="infochild";
            document.querySelector("#info").appendChild(infoChild);


            const strength = document.createElement("div");
            strength.id="strength";
            document.querySelector("#infochild").appendChild(strength);


            const lives = document.createElement("div");
            lives.id = "lives";
            document.querySelector("#infochild").appendChild(lives);

        //** End Card */


        //** Start Footer */

                const footer = document.createElement('footer');
                footer.id="footer"
                document.body.appendChild(footer);

        //** End Footer */


    }//END Constructor


}//END Class

export default showActors;