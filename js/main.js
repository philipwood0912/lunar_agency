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

    var teamArr = [brisk, phil, mike, scott];

    var arrowL = document.querySelector("#back"),
        arrowR = document.querySelector("#next"),
        photos = document.querySelectorAll(".photos"),
        nameText = document.querySelector("#name"),
        roleText = document.querySelector("#role"),
        bioText = document.querySelector("#bio"),
        arrows = document.querySelectorAll(".arrowsvg");

    var counter = 0;

    photos[0].classList.remove("filter-bnw");
    nameText.textContent = brisk.name;
    roleText.textContent = brisk.role;
    bioText.textContent = brisk.bio;

    function counterControl(x){
        counter += x;
        if(counter > 3){
            counter = 0;
        }
        if(counter < 0){
            counter = 3;
        }
    }

    function colorControl(){
        photos.forEach(photo => {
            if(counter == photo.dataset.numref){
                photo.classList.remove("filter-bnw");
                var bioSwap = teamArr[counter];
                nameText.textContent = bioSwap.name;
                roleText.textContent = bioSwap.role;
                bioText.textContent = bioSwap.bio;
                //debugger;
            } else {
                photo.classList.add("filter-bnw");
            }
        });
    }

    arrowL.addEventListener("click", function(e){
        counterControl(-1);
        colorControl();
        console.log(counter);
    });

    arrowR.addEventListener("click", function(e){
        counterControl(1);
        colorControl();
        console.log(counter);
    });

    arrows.forEach(arrow => {
        var arrowPar = arrow.parentNode;
        arrowPar.addEventListener("mouseover", function(e) {
            arrowPar.style.background = "#fff";
        });
        arrowPar.addEventListener("mouseleave", function(e) {
            arrowPar.style.background = "none";
        });
    });

    console.log(counter);

})();