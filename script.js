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
