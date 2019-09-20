(() => {

    var burgerCon = document.querySelector("#burgerCon"),
        menuBut = document.querySelector("#menuCon");

    function hamburgerMenu(){
        console.log("button clicked");
        burgerCon.classList.toggle("slideToggle");
        menuBut.classList.toggle("expanded");
    }

    menuBut.addEventListener("click", hamburgerMenu);

})();