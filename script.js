const messages = [
    "Welcome to the chaos!",
    "Did you know? Randomness is key!",
    "Embrace the chaos!",
    "Life is unpredictable!",
    "Why so serious? Let's have fun!",
    "Did you find the hidden message?",
    "Keep scrolling for surprises!",
    "Randomness is the spice of life!",
    "You are awesome!",
    "Chaos is a ladder!"
];

document.getElementById('random-message').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
});

document.getElementById('random-scroll').addEventListener('click', function() {
    const randomScroll = Math.floor(Math.random() * document.body.scrollHeight);
    window.scrollTo(0, randomScroll);
});

// Change background color/gradient every few seconds
setInterval(() => {
    document.body.classList.toggle('random-bg');
}, 5000);

// Randomly redirect to subpages every 10 seconds
setInterval(() => {
    const pages = ['index.html', 'about.html', 'services.html', 'contact.html'];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}, 10000);

// Randomly invert colors every 8 seconds
setInterval(() => {
    document.body.classList.toggle('inverted');
}, 8000);

// Randomly change UI elements every 3 seconds
setInterval(() => {
    const elements = document.querySelectorAll('h1, h2, p, button');
    elements.forEach(element => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        element.style.color = randomColor;
        element.style.fontSize = Math.random() * (30 - 10) + 10 + 'px';
        element.style.transform = `rotate(${Math.random() * 360}deg)`;
    });
}, 3000);
