document.addEventListener('DOMContentLoaded', () => {
    const music = new Audio('path_to_your_music.mp3');
    let isPlaying = false;
    const confettiContainer = document.getElementById('confetti');

    function playMusic() {
        if (!isPlaying) {
            music.play();
            isPlaying = true;
        } else {
            music.pause();
            isPlaying = false;
        }
    }

    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s';
        element.style.opacity = 1;
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.position = 'absolute';
            confetti.style.top = Math.random() * window.innerHeight + 'px';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.opacity = Math.random();
            confettiContainer.appendChild(confetti);
        }
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeIn(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });

    document.getElementById('musicToggle').addEventListener('click', playMusic);

    document.getElementById('scrollToTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Story progression logic
    let storyProgress = 0;
    function advanceStory() {
        storyProgress++;
        // Logic for advancing the story
        if (storyProgress > 5) {
            alert('End of story!');
            storyProgress = 0;
        }
    }

    document.getElementById('nextStoryPoint').addEventListener('click', advanceStory);

    // Confetti effect
    document.getElementById('celebrate').addEventListener('click', createConfetti);
});