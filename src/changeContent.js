//changeContent,js
import { gsap } from "gsap";

class ChangeContent {

    constructor(){

        this.currentDataIndex = -1;

    }//** END Constructor */

    getData(e,el){

        this.currentDataIndex = e.currentTarget.dataset.index;

        document.querySelector('#info').style.display = "none";

        let mHeadline = document.getElementById("headline");
            mHeadline.textContent = el.name


            const imageSrc = el.img
            const img = "../assets/images/" + imageSrc;
            let mImg = document.querySelector("#showImg");
            mImg.src = img;


            let mContent = document.querySelector("#content");
            mContent.textContent = el.text;

            
            gsap.to('#cardContainer', { 

                duration:0.35,
                scaleX:-1.4,
                alpha:0,
                repeat:1,
                yoyo:true,
                rotate:360

            });//**GSAP End */

    }//** END getData */

    get currentIndex(){

        return this.currentDataIndex;

    }

}//** END Class */

export default ChangeContent;