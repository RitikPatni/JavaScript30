const videoPlayer = document.getElementById("videoPlayer");
const button = document.getElementById("play");
const volumeSlider = document.getElementById("volumeSlider");
const speedSlider = document.getElementById("speedSlider");
const progressBar = document.getElementById("progressBar");
const progress = document.getElementById("progress");
let playVid = false;
progressBar.style.flexBasis = `0%`;
const rewindButton = document.getElementById("rewind");
const forwardButton = document.getElementById("forward");

function playPause() {
  if (playVid === false) {
    playVid = true;
    videoPlayer.play();
    button.innerText = "▮▮";
    handleProgress();
  } else {
    videoPlayer.pause();
    playVid = false;
    button.innerText = "►";
  }
}

function volumeControl() {
  videoPlayer.volume = volumeSlider.value;
}

function speedControl() {
  videoPlayer.playbackRate = speedSlider.value;
}

function handleProgress() {
  setInterval(() => {
    const percent = videoPlayer.currentTime / videoPlayer.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }, 500);
}

function scrub(e) {
  const scrubTime = e.offsetX / progress.offsetWidth * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
  console.log(scrubTime);
}
function rewind() {
  videoPlayer.currentTime -= 10;
}
function forward() {
  videoPlayer.currentTime += 25;
}
button.addEventListener("click", playPause);
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
rewindButton.addEventListener("click", rewind);
forwardButton.addEventListener("click", forward);
