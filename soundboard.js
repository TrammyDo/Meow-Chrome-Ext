function playMeow (type) {
    var audio = new Audio(type);
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('sweetCat');
    link.addEventListener('click', function () {
        playMeow ('audio/mixkit-sweet-kitty-meow-93.wav')
    });

    console.log ('swwet')
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('angryCat');
    link.addEventListener('click', function () {
        playMeow ('audio/angry-cat-meow-82091.mp3')
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('littleCat');
    link.addEventListener('click', function () {
        playMeow ('audio/mixkit-cartoon-little-cat-meow-91.wav')
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('hungryCat');
    link.addEventListener('click', function () {
        playMeow ('audio/mixkit-domestic-cat-hungry-meow-45.wav')
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('hurtCat');
    link.addEventListener('click', function () {
        playMeow ('audio/mixkit-little-cat-pain-meow-87.wav')
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('attentionCat');
    link.addEventListener('click', function () {
        playMeow ('audio/mixkit-little-cat-attention-meow-86.wav')
    });
});