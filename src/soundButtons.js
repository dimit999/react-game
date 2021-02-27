
import React from 'react'

let audio = new Audio();
audio.src = "https://www.soundjay.com/free-music/midnight-ride-01a.mp3";
audio.loop = true;
audio.pause();

export default class SoundButtons extends React.Component {

	playPause(){
		if(audio.paused){
			audio.play();
				document.getElementById("playPauseButton").style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
			} else {
				audio.pause();
				document.getElementById("playPauseButton").style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
			}
	}

  render() {
		if (!this.props.isOpen) {
			return (
				<button id="playPauseButton" onClick={this.playPause}></button>
			)
		} else {
			audio.pause();
			return null
		}
  }
}

