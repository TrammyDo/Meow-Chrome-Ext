chrome.tabs.onCreated.addListener(playMeow)

function playMeow () {
    var audio = new Audio('audio/mixkit-sweet-kitty-meow-93.wav');
    audio.play();
}