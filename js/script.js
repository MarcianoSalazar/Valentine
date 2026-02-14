// === Generate stars ===
var starsLayer = document.getElementById('starsLayer');
for (var i = 0; i < 80; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = (Math.random() * 3 + 1) + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = (Math.random() * 5) + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    starsLayer.appendChild(star);
}

// === Generate floating hearts ===
function createHeart() {
    var heart = document.createElement('div');
    heart.className = 'heart';

    var colors = ['#ff4d7d', '#ff6b8a', '#ff8faa', '#ffb3c6', '#d63384'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var size = Math.random() * 18 + 10;

    heart.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + color + '">' +
        '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>' +
        '</svg>';

    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
    document.body.appendChild(heart);

    setTimeout(function() { heart.remove(); }, 16000);
}

// === Generate rose petals ===
function createPetal() {
    var petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.animationDuration = (Math.random() * 6 + 10) + 's';
    petal.style.width = (Math.random() * 8 + 8) + 'px';
    petal.style.height = (Math.random() * 10 + 10) + 'px';
    document.body.appendChild(petal);

    setTimeout(function() { petal.remove(); }, 18000);
}

// === Generate sparkles ===
function createSparkle() {
    var sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(sparkle);

    setTimeout(function() { sparkle.remove(); }, 6000);
}

// Start animations
setInterval(createHeart, 2500);
setInterval(createPetal, 1800);
setInterval(createSparkle, 1500);

// Initial batch
for (var i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 500);
    setTimeout(createPetal, i * 400);
    setTimeout(createSparkle, i * 300);
}

// === Page transitions ===
var openBtn = document.getElementById('openBtn');
var envelopeClick = document.getElementById('envelopeClick');
var backBtn = document.getElementById('backBtn');
var homePage = document.getElementById('homePage');
var letterPage = document.getElementById('letterPage');

function openLetter() {
    homePage.classList.add('hidden');
    setTimeout(function() {
        homePage.style.display = 'none';
        letterPage.classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
}

function closeLetter() {
    letterPage.style.animation = 'none';
    letterPage.style.opacity = '0';
    letterPage.style.transform = 'translateY(20px)';
    setTimeout(function() {
        letterPage.classList.remove('show');
        letterPage.style.display = 'none';
        letterPage.style.animation = '';
        letterPage.style.opacity = '';
        letterPage.style.transform = '';
        homePage.style.display = '';
        homePage.classList.remove('hidden');
    }, 500);
}

openBtn.addEventListener('click', openLetter);
envelopeClick.addEventListener('click', openLetter);
backBtn.addEventListener('click', closeLetter);
