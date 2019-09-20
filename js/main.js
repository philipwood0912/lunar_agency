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

    // Video control constants
    const   video				= document.querySelector('video'),
			playButton 			= document.querySelector('.play'),
			pauseButton 		= document.querySelector('.pause'),
			rewindButton		= document.querySelector('.rewind'),
			fastForwardButton 	= document.querySelector('.fastForward'),
			volume 				= document.querySelector('.volume'),
			volumeSet			= document.querySelector('.volumeSet');

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

    // Video Control code

    // Toggles whether the play or pause button is showing
	function toggleShow() {
		playButton.classList.toggle('show');
		pauseButton.classList.toggle('show');
    }

    // Plays video and changes play button to pause button
	function playVideo() {
		if (playButton.classList.contains('show')) {
			toggleShow();
		}
		video.play();
	}

	// Pauses video and changes pause button to play button
	function pauseVideo() {
		toggleShow();
		video.pause();
	}

	// Jumps to beginning of the video
	function rewindVideo() {
		video.currentTime = 0;
	}

	// Jumps to end of the video
	function fastForwardVideo() {
		video.currentTime = video.duration;
	}

	// Changes and displays volume
	function changeVolume(value) {
		video.volume = value * 0.01;
		volumeSet.textContent = `Volume: ${value}`;
    }
    
    // Change the volume of the video
	changeVolume(volume.value);
	volume.addEventListener("input", function(){ changeVolume(volume.value) });

	// Go to beginning or end of video
	rewindButton.addEventListener("click", rewindVideo);
	fastForwardButton.addEventListener("click", fastForwardVideo);

	// Pause / play the video
	pauseButton.addEventListener("click", pauseVideo);
    playButton.addEventListener("click", playVideo);
    
    // Listen for end of video to change back to play button
	video.addEventListener("ended", toggleShow);

})();