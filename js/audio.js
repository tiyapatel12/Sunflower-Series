 // audio control objects
const audio = new Audio("audio/4 Seasons, Summer, Presto.mp3");
const playPauseButton = document.getElementById("play-pause-button");

//things to happen at audio load
audio.onloadedmetadata = (event) => {
    playPauseButton.src = 'images/play.svg';
}

// Detect when audio finishes playing and restart all necessary values
audio.onended = (event) => {
    button.src = "images/play.svg";
}

// if the audio is paused then button will make it play, but if it is playing then the audio will pause
playPauseButton.onclick = (event) => {
    if(audio.paused) {
        audio.play();
    }
    else{
        audio.pause();
    }
}

// audio.onplay is an event that is triggered every time the audio starts to play
audio.onplay = (event) => {
    // change the button image
    playPauseButton.src = "images/pause.svg";
}

// audio.onpause is an event that is triggered every time the audio starts to pause
audio.onpause = (event) => {
    playPauseButton.src = "images/play.svg";
}