import scott from './modules/objectS.js';
import phil from './modules/objectP.js';
import brisk from './modules/objectB.js';
import mike from './modules/objectM.js';

(() => {
    console.log('fired up');
    console.log(scott);
    console.log(phil);
    console.log(brisk);
    console.log(mike);

    var burgerCon = document.querySelector("#burgerCon"),
        menuBut = document.querySelector("#menuCon");


    function hamburgerMenu(){
        console.log("button clicked");
        burgerCon.classList.toggle("slideToggle");
        menuBut.classList.toggle("expanded");
    }

    menuBut.addEventListener("click", hamburgerMenu);
})();