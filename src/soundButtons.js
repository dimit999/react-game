
let audio, playBtn;
export default function initAudioPlayer(){

	audio = new Audio();
	audio.src = "https://www.soundjay.com/free-music/midnight-ride-01a.mp3";
	audio.loop = true;
	audio.pause();

	// Set object references
	playBtn = document.getElementById("playPauseButton");

	// Add Event Handling
	playBtn.addEventListener("click",	playPause);

	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playBtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
	    } else {
		    audio.pause();
		    playBtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
	    }
	}
}

