// Get all keys
const keys = document.querySelectorAll(".key");

// Play note
function PlayNote(event) {
  let audioKeyCode = getKeyCode(event);

  // Typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  // If key exists
  const cantFoundAnyKey = !key;

  if (cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function getKeyCode(event) {
  let keyCode;
  const isKeyboard = event.type === "keydown";

  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function removePlayingClass (event) {
    event.target.classList.remove('playing')
}


// Click with mouse
keys.forEach(function (key) {
  key.addEventListener("click", PlayNote);
  key.addEventListener('transitionend', removePlayingClass)
});
// Keyboard type
window.addEventListener("keydown", PlayNote);
